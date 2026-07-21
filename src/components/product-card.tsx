"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Eye, Sparkles } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { formatPrice, cn } from "@/lib/utils";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export function ProductCard({
  product,
  variant = "default",
  className,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  
  const getFallbackImage = () => {
    if (product.category === "women") return "/images/hero_tropical_resort_wear.jpg";
    if (product.category === "men") return "/images/hero_mens_tropical_style.jpg";
    if (product.category === "jewelry") return "/images/hero_artisan_ocean_jewelry.jpg";
    return "/images/hero_island_boutique_store.jpg";
  };

  const [imgSrc, setImgSrc] = useState<string>(
    product.images?.[0]?.src || getFallbackImage()
  );

  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const { hasItem, toggleItem } = useWishlistStore();
  const isWishlisted = hasItem(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`Added "${product.name}" to cart!`, {
      icon: "🛍️",
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product.id);
    toast.success(
      isWishlisted ? "Removed from wishlist" : "Added to wishlist!",
      { icon: isWishlisted ? "💔" : "❤️" }
    );
  };

  const handleQuickView = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/products/${product.slug}`);
  };

  const discountPercent = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) *
          100
      )
    : 0;

  if (variant === "compact") {
    return (
      <Link
        href={`/products/${product.slug}`}
        className={cn("group block", className)}
      >
        <div className="relative aspect-square rounded-xl overflow-hidden bg-sand-100 mb-2">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            onError={() => setImgSrc(getFallbackImage())}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full">
              NEW
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-ocean-800 line-clamp-1 group-hover:text-ocean-600 transition-colors">
          {product.name}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-sm font-semibold text-gold-700">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-sand-500 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </Link>
    );
  }

  return (
    <div
      className={cn("group relative", className)}
      onMouseEnter={() => {
        setIsHovered(true);
        if (product.images && product.images.length > 1) {
          setImageIndex(1);
          setImgSrc(product.images[1]?.src || getFallbackImage());
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setImageIndex(0);
        setImgSrc(product.images?.[0]?.src || getFallbackImage());
      }}
    >
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand-100 mb-3">
          <motion.img
            src={imgSrc}
            alt={product.images?.[imageIndex]?.alt || product.name}
            onError={() => setImgSrc(getFallbackImage())}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="px-2.5 py-1 bg-emerald-500 text-white text-[11px] font-bold rounded-full backdrop-blur-sm">
                NEW
              </span>
            )}
            {discountPercent > 0 && (
              <span className="px-2.5 py-1 bg-coral-500 text-white text-[11px] font-bold rounded-full">
                -{discountPercent}%
              </span>
            )}
            {product.isTrending && (
              <span className="px-2.5 py-1 bg-gold-500 text-ocean-900 text-[11px] font-bold rounded-full flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> TRENDING
              </span>
            )}
          </div>

          {/* Quick actions */}
          <motion.div
            className="absolute bottom-3 right-3 flex flex-col gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={handleWishlist}
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all",
                isWishlisted
                  ? "bg-coral-500 text-white"
                  : "bg-white/90 text-ocean-700 hover:bg-white"
              )}
              aria-label="Toggle wishlist"
            >
              <Heart
                className="w-4 h-4"
                fill={isWishlisted ? "currentColor" : "none"}
              />
            </button>
            <button
              onClick={handleAddToCart}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/90 text-ocean-700 hover:bg-gold-400 hover:text-ocean-900 transition-all"
              aria-label="Add to cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleQuickView}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/90 text-ocean-700 hover:bg-ocean-500 hover:text-white transition-all"
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="absolute bottom-3 left-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/90 bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1">
                👀 {product.viewCount} viewing
              </span>
              <span className="text-xs text-white/90 bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1">
                🛍️ {product.recentPurchaseCount} sold today
              </span>
            </div>
          </motion.div>
        </div>

        {/* Info */}
        <div className="px-1">
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span className="text-xs font-medium text-sand-700">
              {product.rating}
            </span>
            <span className="text-xs text-sand-400">
              ({product.reviewCount})
            </span>
          </div>
          <h3 className="font-medium text-ocean-800 group-hover:text-ocean-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-sand-500 line-clamp-1 mt-0.5">
            {product.subcategory &&
              product.subcategory.charAt(0).toUpperCase() +
                product.subcategory.slice(1)}
          </p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="font-semibold text-gold-700">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-sand-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
