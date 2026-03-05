import { useState } from "react";
import { ArrowLeft, CreditCard, Truck, MapPin } from "lucide-react";
import type { CartItem } from "./data";
import type { View } from "./types";

interface CheckoutProps {
  cart: CartItem[];
  onNavigate: (view: View) => void;
  onPlaceOrder: () => void;
}

function Field({
  label,
  placeholder,
  type = "text",
  span = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  span?: boolean;
}) {
  return (
    <div className={span ? "md:col-span-2" : ""}>
      <label className="block text-xs font-bold text-gray-600 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3c34] focus:border-transparent transition-all"
      />
    </div>
  );
}

export default function Checkout({
  cart,
  onNavigate,
  onPlaceOrder,
}: CheckoutProps) {
  const [payMethod, setPayMethod] = useState<"card" | "standard" | "express">(
    "card",
  );
  const [shipping, setShipping] = useState<"standard" | "express">("standard");

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipCost = shipping === "express" ? 14.99 : subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipCost + tax;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => onNavigate("cart")}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a3c34] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </button>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Checkout</h1>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8 text-sm font-medium">
          {["Cart", "Delivery", "Payment", "Confirmation"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i <= 1 ? "bg-[#1a3c34] text-white" : "bg-gray-200 text-gray-500"}`}
              >
                {i + 1}
              </div>
              <span className={i <= 1 ? "text-[#1a3c34]" : "text-gray-400"}>
                {step}
              </span>
              {i < 3 && <div className="w-8 h-[2px] bg-gray-200 rounded" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 space-y-5">
            {/* Delivery Info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-[#1a3c34]" />
                <h3 className="font-extrabold text-gray-900">
                  Delivery Information
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="First Name" placeholder="John" />
                <Field label="Last Name" placeholder="Doe" />
                <Field
                  label="Email"
                  placeholder="john@example.com"
                  type="email"
                />
                <Field label="Phone" placeholder="+1 (555) 000-0000" />
                <Field
                  label="Address"
                  placeholder="123 Main Street, Apt 4B"
                  span
                />
                <Field label="City" placeholder="New York" />
                <Field label="Zip / Postal Code" placeholder="10001" />
                <Field label="Country" placeholder="United States" />
                <Field
                  label="Email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <Truck className="w-5 h-5 text-[#1a3c34]" />
                <h3 className="font-extrabold text-gray-900">
                  Shipping Method
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    id: "standard" as const,
                    label: "Standard Delivery",
                    sub: "3–5 business days",
                    price: subtotal > 50 ? 0 : 9.99,
                  },
                  {
                    id: "express" as const,
                    label: "Express Delivery",
                    sub: "1–2 business days",
                    price: 14.99,
                  },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${shipping === opt.id ? "border-[#1a3c34] bg-green-50/40" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${shipping === opt.id ? "border-[#1a3c34]" : "border-gray-300"}`}
                      >
                        {shipping === opt.id && (
                          <div className="w-2 h-2 rounded-full bg-[#1a3c34]" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          {opt.label}
                        </p>
                        <p className="text-xs text-gray-400">{opt.sub}</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm text-gray-900">
                      {opt.price === 0 ? "Free" : `$${opt.price.toFixed(2)}`}
                    </span>
                    <input
                      type="radio"
                      className="sr-only"
                      checked={shipping === opt.id}
                      onChange={() => setShipping(opt.id)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard className="w-5 h-5 text-[#1a3c34]" />
                <h3 className="font-extrabold text-gray-900">
                  Payment Details
                </h3>
              </div>
              <div className="flex gap-3 mb-5">
                {(["card", "standard", "express"] as const).map((method) => {
                  const labels: Record<string, string> = {
                    card: "Credit Card",
                    standard: "PayPal",
                    express: "Google Pay",
                  };
                  return (
                    <button
                      key={method}
                      onClick={() => setPayMethod(method)}
                      className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${payMethod === method ? "border-[#1a3c34] bg-green-50/40 text-[#1a3c34]" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                    >
                      {labels[method]}
                    </button>
                  );
                })}
              </div>
              {payMethod === "card" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                    span
                  />
                  <Field label="Cardholder Name" placeholder="John Doe" span />
                  <Field label="Expiry Date" placeholder="MM / YY" />
                  <Field label="CVV" placeholder="••••" type="password" />
                </div>
              )}
              {payMethod !== "card" && (
                <div className="text-center py-6 text-gray-400 text-sm">
                  You will be redirected to{" "}
                  {payMethod === "standard" ? "PayPal" : "Google Pay"} to
                  complete payment.
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-gray-900 text-lg mb-4">
                Review Item and Shipping
              </h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor}`}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-800 line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-[1px] bg-gray-100 my-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {shipCost === 0 ? "Free" : `$${shipCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span className="font-semibold text-gray-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="h-[1px] bg-gray-100" />
                <div className="flex justify-between font-extrabold text-base">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={onPlaceOrder}
                className="mt-5 w-full bg-[#1a3c34] hover:bg-[#16342e] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-green-900/20"
              >
                Place Order →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
