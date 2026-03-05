import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  ArrowLeft,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import type { CartItem, Product } from "./data";
import type { View } from "./types";

interface ProductDetailProps {
  product: Product;
  onNavigate: (view: View) => void;
  onAddToCart: (p: Product, color: string, qty: number) => void;
  cart: CartItem[];
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function ProductDetail({
  product,
  onNavigate,
  onAddToCart,
  wishlist,
  onToggleWishlist,
}: ProductDetailProps) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const wishlisted = wishlist.includes(product.id);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, qty);
    onNavigate("cart");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-[#1a3c34] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button
            onClick={() => onNavigate("products")}
            className="hover:text-[#1a3c34] transition-colors"
          >
            Products
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <button
          onClick={() => onNavigate("products")}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a3c34] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </button>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="bg-gray-50 p-8 flex flex-col gap-4 border-r border-gray-100">
              <div className="relative w-full h-72 flex items-center justify-center rounded-2xl bg-white border border-gray-100">
                <img
                  src={product.images[selectedImg] || product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${wishlisted ? "bg-red-50 text-red-500" : "bg-white text-gray-400 hover:text-red-400"}`}
                >
                  <Heart
                    className={`w-5 h-5 ${wishlisted ? "fill-red-500" : ""}`}
                  />
                </button>
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#1a3c34] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImg(i)}
                      className={`w-16 h-16 rounded-xl border-2 bg-white flex items-center justify-center overflow-hidden transition-all ${selectedImg === i ? "border-[#1a3c34]" : "border-gray-200 hover:border-gray-400"}`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="max-w-full max-h-full object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="p-8 flex flex-col gap-5">
              <div>
                <p className="text-xs font-bold text-[#1a3c34] uppercase tracking-widest mb-1">
                  {product.brand}
                </p>
                <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <Stars rating={product.rating} />
                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3">
                <span className="text-3xl font-extrabold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Color */}
              <div>
                <p className="text-sm font-bold text-gray-700 mb-2">
                  Choose a Color
                </p>
                <div className="flex gap-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? "border-[#1a3c34] scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Qty + Actions */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-2.5 text-lg font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-5 py-2.5 text-sm font-bold text-gray-900 border-x border-gray-200 min-w-[48px] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-4 py-2.5 text-lg font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAdd}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1a3c34] hover:bg-[#16342e] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-green-900/20"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
                <button
                  onClick={() => {
                    onAddToCart(product, selectedColor, qty);
                    onNavigate("checkout");
                  }}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-[#1a3c34] text-[#1a3c34] hover:bg-[#1a3c34] hover:text-white font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 pt-2">
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Trust Badges  */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                {[
                  {
                    Icon: Truck,
                    text: "Free Delivery",
                    sub: "Orders over $50",
                  },
                  {
                    Icon: RotateCcw,
                    text: "Easy Returns",
                    sub: "30-day policy",
                  },
                  {
                    Icon: Shield,
                    text: "2-Year Warranty",
                    sub: "Manufacturer",
                  },
                ].map(({ Icon, text, sub }) => (
                  <div
                    key={text}
                    className="flex flex-col items-center text-center gap-1 bg-gray-50 rounded-xl p-3"
                  >
                    <Icon className="w-5 h-5 text-[#1a3c34]" />
                    <p className="text-xs font-bold text-gray-800">{text}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
