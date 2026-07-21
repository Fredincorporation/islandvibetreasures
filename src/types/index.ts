export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  type: "size" | "color" | "material";
  value: string;
  hex?: string; // for color swatches
  available: boolean;
}

export interface ProductReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  body: string;
}

export interface BundleProduct {
  productId: string;
  name: string;
  price: number;
  image: string;
}

export interface ProductBundle {
  id: string;
  title: string;
  discount: number; // percentage off
  products: BundleProduct[];
}

export interface CompleteTheLook {
  productId: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  story: string;
  category: "women" | "men" | "jewelry" | "accessories" | "vacation";
  subcategory?: string;
  images: ProductImage[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
  reviews: ProductReview[];
  inStock: boolean;
  isNew: boolean;
  isTrending: boolean;
  tags: string[];
  bundles?: ProductBundle[];
  completeTheLook?: CompleteTheLook[];
  viewCount: number;
  recentPurchaseCount: number;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: {
    type: string;
    value: string;
  };
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export type ShippingMethod = "standard" | "express" | "pickup";

export type PaymentMethod = "card" | "paypal" | "venmo";
