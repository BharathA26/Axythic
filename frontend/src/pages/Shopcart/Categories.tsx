import { categories, products } from "./data";
import type { View } from "./types";
import type { Product } from "./data";

interface CategoriesProps {
  onNavigate: (view: View) => void;
  onViewProduct: (p: Product) => void;
}

export default function Categories({
  onNavigate,
  onViewProduct,
}: CategoriesProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Popular Categories
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Browse all products by category
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onNavigate("products")}
              className={`flex flex-col items-center gap-2 p-5 rounded-2xl border ${cat.color} hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <span className="text-4xl">{cat.icon}</span>
              <p className="font-bold text-gray-800 text-sm">{cat.name}</p>
              <p className="text-xs text-gray-400">
                {cat.count} Items Available
              </p>
            </button>
          ))}
        </div>

        {/* Headphone Showcase (matching reference) */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-extrabold text-gray-900">
              🎧 Headphone
            </h3>
            <button
              onClick={() => onNavigate("products")}
              className="text-sm font-semibold text-[#1a3c34] hover:underline"
            >
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                onClick={() => onViewProduct(product)}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer p-4 flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium">
                    {product.brand}
                  </p>
                  <p className="text-sm font-bold text-gray-900 line-clamp-1">
                    {product.name}
                  </p>
                  <p className="text-sm font-extrabold text-[#1a3c34] mt-0.5">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other categories teaser */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              emoji: "💻",
              name: "Laptops & Tech",
              desc: "245 items",
              gradient: "from-indigo-600 to-blue-500",
            },
            {
              emoji: "👟",
              name: "Footwear",
              desc: "190 items",
              gradient: "from-rose-500 to-pink-500",
            },
            {
              emoji: "👜",
              name: "Bags & Accessories",
              desc: "180 items",
              gradient: "from-amber-500 to-orange-500",
            },
            {
              emoji: "📚",
              name: "Books",
              desc: "240 items",
              gradient: "from-emerald-600 to-teal-500",
            },
          ].map((cat) => (
            <button
              key={cat.name}
              onClick={() => onNavigate("products")}
              className={`bg-gradient-to-r ${cat.gradient} rounded-2xl p-6 flex items-center gap-4 text-white hover:opacity-90 transition-opacity text-left`}
            >
              <span className="text-4xl">{cat.emoji}</span>
              <div>
                <p className="font-extrabold text-lg">{cat.name}</p>
                <p className="text-white/80 text-sm">{cat.desc} available</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
