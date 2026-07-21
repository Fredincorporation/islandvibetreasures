"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ArrowLeft,
  Truck,
  Store,
  ShieldCheck,
  Package,
  Sparkles,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } =
    useCartStore();

  const shipping = subtotal() > 100 ? 0 : 7.99;
  const tax = subtotal() * 0.08;
  const total = subtotal() + shipping + tax;

  const cartProductIds = items.map((i) => i.productId);
  const suggestions = products
    .filter((p) => !cartProductIds.includes(p.id) && p.isTrending)
    .slice(0, 3);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-ocean-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-ocean-300" />
          </div>
          <h1 className="text-2xl font-bold text-ocean-800 mb-2 font-[family-name:var(--font-display)]">
            Your Cart is Empty
          </h1>
          <p className="text-sand-500 mb-8">
            Looks like you haven't added any treasures yet. Explore our
            collection and find your island vibe!
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-xl transition-colors"
          >
            Start Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ocean-800 font-[family-name:var(--font-display)]">
              Shopping Cart
            </h1>
            <p className="text-sand-500 text-sm mt-1">
              {items.length} {items.length === 1 ? "item" : "items"} in your
              cart
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-sand-500 hover:text-coral-500 transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="flex gap-4 p-4 bg-white rounded-xl border border-sand-200"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-sand-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.productId}`}
                    className="font-medium text-ocean-800 hover:text-ocean-600 line-clamp-1 transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.variant && (
                    <p className="text-xs text-sand-500 mt-0.5 capitalize">
                      {item.variant.type}: {item.variant.value}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-gold-700 mt-1">
                    {formatPrice(item.price)}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-sand-300 rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center text-ocean-600 hover:bg-sand-100 transition-colors rounded-l-lg"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-ocean-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center text-ocean-600 hover:bg-sand-100 transition-colors rounded-r-lg"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ocean-800">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-sand-400 hover:text-coral-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-sm text-ocean-600 hover:text-ocean-800 transition-colors mt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
            </Link>
          </div>

          {/* Order summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-sand-200 p-6">
              <h2 className="font-bold text-ocean-800 text-lg mb-4">
                Order Summary
              </h2>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-sand-600">
                  <span>Subtotal ({items.length} items)</span>
                  <span>{formatPrice(subtotal())}</span>
                </div>
                <div className="flex justify-between text-sand-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-emerald-600 font-medium">FREE</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sand-600">
                  <span>Tax (est.)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                {subtotal() < 100 && (
                  <p className="text-xs text-ocean-500 bg-ocean-50 rounded-lg p-2 text-center">
                    Add {formatPrice(100 - subtotal())} more for free shipping!
                  </p>
                )}
                <hr className="border-sand-200" />
                <div className="flex justify-between text-ocean-800 font-bold text-base">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full mt-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-bold rounded-xl transition-colors"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-sand-100">
                <div className="text-center">
                  <Truck className="w-4 h-4 text-ocean-500 mx-auto mb-0.5" />
                  <p className="text-[10px] text-sand-500">Free over $100</p>
                </div>
                <div className="text-center">
                  <Store className="w-4 h-4 text-ocean-500 mx-auto mb-0.5" />
                  <p className="text-[10px] text-sand-500">In-store pickup</p>
                </div>
                <div className="text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mx-auto mb-0.5" />
                  <p className="text-[10px] text-sand-500">Secure checkout</p>
                </div>
              </div>
            </div>

            {/* Upsell */}
            {suggestions.length > 0 && (
              <div className="bg-sand-50 rounded-xl border border-sand-200 p-4">
                <h3 className="font-semibold text-ocean-800 text-sm flex items-center gap-1 mb-3">
                  <Sparkles className="w-4 h-4 text-gold-500" /> Add to Your
                  Haul
                </h3>
                <div className="space-y-2">
                  {suggestions.map((p) => (
                    <ProductCard key={p.id} product={p} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
