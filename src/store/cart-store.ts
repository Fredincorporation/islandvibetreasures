import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, variant?: { type: string; value: string }) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

let nextCartItemId = 1;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, variant) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) =>
              item.productId === product.id &&
              item.variant?.value === variant?.value
          );

          if (existingIndex >= 0) {
            const updated = [...state.items];
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity + 1,
            };
            return { items: updated, isOpen: true };
          }

          return {
            items: [
              ...state.items,
              {
                id: `cart-${nextCartItemId++}`,
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0].src,
                quantity: 1,
                variant,
              },
            ],
            isOpen: true,
          };
        });
      },

      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),

      updateQuantity: (itemId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== itemId),
            };
          }
          return {
            items: state.items.map((item) =>
              item.id === itemId ? { ...item, quantity } : item
            ),
          };
        }),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

      subtotal: () =>
        get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "island-cart",
    }
  )
);
