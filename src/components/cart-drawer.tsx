"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Package,
  Truck,
  Store,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();

  // Frequently bought together suggestions
  const cartProductIds = items.map((i) => i.productId);
  const suggestions = products
    .filter((p) => !cartProductIds.includes(p.id) && p.isTrending)
    .slice(0, 2);

  const shipping = subtotal() > 100 ? 0 : 7.99;
  const total = subtotal() + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ocean-900/40 z-[60]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-sand-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-ocean-600" />
                <h2 className="font-semibold text-ocean-800 text-lg">
                  Your Cart
                </h2>
                <span className="text-xs text-sand-500 bg-sand-100 px-2 py-0.5 rounded-full">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 rounded-lg hover:bg-sand-100 text-sand-500 hover:text-ocean-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 bg-ocean-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-ocean-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-ocean-800 mb-1">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-sand-500 mb-6">
                    Discover island treasures and add them here!
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-2.5 bg-ocean-500 hover:bg-ocean-600 text-white rounded-xl text-sm font-medium transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-3 p-3 bg-sand-50 rounded-xl border border-sand-200"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${item.productId}`}
                          onClick={closeCart}
                          className="text-sm font-medium text-ocean-800 hover:text-ocean-600 line-clamp-1 transition-colors"
                        >
                          {item.name}
                        </Link>
                        {item.variant && (
                          <p className="text-xs text-sand-500 mt-0.5">
                            {item.variant.type}: {item.variant.value}
                          </p>
                        )}
                        <p className="text-sm font-semibold text-gold-700 mt-1">
                          {formatPrice(item.price)}
                        </p>

                        {/* Qty controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-lg border border-sand-300 flex items-center justify-center text-ocean-600 hover:bg-ocean-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium text-ocean-800 w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-lg border border-sand-300 flex items-center justify-center text-ocean-600 hover:bg-ocean-50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto p-1 text-sand-400 hover:text-coral-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Upsell suggestions */}
                  {suggestions.length > 0 && items.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-xs font-semibold text-sand-500 uppercase tracking-wider mb-3">
                        🌺 Complete Your Look
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {suggestions.map((p) => (
                          <Link
                            key={p.id}
                            href={`/products/${p.slug}`}
                            onClick={closeCart}
                            className="p-2 bg-white rounded-lg border border-sand-200 hover:border-ocean-300 hover:shadow-sm transition-all group"
                          >
                            <div className="w-full aspect-square rounded-md overflow-hidden bg-sand-100 mb-2">
                              <Image
                                src={p.images[0].src}
                                alt={p.name}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <p className="text-xs text-ocean-800 line-clamp-1 font-medium">
                              {p.name}
                            </p>
                            <p className="text-xs font-semibold text-gold-600">
                              {formatPrice(p.price)}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-sand-200 p-4 space-y-3">
                {/* Trust badges */}
                <div className="flex items-center justify-between text-xs text-sand-600 pb-2 border-b border-sand-100">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-ocean-500" /> Free over $100
                  </span>
                  <span className="flex items-center gap-1">
                    <Store className="w-3 h-3 text-ocean-500" /> In-store pickup
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" /> 30-day
                    returns
                  </span>
                </div>

                {/* Totals */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-sand-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal())}</span>
                  </div>
                  <div className="flex justify-between text-sand-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-emerald-600 font-medium">
                          FREE
                        </span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>
                  {subtotal() < 100 && (
                    <p className="text-xs text-ocean-500">
                      Add {formatPrice(100 - subtotal())} more for free
                      shipping!
                    </p>
                  )}
                  <div className="flex justify-between text-ocean-800 font-bold text-base pt-1 border-t border-sand-200">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-semibold rounded-xl transition-colors"
                >
                  Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block text-center text-sm text-ocean-600 hover:text-ocean-800 transition-colors"
                >
                  View Full Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
