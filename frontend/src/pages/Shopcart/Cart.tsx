import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import type { CartItem } from "./data";
import type { View } from "./types";

interface CartProps {
  cart: CartItem[];
  onUpdateQty: (id: number, color: string, delta: number) => void;
  onRemove: (id: number, color: string) => void;
  onNavigate: (view: View) => void;
}

export default function Cart({
  cart,
  onUpdateQty,
  onRemove,
  onNavigate,
}: CartProps) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center py-16">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-gray-400 mb-6">
            Looks like you haven't added any items yet.
          </p>
          <button
            onClick={() => onNavigate("products")}
            className="bg-[#1a3c34] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#16342e] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => onNavigate("products")}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a3c34] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </button>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
          Shopping Cart{" "}
          <span className="text-gray-400 font-normal text-lg">
            ({cart.length} items)
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 font-medium">
                    {item.brand}
                  </p>
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">Color:</span>
                    <span
                      className="w-4 h-4 rounded-full border border-gray-300 inline-block"
                      style={{ backgroundColor: item.selectedColor }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() =>
                          onUpdateQty(item.id, item.selectedColor, -1)
                        }
                        className="p-2 hover:bg-gray-50"
                      >
                        <Minus className="w-3.5 h-3.5 text-gray-600" />
                      </button>
                      <span className="px-4 py-2 text-sm font-bold border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQty(item.id, item.selectedColor, 1)
                        }
                        className="p-2 hover:bg-gray-50"
                      >
                        <Plus className="w-3.5 h-3.5 text-gray-600" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-extrabold text-gray-900 text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => onRemove(item.id, item.selectedColor)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-gray-900 text-lg mb-5">
                Order Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>
                    Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)
                  </span>
                  <span className="font-semibold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span
                    className={`font-semibold ${shipping === 0 ? "text-emerald-600" : "text-gray-900"}`}
                  >
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-semibold text-gray-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="h-[1px] bg-gray-100 my-2" />
                <div className="flex justify-between text-base font-extrabold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="mt-5 flex gap-2">
                <div className="flex-1 relative">
                  <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1a3c34]"
                  />
                </div>
                <button className="bg-gray-900 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>

              <button
                onClick={() => onNavigate("checkout")}
                className="mt-5 w-full bg-[#1a3c34] hover:bg-[#16342e] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-green-900/20"
              >
                Proceed to Checkout →
              </button>

              {shipping > 0 && (
                <p className="text-xs text-center text-gray-400 mt-3">
                  Add{" "}
                  <span className="font-bold text-[#1a3c34]">
                    ${(50 - subtotal).toFixed(2)}
                  </span>{" "}
                  more for free shipping
                </p>
              )}
            </div>

            {/* Payment Icons */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs text-gray-400 font-medium text-center mb-3">
                Accepted Payment Methods
              </p>
              <div className="flex justify-center gap-3 text-xs font-bold text-gray-500">
                {["Visa", "Mastercard", "PayPal", "AmEx"].map((m) => (
                  <span key={m} className="bg-gray-100 px-2.5 py-1 rounded-lg">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
