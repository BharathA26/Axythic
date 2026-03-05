import { useState } from "react";
import { Heart, Star, ShoppingCart, Tag, Sparkles } from "lucide-react";
import { products, categories } from "./data";
import type { Product } from "./data";
import type { View } from "./types";

interface ProductsProps {
  onNavigate: (view: View) => void;
  onViewProduct: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  defaultCategory?: string;
  dealsOnly?: boolean;
  newOnly?: boolean;
  pageTitle?: string;
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

export default function Products({
  onNavigate: _onNavigate,
  onViewProduct,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  defaultCategory,
  dealsOnly,
  newOnly,
  pageTitle,
}: ProductsProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    defaultCategory ?? "All",
  );
  const [sortBy, setSortBy] = useState("Featured");

  const allCategoryTabs = ["All", ...categories.map((c) => c.name)];

  const filtered = products
    .filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const matchDeals = dealsOnly ? p.isDeal === true : true;
      const matchNew = newOnly ? p.isNew === true : true;
      return matchSearch && matchCat && matchDeals && matchNew;
    })
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Top Rated") return b.rating - a.rating;
      return 0;
    });

  const title =
    pageTitle ?? (activeCategory === "All" ? "All Products" : activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Page header for special views */}
        {(dealsOnly || newOnly) && (
          <div
            className={`rounded-2xl p-6 text-white flex items-center gap-4 ${dealsOnly ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-violet-600 to-purple-500"}`}
          >
            {dealsOnly ? (
              <Tag className="w-8 h-8 flex-shrink-0" />
            ) : (
              <Sparkles className="w-8 h-8 flex-shrink-0" />
            )}
            <div>
              <h1 className="text-2xl font-extrabold">{title}</h1>
              <p className="text-white/80 text-sm mt-0.5">
                {filtered.length} products available
              </p>
            </div>
          </div>
        )}

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[180px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands…"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1a3c34]"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5">
            {allCategoryTabs.map((t) => {
              const cat = categories.find((c) => c.name === t);
              return (
                <button
                  key={t}
                  onClick={() => setActiveCategory(t)}
                  className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-xl border transition-colors ${
                    activeCategory === t
                      ? "bg-[#1a3c34] text-white border-[#1a3c34]"
                      : "text-gray-600 border-gray-200 bg-white hover:bg-gray-50"
                  }`}
                >
                  {cat?.icon && <span>{cat.icon}</span>} {t}
                </button>
              );
            })}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none text-gray-600 bg-white ml-auto flex-shrink-0"
          >
            {[
              "Featured",
              "Price: Low to High",
              "Price: High to Low",
              "Top Rated",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* Results header */}
        {!dealsOnly && !newOnly && (
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-gray-900">
              {title}{" "}
              <span className="text-gray-400 font-normal text-base">
                ({filtered.length})
              </span>
            </h2>
          </div>
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="font-medium">No products found</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-3 text-sm text-[#1a3c34] font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://placehold.co/300x200/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`;
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#1a3c34] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {product.isNew && !product.badge && (
                    <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow transition-all ${wishlist.includes(product.id) ? "bg-red-50 text-red-500" : "bg-white text-gray-400 hover:text-red-400"}`}
                  >
                    <Heart
                      className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-red-500" : ""}`}
                    />
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
                  <p className="text-xs text-gray-400 mb-2 line-clamp-1">
                    {product.description}
                  </p>
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
                      onClick={() => onAddToCart(product)}
                      className="bg-[#1a3c34] hover:bg-[#16342e] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
