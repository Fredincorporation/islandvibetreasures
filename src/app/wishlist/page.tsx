"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { toast } from "sonner";

export default function WishlistPage() {
  const { items, toggleItem, hasItem } = useWishlistStore();
  const addItem = useCartStore((s) => s.addItem);
  const wishlistProducts = products.filter((p) => items.includes(p.id));

  return (
    <div className="min-h-screen">
      <div className="bg-ocean-900 py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
          Your Wishlist
        </h1>
        <p className="text-ocean-300 mt-2">{items.length} saved treasures</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-ocean-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-ocean-300" />
            </div>
            <h2 className="text-xl font-bold text-ocean-800 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-sand-500 mb-6">
              Start saving your favorite island treasures!
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-xl transition-colors"
            >
              Explore Collections <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
