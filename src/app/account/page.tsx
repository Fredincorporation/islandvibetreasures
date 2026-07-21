import Link from "next/link";
import { User, Heart, Package, MapPin, LogOut } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-ocean-900 py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
          My Account
        </h1>
      </div>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-sand-200 p-8 text-center">
          <div className="w-20 h-20 bg-ocean-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-ocean-400" />
          </div>
          <h2 className="text-xl font-bold text-ocean-800 mb-2">Welcome Back!</h2>
          <p className="text-sand-500 mb-6">Sign in to manage your orders, wishlist, and account details.</p>
          <button className="w-full py-3 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-xl transition-colors mb-3">
            Sign In
          </button>
          <button className="w-full py-3 border border-sand-300 text-ocean-800 hover:bg-sand-50 font-semibold rounded-xl transition-colors">
            Create Account
          </button>
          <div className="mt-8 space-y-3 text-left">
            <Link href="/wishlist" className="flex items-center gap-3 text-sm text-sand-600 hover:text-ocean-600 transition-colors">
              <Heart className="w-4 h-4" /> Wishlist
            </Link>
            <Link href="/cart" className="flex items-center gap-3 text-sm text-sand-600 hover:text-ocean-600 transition-colors">
              <Package className="w-4 h-4" /> Orders
            </Link>
            <Link href="/visit" className="flex items-center gap-3 text-sm text-sand-600 hover:text-ocean-600 transition-colors">
              <MapPin className="w-4 h-4" /> Store Locations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
