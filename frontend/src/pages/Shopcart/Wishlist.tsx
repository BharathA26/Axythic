import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react";
import { products } from "./data";
import type { View } from "./types";
import type { Product } from "./data";

interface WishlistProps {
  wishlist: number[];
  onNavigate: (view: View) => void;
  onViewProduct: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  onRemoveWishlist: (id: number) => void;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Wishlist({
  wishlist,
  onNavigate,
  onViewProduct,
  onAddToCart,
  onRemoveWishlist,
}: WishlistProps) {
  const wishlisted = products.filter((p) => wishlist.includes(p.id));

  if (wishlisted.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center py-16">
          <Heart className="w-16 h-16 mx-auto text-gray-200 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Your Wishlist is Empty
          </h2>
          <p className="text-gray-400 mb-6">
            Save your favourite items and revisit them anytime.
          </p>
          <button
            onClick={() => onNavigate("products")}
            className="bg-[#1a3c34] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#16342e] transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-gray-900">
            My Wishlist{" "}
            <span className="text-gray-400 font-normal text-lg">
              ({wishlisted.length} items)
            </span>
          </h1>
          <button
            onClick={() => {
              wishlisted.forEach((p) => onAddToCart(p));
              onNavigate("cart");
            }}
            className="flex items-center gap-2 bg-[#1a3c34] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#16342e] transition-colors text-sm"
          >
            <ShoppingCart className="w-4 h-4" /> Add All to Cart
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlisted.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              <div
                className="relative h-44 bg-gray-50 flex items-center justify-center p-4 cursor-pointer"
                onClick={() => onViewProduct(product)}
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
                    onRemoveWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shadow hover:bg-red-100 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 font-medium mb-0.5">
                  {product.brand}
                </p>
                <h4
                  className="font-bold text-gray-900 text-sm leading-snug mb-1 cursor-pointer hover:text-[#1a3c34] transition-colors line-clamp-1"
                  onClick={() => onViewProduct(product)}
                >
                  {product.name}
                </h4>
                <div className="flex items-center gap-1.5 mb-3">
                  <Stars rating={product.rating} />
                  <span className="text-xs text-gray-400">
                    ({product.reviews})
                  </span>
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
                    onClick={() => {
                      onAddToCart(product);
                      onNavigate("cart");
                    }}
                    className="bg-[#1a3c34] hover:bg-[#16342e] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" /> Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
