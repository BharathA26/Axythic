import { CheckCircle, Package, Truck, Home } from "lucide-react";
import type { CartItem } from "./data";
import type { View } from "./types";

interface OrderSummaryProps {
  cart: CartItem[];
  onNavigate: (view: View) => void;
}

const orderId = `SC-${Date.now().toString().slice(-6)}`;

export default function OrderSummary({ cart, onNavigate }: OrderSummaryProps) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-50 min-h-screen flex items-start justify-center pt-12 px-4 pb-12">
      <div className="w-full max-w-3xl space-y-6">
        {/* Success Banner */}
        <div className="bg-[#1a3c34] rounded-3xl p-8 text-center text-white">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-300" />
          <h1 className="text-3xl font-extrabold mb-2">Order Confirmed! 🎉</h1>
          <p className="text-green-200 mb-1">
            Thank you for shopping with Shopcart
          </p>
          <p className="text-green-300 font-bold text-sm">Order #{orderId}</p>
        </div>

        {/* Tracker */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-extrabold text-gray-900 mb-6">Order Status</h3>
          <div className="flex items-start justify-between relative">
            <div className="absolute top-4 left-6 right-6 h-[2px] bg-gray-200 z-0" />
            <div className="absolute top-4 left-6 w-1/3 h-[2px] bg-[#1a3c34] z-0" />
            {[
              {
                Icon: CheckCircle,
                label: "Order Placed",
                sub: "Just now",
                done: true,
              },
              {
                Icon: Package,
                label: "Processing",
                sub: "1–2 hrs",
                done: false,
              },
              {
                Icon: Truck,
                label: "Out for Delivery",
                sub: "2–3 business days",
                done: false,
              },
              {
                Icon: Home,
                label: "Delivered",
                sub: "3–5 business days",
                done: false,
              },
            ].map(({ Icon, label, sub, done }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center relative z-10 flex-1"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-2 ${done ? "bg-[#1a3c34] border-[#1a3c34] text-white" : "bg-white border-gray-200 text-gray-400"}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <p
                  className={`text-xs font-bold ${done ? "text-[#1a3c34]" : "text-gray-500"}`}
                >
                  {label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Items */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-extrabold text-gray-900 mb-4">Items Ordered</h3>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedColor}`}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-800 line-clamp-1">
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
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-extrabold text-gray-900 mb-4">
              Payment Details
            </h3>
            <div className="space-y-2.5 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-emerald-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span className="font-semibold text-gray-900">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="h-[1px] bg-gray-100 my-1" />
              <div className="flex justify-between font-extrabold text-base text-gray-900">
                <span>Total Paid</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">Payment Method</p>
              <p className="text-sm font-bold text-gray-800 mt-1">
                Visa •••• 4242
              </p>
            </div>
            <div className="mt-3">
              <p className="text-xs text-gray-400">Delivery Address</p>
              <p className="text-sm font-bold text-gray-800 mt-1">
                123 Main St, New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onNavigate("products")}
            className="flex-1 bg-[#1a3c34] hover:bg-[#16342e] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-green-900/20 text-center"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => onNavigate("home")}
            className="flex-1 border-2 border-[#1a3c34] text-[#1a3c34] hover:bg-green-50 font-bold py-3.5 rounded-xl transition-colors text-center"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
