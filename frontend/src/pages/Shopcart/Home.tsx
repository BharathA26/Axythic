import {
  Heart,
  Star,
  ShoppingCart,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { products, categories } from "./data";
import type { CartItem, Product } from "./data";
import type { View } from "./types";

interface HomeProps {
  onNavigate: (view: View) => void;
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cart: CartItem[];
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

function ProductCard({
  product,
  onView,
  onAdd,
  wishlisted,
  onWishlist,
}: {
  product: Product;
  onView: () => void;
  onAdd: () => void;
  wishlisted: boolean;
  onWishlist: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
      <div
        className="relative h-44 bg-gray-50 flex items-center justify-center p-4 cursor-pointer"
        onClick={onView}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a3c34] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlist();
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow transition-all ${wishlisted ? "bg-red-50 text-red-500" : "bg-white text-gray-400 hover:text-red-400"}`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? "fill-red-500" : ""}`} />
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 font-medium mb-0.5">
          {product.brand}
        </p>
        <h4
          className="font-bold text-gray-900 text-sm leading-snug mb-1 cursor-pointer hover:text-[#1a3c34] transition-colors line-clamp-1"
          onClick={onView}
        >
          {product.name}
        </h4>
        <p className="text-xs text-gray-400 leading-relaxed mb-2 line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center gap-1.5 mb-3">
          <Stars rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-extrabold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-1.5">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={onAdd}
            className="bg-[#1a3c34] hover:bg-[#16342e] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
          >
            <ShoppingCart className="w-3.5 h-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopHome({
  onNavigate,
  onViewProduct,
  onAddToCart,
  wishlist,
  onToggleWishlist,
}: HomeProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-[#1a3c34] mx-4 mt-6 rounded-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-14 flex items-center justify-between">
          <div className="max-w-sm">
            <p className="text-green-300 text-sm font-semibold mb-2 tracking-wide uppercase">
              Limited Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Grab Upto 50% Off On Selected Headphone
            </h1>
            <button
              onClick={() => onNavigate("products")}
              className="bg-white text-[#1a3c34] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg flex items-center gap-2"
            >
              Buy Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=420&q=80"
              alt="Featured headphone"
              className="w-80 h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Popular Categories
            </h2>
            <button
              onClick={() => onNavigate("categories")}
              className="text-sm text-[#1a3c34] font-semibold flex items-center gap-1 hover:underline"
            >
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => onNavigate("products")}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${cat.color} hover:shadow-md transition-all`}
              >
                <span className="text-3xl">{cat.icon}</span>
                <p className="text-sm font-bold text-gray-800">{cat.name}</p>
                <p className="text-xs text-gray-400">{cat.count} items</p>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Headphones For You!
            </h2>
            <button
              onClick={() => onNavigate("products")}
              className="text-sm text-[#1a3c34] font-semibold flex items-center gap-1 hover:underline"
            >
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={() => onViewProduct(product)}
                onAdd={() => onAddToCart(product)}
                wishlisted={wishlist.includes(product.id)}
                onWishlist={() => onToggleWishlist(product.id)}
              />
            ))}
          </div>
        </div>

        {/* Banner Strip */}
        <div className="bg-gradient-to-r from-[#1a3c34] to-emerald-700 rounded-3xl p-8 flex items-center justify-between">
          <div>
            <p className="text-green-300 text-sm font-semibold mb-1">
              Special Deal
            </p>
            <h3 className="text-2xl font-extrabold text-white">
              Get 30% Off AirPods Max
            </h3>
            <p className="text-green-200 text-sm mt-1">
              Limited time offer · While stocks last
            </p>
          </div>
          <button
            onClick={() => onViewProduct(products[1])}
            className="bg-white text-[#1a3c34] font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors flex-shrink-0"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
