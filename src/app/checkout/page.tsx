"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Store,
  Truck,
  ShieldCheck,
  MapPin,
  Sparkles,
  ShoppingBag,
  Printer,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice, cn } from "@/lib/utils";

type ShippingMethod = "standard" | "express" | "pickup";
type PaymentMethod = "card" | "paypal";

interface OrderDetails {
  orderId: string;
  date: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  customerName: string;
  email: string;
  address: string;
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation" | "success">(
    "shipping"
  );
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<OrderDetails | null>(null);

  const calculatedSubtotal = subtotal();
  const shipping =
    shippingMethod === "express"
      ? 14.99
      : shippingMethod === "pickup"
      ? 0
      : calculatedSubtotal > 100
      ? 0
      : 7.99;
  const tax = calculatedSubtotal * 0.08;
  const total = calculatedSubtotal + shipping + tax;

  const [form, setForm] = useState({
    firstName: "Maria",
    lastName: "Santos",
    email: "maria@example.com",
    phone: "(702) 555-0199",
    address: "777 Paradise Road",
    apartment: "Suite 400",
    city: "Las Vegas",
    state: "NV",
    zip: "89109",
    cardNumber: "•••• •••• •••• 4242",
    cardName: "Maria Santos",
    expiry: "12/28",
    cvv: "888",
  });

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);

    setTimeout(() => {
      const orderId = `IVT-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const orderData: OrderDetails = {
        orderId,
        date: orderDate,
        items: [...items],
        subtotal: calculatedSubtotal,
        shipping,
        tax,
        total,
        shippingMethod,
        paymentMethod,
        customerName: `${form.firstName} ${form.lastName}`.trim() || "Valued Customer",
        email: form.email || "customer@islandvibetreasures.com",
        address:
          shippingMethod === "pickup"
            ? "In-Store Pickup: 1234 Paradise Rd, Las Vegas, NV 89109"
            : `${form.address}, ${form.city}, ${form.state} ${form.zip}`,
      };

      setPlacedOrder(orderData);
      clearCart();
      setIsPlacingOrder(false);
      setStep("success");
    }, 1500);
  };

  // ORDER SUCCESS STATE
  if (step === "success" && placedOrder) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-sand-50/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-sand-200 shadow-xl overflow-hidden"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-900 text-white p-8 text-center relative overflow-hidden">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-emerald-500/30"
              >
                <Check className="w-10 h-10 stroke-[3]" />
              </motion.div>
              <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                Mahalo for Your Order! 🌴
              </h1>
              <p className="text-ocean-200 mt-2 text-sm sm:text-base">
                Order <span className="text-gold-400 font-bold">#{placedOrder.orderId}</span> has been confirmed.
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Founder Note */}
              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-5 flex items-start gap-4">
                <span className="text-3xl">✨</span>
                <div>
                  <h3 className="font-bold text-ocean-900 text-sm">
                    A Note from Maria Santos, Founder
                  </h3>
                  <p className="text-xs text-sand-700 leading-relaxed mt-1">
                    &ldquo;Thank you for supporting our Las Vegas boutique! Your hand-selected island treasures are being prepared with care and love.&rdquo;
                  </p>
                </div>
              </div>

              {/* Order Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-sand-50 p-4 rounded-xl border border-sand-200">
                  <span className="text-xs font-bold text-sand-500 uppercase tracking-wider block mb-1">
                    {placedOrder.shippingMethod === "pickup" ? "Pickup Location" : "Shipping Address"}
                  </span>
                  <p className="font-semibold text-ocean-900">{placedOrder.customerName}</p>
                  <p className="text-sand-600 text-xs mt-0.5">{placedOrder.address}</p>
                  <p className="text-sand-500 text-xs mt-1">{placedOrder.email}</p>
                </div>

                <div className="bg-sand-50 p-4 rounded-xl border border-sand-200">
                  <span className="text-xs font-bold text-sand-500 uppercase tracking-wider block mb-1">
                    Delivery Estimate
                  </span>
                  <p className="font-semibold text-ocean-900">
                    {placedOrder.shippingMethod === "express"
                      ? "2–3 Business Days (Express)"
                      : placedOrder.shippingMethod === "pickup"
                      ? "Ready in 2 Hours at Store"
                      : "5–7 Business Days (Standard)"}
                  </p>
                  <p className="text-emerald-700 font-medium text-xs mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Order Status: Processing
                  </p>
                </div>
              </div>

              {/* Items Summary Table */}
              <div>
                <h3 className="font-bold text-ocean-900 text-base mb-3 border-b border-sand-200 pb-2">
                  Order Items ({placedOrder.items.reduce((s, i) => s + i.quantity, 0)})
                </h3>
                <div className="divide-y divide-sand-100">
                  {placedOrder.items.map((item, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden relative bg-sand-100 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-ocean-900 text-sm line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-sand-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold text-ocean-900 text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Calculation */}
              <div className="bg-sand-50 p-4 rounded-xl border border-sand-200 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-sand-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(placedOrder.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sand-600">
                  <span>Shipping ({placedOrder.shippingMethod})</span>
                  <span>{placedOrder.shipping === 0 ? "FREE" : formatPrice(placedOrder.shipping)}</span>
                </div>
                <div className="flex justify-between text-sand-600">
                  <span>Estimated Tax</span>
                  <span>{formatPrice(placedOrder.tax)}</span>
                </div>
                <div className="border-t border-sand-200 pt-2 flex justify-between font-bold text-ocean-900 text-base">
                  <span>Total Paid</span>
                  <span className="text-emerald-700">{formatPrice(placedOrder.total)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/shop"
                  className="flex-1 py-3.5 bg-ocean-800 hover:bg-ocean-900 text-white font-bold text-center rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <ShoppingBag className="w-4 h-4" /> Continue Shopping
                </Link>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3.5 bg-white border border-sand-300 hover:bg-sand-50 text-ocean-800 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Printer className="w-4 h-4" /> Print Receipt
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // EMPTY CART STATE
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-sand-200 shadow-sm">
          <span className="text-5xl block mb-4">🛍️</span>
          <h1 className="text-2xl font-bold text-ocean-900 mb-2 font-[family-name:var(--font-display)]">
            Your Cart is Empty
          </h1>
          <p className="text-sand-600 text-sm mb-6">
            Looks like you haven't added any island treasures yet. Explore our latest arrivals!
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-800 hover:bg-ocean-900 text-white font-bold rounded-xl transition-colors text-sm shadow-md"
          >
            Start Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-ocean-600 hover:text-ocean-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Cart
          </Link>
          <h1 className="text-2xl sm:text-4xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
            Checkout
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center gap-3 mt-6">
            {(["shipping", "payment", "confirmation"] as const).map(
              (s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex items-center gap-2 text-xs sm:text-sm font-semibold",
                      step === s ? "text-ocean-900" : "text-sand-400"
                    )}
                  >
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                        step === s
                          ? "bg-ocean-800 text-white shadow-xs"
                          : i < (step === "shipping" ? 0 : step === "payment" ? 1 : 2)
                          ? "bg-emerald-500 text-white"
                          : "bg-sand-200 text-sand-500"
                      )}
                    >
                      {i < (step === "shipping" ? 0 : step === "payment" ? 1 : 2) ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        i + 1
                      )}
                    </span>
                    <span className="capitalize">{s}</span>
                  </div>
                  {i < 2 && (
                    <div className="w-8 h-0.5 bg-sand-200 hidden sm:block" />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main checkout form */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <div className="bg-white rounded-2xl border border-sand-200 p-6 shadow-sm">
                <h2 className="font-bold text-lg text-ocean-900 mb-6">
                  Shipping & Delivery
                </h2>

                {/* Shipping Method Options */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {([
                    { value: "standard", label: "Standard", price: "$7.99", time: "5-7 days", icon: Truck },
                    { value: "express", label: "Express", price: "$14.99", time: "2-3 days", icon: Truck },
                    { value: "pickup", label: "In-Store Pickup", price: "FREE", time: "2 hours", icon: Store },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setShippingMethod(opt.value)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all cursor-pointer",
                        shippingMethod === opt.value
                          ? "border-ocean-600 bg-ocean-50/60 shadow-xs"
                          : "border-sand-200 hover:border-ocean-300 bg-white"
                      )}
                    >
                      <opt.icon className="w-5 h-5 text-ocean-700 mb-2" />
                      <p className="font-bold text-ocean-900 text-sm">
                        {opt.label}
                      </p>
                      <p className="text-xs text-sand-600 mt-0.5 font-medium">
                        {opt.price} &bull; {opt.time}
                      </p>
                    </button>
                  ))}
                </div>

                {shippingMethod !== "pickup" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: "firstName", label: "First Name", type: "text" },
                      { key: "lastName", label: "Last Name", type: "text" },
                      { key: "email", label: "Email Address", type: "email", span: 2 },
                      { key: "phone", label: "Phone Number", type: "tel" },
                      { key: "address", label: "Street Address", type: "text", span: 2 },
                      { key: "apartment", label: "Apt / Suite / Unit (optional)", type: "text" },
                      { key: "city", label: "City", type: "text" },
                      { key: "state", label: "State", type: "text" },
                      { key: "zip", label: "ZIP Code", type: "text" },
                    ].map((field) => (
                      <div
                        key={field.key}
                        className={field.span === 2 ? "sm:col-span-2" : ""}
                      >
                        <label className="block text-xs font-bold text-ocean-800 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) =>
                            setForm({ ...form, [field.key]: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-sm font-medium text-ocean-900 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-ocean-50/80 rounded-xl p-5 border border-ocean-200">
                    <p className="text-sm text-ocean-900 font-bold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-ocean-600" />
                      Las Vegas Flagship Boutique
                    </p>
                    <p className="text-xs text-sand-700 mt-1">
                      1234 Paradise Road, Las Vegas, NV 89109 &bull; Phone: (702) 555-1234
                    </p>
                    <p className="text-xs text-emerald-800 font-semibold mt-2">
                      ✨ Ready in 2 hours for pickup. Show your email receipt upon arrival.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setStep("payment")}
                  className="flex items-center justify-center gap-2 w-full mt-6 py-3.5 bg-ocean-800 hover:bg-ocean-900 text-white font-bold rounded-xl transition-all shadow-md cursor-pointer text-sm"
                >
                  Continue to Payment <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === "payment" && (
              <div className="bg-white rounded-2xl border border-sand-200 p-6 shadow-sm">
                <h2 className="font-bold text-lg text-ocean-900 mb-6">
                  Payment Details
                </h2>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {([
                    { value: "card", label: "Credit / Debit Card", icon: CreditCard },
                    { value: "paypal", label: "PayPal", icon: CreditCard },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setPaymentMethod(opt.value)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 cursor-pointer",
                        paymentMethod === opt.value
                          ? "border-ocean-600 bg-ocean-50/60 shadow-xs"
                          : "border-sand-200 hover:border-ocean-300 bg-white"
                      )}
                    >
                      <opt.icon className="w-5 h-5 text-ocean-700" />
                      <span className="font-bold text-ocean-900 text-sm">
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-ocean-800 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={form.cardNumber}
                        onChange={(e) =>
                          setForm({ ...form, cardNumber: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-sm font-medium text-ocean-900 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ocean-800 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        value={form.cardName}
                        onChange={(e) =>
                          setForm({ ...form, cardName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-sm font-medium text-ocean-900 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-ocean-800 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={form.expiry}
                          onChange={(e) =>
                            setForm({ ...form, expiry: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-sm font-medium text-ocean-900 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-ocean-800 mb-1">
                          CVV Security Code
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          value={form.cvv}
                          onChange={(e) =>
                            setForm({ ...form, cvv: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-sm font-medium text-ocean-900 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep("shipping")}
                    className="px-4 py-3 border border-sand-300 text-sand-700 hover:bg-sand-50 rounded-xl transition-colors text-sm font-bold flex items-center justify-center cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("confirmation")}
                    className="flex-1 py-3.5 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl transition-all shadow-md cursor-pointer text-sm"
                  >
                    Review Order Summary
                  </button>
                </div>
              </div>
            )}

            {step === "confirmation" && (
              <div className="bg-white rounded-2xl border border-sand-200 p-6 shadow-sm space-y-6">
                <h2 className="font-bold text-lg text-ocean-900">
                  Review & Confirm Order
                </h2>

                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <p className="text-xs text-emerald-800 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    256-Bit SSL Encrypted Checkout — Guaranteed Island Vibe Quality
                  </p>
                </div>

                {/* Final Review Items List */}
                <div className="border border-sand-200 rounded-xl p-4 divide-y divide-sand-100">
                  {items.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md overflow-hidden relative bg-sand-100 flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold text-ocean-900 line-clamp-1">{item.name}</p>
                          <p className="text-sand-500 text-xs">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold text-ocean-900">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                {/* PLACE ORDER BUTTON - NOW FULLY WORKING! */}
                <button
                  type="button"
                  disabled={isPlacingOrder}
                  onClick={handlePlaceOrder}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-emerald-600/20 cursor-pointer active:scale-98"
                >
                  {isPlacingOrder ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing Order...
                    </>
                  ) : (
                    <>
                      Place Order — {formatPrice(total)}
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setStep("payment")}
                  className="w-full py-2.5 text-xs font-bold text-sand-600 hover:text-ocean-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Payment Details
                </button>
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          <div>
            <div className="bg-white rounded-2xl border border-sand-200 p-6 sticky top-24 shadow-sm">
              <h3 className="font-bold text-ocean-900 mb-4 text-base">Order Summary</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto mb-4 pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative bg-sand-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-ocean-900 line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-sand-500">Qty: {item.quantity}</p>
                      <p className="text-xs font-bold text-gold-700 mt-0.5">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="border-sand-200 mb-3" />
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-sand-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-ocean-900">{formatPrice(calculatedSubtotal)}</span>
                </div>
                <div className="flex justify-between text-sand-600">
                  <span>Shipping ({shippingMethod})</span>
                  <span className="font-semibold text-ocean-900">
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-sand-600">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-ocean-900">{formatPrice(tax)}</span>
                </div>
                <hr className="border-sand-200 my-2" />
                <div className="flex justify-between text-ocean-900 font-bold text-base">
                  <span>Total</span>
                  <span className="text-emerald-700">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
