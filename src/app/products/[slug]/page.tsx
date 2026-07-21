"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  ShoppingBag,
  Share2,
  Truck,
  Store,
  ShieldCheck,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
  Eye,
  Sparkles,
  Clock,
  ArrowRight,
  Check,
  Package,
} from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { formatPrice, cn } from "@/lib/utils";
import { toast } from "sonner";
import { Product, ProductVariant } from "@/types";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ocean-800 mb-2">
            Product Not Found
          </h1>
          <p className="text-sand-500 mb-4">
            This treasure has drifted away...
          </p>
          <Link
            href="/shop"
            className="text-ocean-500 hover:text-ocean-600 font-medium"
          >
            Browse our collection
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews" | "shipping">("description");
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const addItem = useCartStore((s) => s.addItem);
  const { hasItem, toggleItem } = useWishlistStore();
  const isWishlisted = hasItem(product.id);

  const relatedProducts = getRelatedProducts(product, 4);

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variant.type]: variant.value,
    }));
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handleAddToCart = () => {
    const variant = Object.entries(selectedVariants).length
      ? {
          type: Object.keys(selectedVariants).join(", "),
          value: Object.values(selectedVariants).join(", "),
        }
      : undefined;

    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    toast.success(
      `${quantity}x "${product.name}" added to cart!`,
      { icon: "🛍️" }
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // In a real app, redirect to checkout
  };

  const discountPercent = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
      )
    : 0;

  const sizeVariants = product.variants.filter((v) => v.type === "size");
  const colorVariants = product.variants.filter((v) => v.type === "color");
  const materialVariants = product.variants.filter((v) => v.type === "material");

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-sand-500 mb-6">
          <Link href="/" className="hover:text-ocean-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={`/shop/${product.category}`}
            className="hover:text-ocean-600 transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ocean-800 truncate">{product.name}</span>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand-100 cursor-crosshair"
              onMouseEnter={() => setShowZoom(true)}
              onMouseLeave={() => setShowZoom(false)}
              onMouseMove={handleImageMouseMove}
            >
              <Image
                src={product.images[selectedImage].src}
                alt={product.images[selectedImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Zoom lens */}
              {showZoom && (
                <div
                  className="absolute inset-0 bg-no-repeat"
                  style={{
                    backgroundImage: `url(${product.images[selectedImage].src}?w=1200&q=90)`,
                    backgroundSize: "200%",
                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  }}
                />
              )}

              {/* Image nav */}
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage === 0
                      ? product.images.length - 1
                      : selectedImage - 1
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-ocean-700" />
              </button>
              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage + 1) % product.images.length
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-ocean-700" />
              </button>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.isNew && (
                  <span className="px-2.5 py-1 bg-emerald-500 text-white text-[11px] font-bold rounded-full">
                    NEW
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-2.5 py-1 bg-coral-500 text-white text-[11px] font-bold rounded-full">
                    -{discountPercent}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden flex-shrink-0",
                    i === selectedImage
                      ? "ring-2 ring-ocean-500 ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-6">
            {/* Title & price */}
            <div>
              <div className="flex items-center gap-2 text-xs text-sand-500 mb-2">
                <span className="uppercase tracking-wider">
                  {product.category}
                </span>
                {product.subcategory && (
                  <>
                    <span>•</span>
                    <span className="capitalize">{product.subcategory}</span>
                  </>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean-800 font-[family-name:var(--font-display)]">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(product.rating)
                          ? "text-gold-400 fill-gold-400"
                          : "text-sand-300 fill-sand-300"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-ocean-700">
                  {product.rating}
                </span>
                <span className="text-sm text-sand-500">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-3xl font-bold text-gold-700">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-lg text-sand-400 line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                    <span className="text-sm font-semibold text-coral-500 bg-coral-50 px-2 py-0.5 rounded-full">
                      Save {formatPrice(product.compareAtPrice - product.price)}{" "}
                      ({discountPercent}%)
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Variant selectors */}
            <div className="space-y-5">
              {sizeVariants.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-ocean-800 mb-2">
                    Size:{" "}
                    <span className="text-sand-500 font-normal">
                      {selectedVariants["size"] || "Select"}
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizeVariants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => handleVariantSelect(v)}
                        disabled={!v.available}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                          !v.available
                            ? "border-sand-200 text-sand-300 cursor-not-allowed line-through"
                            : selectedVariants["size"] === v.value
                            ? "border-ocean-500 bg-ocean-500 text-white"
                            : "border-sand-300 text-ocean-700 hover:border-ocean-400"
                        )}
                      >
                        {v.value}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {colorVariants.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-ocean-800 mb-2">
                    Color:{" "}
                    <span className="text-sand-500 font-normal">
                      {selectedVariants["color"] || "Select"}
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colorVariants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => handleVariantSelect(v)}
                        disabled={!v.available}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border",
                          !v.available
                            ? "border-sand-200 text-sand-300 cursor-not-allowed opacity-50"
                            : selectedVariants["color"] === v.value
                            ? "border-ocean-500 bg-ocean-50"
                            : "border-sand-300 hover:border-ocean-400"
                        )}
                        title={v.name}
                      >
                        {v.hex && (
                          <span
                            className="w-4 h-4 rounded-full border border-sand-300"
                            style={{ backgroundColor: v.hex }}
                          />
                        )}
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {materialVariants.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-ocean-800 mb-2">
                    Material:{" "}
                    <span className="text-sand-500 font-normal">
                      {selectedVariants["material"] || "Select"}
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {materialVariants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => handleVariantSelect(v)}
                        disabled={!v.available}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                          !v.available
                            ? "border-sand-200 text-sand-300 cursor-not-allowed"
                            : selectedVariants["material"] === v.value
                            ? "border-ocean-500 bg-ocean-500 text-white"
                            : "border-sand-300 text-ocean-700 hover:border-ocean-400"
                        )}
                      >
                        {v.value}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity + Add to cart */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-ocean-800">
                  Qty:
                </label>
                <div className="flex items-center border border-sand-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-ocean-600 hover:bg-sand-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-ocean-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-ocean-600 hover:bg-sand-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {product.inStock ? (
                  <span className="text-xs text-emerald-600 flex items-center gap-1">
                    <Check className="w-3 h-3" /> In Stock
                  </span>
                ) : (
                  <span className="text-xs text-coral-500">Out of Stock</span>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" /> Add to Cart —{" "}
                  {formatPrice(product.price * quantity)}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-3.5 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-semibold rounded-xl transition-colors"
                >
                  Buy It Now
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    toggleItem(product.id);
                    toast.success(
                      isWishlisted
                        ? "Removed from wishlist"
                        : "Added to wishlist!",
                      { icon: isWishlisted ? "💔" : "❤️" }
                    );
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border",
                    isWishlisted
                      ? "border-coral-400 bg-coral-50 text-coral-600"
                      : "border-sand-300 text-sand-600 hover:border-ocean-400 hover:text-ocean-600"
                  )}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={isWishlisted ? "currentColor" : "none"}
                  />
                  {isWishlisted ? "Wishlisted" : "Wishlist"}
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Link copied to clipboard!", {
                      icon: "📋",
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-sand-300 text-sand-600 hover:border-ocean-400 hover:text-ocean-600 transition-all"
                >
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 p-4 bg-sand-50 rounded-xl border border-sand-200">
              <div className="text-center">
                <Truck className="w-5 h-5 text-ocean-500 mx-auto mb-1" />
                <p className="text-[11px] text-sand-600">Free shipping over $100</p>
              </div>
              <div className="text-center">
                <Store className="w-5 h-5 text-ocean-500 mx-auto mb-1" />
                <p className="text-[11px] text-sand-600">In-store pickup LV</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                <p className="text-[11px] text-sand-600">30-day returns</p>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-sand-600">
                <Eye className="w-4 h-4 text-ocean-500" />
                {product.viewCount} people viewing
              </span>
              <span className="flex items-center gap-1 text-sand-600">
                <ShoppingBag className="w-4 h-4 text-gold-500" />
                {product.recentPurchaseCount} sold recently
              </span>
            </div>
          </div>
        </div>

        {/* Description / Reviews / Shipping tabs */}
        <div className="mt-12 border-t border-sand-200 pt-8">
          <div className="flex border-b border-sand-200 gap-6 mb-6">
            {(["description", "reviews", "shipping"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-3 text-sm font-semibold transition-all border-b-2",
                  activeTab === tab
                    ? "border-ocean-500 text-ocean-800"
                    : "border-transparent text-sand-500 hover:text-ocean-600"
                )}
              >
                {tab === "description"
                  ? "Description"
                  : tab === "reviews"
                  ? `Reviews (${product.reviewCount})`
                  : "Shipping & Returns"}
              </button>
            ))}
          </div>

          {activeTab === "description" && (
            <div className="max-w-3xl">
              <p className="text-ocean-700 leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-100">
                <h3 className="font-semibold text-ocean-800 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-500" /> The Island Story
                </h3>
                <p className="text-ocean-600 leading-relaxed text-sm">
                  {product.story}
                </p>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="max-w-3xl">
              {/* Review summary */}
              <div className="flex items-center gap-4 p-4 bg-sand-50 rounded-xl mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-ocean-800">
                    {product.rating}
                  </p>
                  <div className="flex items-center gap-0.5 justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-3.5 h-3.5",
                          i < Math.floor(product.rating)
                            ? "text-gold-400 fill-gold-400"
                            : "text-sand-300 fill-sand-300"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-sand-500 mt-1">
                    Based on {product.reviewCount} reviews
                  </p>
                </div>
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = product.reviews.filter(
                      (r) => r.rating === star
                    ).length;
                    const pct =
                      product.reviews.length > 0
                        ? (count / product.reviews.length) * 100
                        : 0;
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs text-sand-500 w-4">
                          {star}
                        </span>
                        <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
                        <div className="flex-1 h-1.5 bg-sand-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gold-400 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-sand-500 w-6">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Review list */}
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 bg-white border border-sand-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-ocean-100 overflow-hidden flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-ocean-800 text-sm">
                          {review.author}
                        </p>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-gold-400 fill-gold-400"
                            />
                          ))}
                          <span className="text-xs text-sand-400 ml-2">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-ocean-800 text-sm mb-1">
                      {review.title}
                    </h4>
                    <p className="text-sm text-sand-600">{review.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="max-w-3xl space-y-4">
              <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
                <Truck className="w-5 h-5 text-ocean-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-ocean-800">
                    Free Standard Shipping
                  </h4>
                  <p className="text-sm text-sand-600">
                    Free on orders over $100. Standard shipping (5-7 business
                    days) is $7.99 for orders under $100.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
                <Store className="w-5 h-5 text-ocean-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-ocean-800">
                    In-Store Pickup — Las Vegas
                  </h4>
                  <p className="text-sm text-sand-600">
                    Pick up your order at 1234 Paradise Road, Las Vegas, NV
                    89109. Usually ready within 2 hours during store hours (10AM
                    — 8PM daily).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-ocean-800">
                    30-Day Returns
                  </h4>
                  <p className="text-sm text-sand-600">
                    Not satisfied? Return unworn items within 30 days for a full
                    refund or exchange. Free return shipping on exchanges.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Complete the Look */}
        {product.completeTheLook && product.completeTheLook.length > 0 && (
          <section className="mt-12 border-t border-sand-200 pt-8">
            <h2 className="text-2xl font-bold text-ocean-800 mb-6 font-[family-name:var(--font-display)]">
              ✨ Complete the Look
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.completeTheLook.map((item) => {
                const linkedProduct = products.find((p) => p.id === item.productId);
                return (
                  <Link
                    key={item.productId}
                    href={
                      linkedProduct
                        ? `/products/${linkedProduct.slug}`
                        : "#"
                    }
                    className="group flex items-center gap-4 p-4 bg-sand-50 rounded-xl border border-sand-200 hover:border-ocean-300 hover:shadow-md transition-all"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-ocean-800 text-sm line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-sand-500 mt-0.5">
                        {item.description}
                      </p>
                      <p className="text-sm font-semibold text-gold-600 mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sand-400 group-hover:text-ocean-500 transition-colors flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Bundle deal */}
        {product.bundles && product.bundles.length > 0 && (
          <section className="mt-8">
            {product.bundles.map((bundle) => {
              const bundleTotal = bundle.products.reduce(
                (sum, p) => sum + p.price,
                0
              );
              const discountedTotal =
                bundleTotal * (1 - bundle.discount / 100);
              return (
                <div
                  key={bundle.id}
                  className="bg-gradient-to-r from-gold-50 to-ocean-50 rounded-2xl p-6 border border-gold-200"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-5 h-5 text-gold-600" />
                    <h3 className="font-bold text-ocean-800 text-lg">
                      {bundle.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-coral-500 text-white text-xs font-bold rounded-full">
                      SAVE {bundle.discount}%
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    {bundle.products.map((bp) => (
                      <div
                        key={bp.productId}
                        className="flex items-center gap-3 bg-white rounded-xl p-3"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-sand-100">
                          <Image
                            src={bp.image}
                            alt={bp.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-ocean-800 line-clamp-2">
                            {bp.name}
                          </p>
                          <p className="text-xs text-sand-500">
                            {formatPrice(bp.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-sand-500 line-through mr-2">
                        {formatPrice(bundleTotal)}
                      </span>
                      <span className="text-xl font-bold text-ocean-800">
                        {formatPrice(discountedTotal)}
                      </span>
                      <span className="text-sm text-emerald-600 ml-2">
                        You save {formatPrice(bundleTotal - discountedTotal)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        bundle.products.forEach((bp) => {
                          const p = products.find((pr) => pr.id === bp.productId);
                          if (p) addItem(p);
                        });
                        toast.success("Bundle added to cart!", {
                          icon: "🎁",
                        });
                      }}
                      className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-semibold rounded-xl transition-colors text-sm"
                    >
                      Add Bundle to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12 border-t border-sand-200 pt-8">
            <h2 className="text-2xl font-bold text-ocean-800 mb-6 font-[family-name:var(--font-display)]">
              You May Also Love
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
