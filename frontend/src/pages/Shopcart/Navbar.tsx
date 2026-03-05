import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  ChevronDown,
  Heart,
  Package,
  LogOut,
  Globe,
  MapPin,
  Tag,
  Flame,
  Sparkles,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { View } from "./types";
import type { CartItem } from "./data";
import { categories, products, languages, locations } from "./data";

interface NavbarProps {
  onNavigate: (view: View) => void;
  cart: CartItem[];
  activeView: View;
  wishlist?: number[];
}

function useClickOutside(
  ref: React.RefObject<HTMLDivElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [ref, handler]);
}

export default function ShopNavbar({
  onNavigate,
  cart,
  activeView,
  wishlist = [],
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [selectedLoc, setSelectedLoc] = useState("New York, USA");

  const catRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const locRef = useRef<HTMLDivElement>(null);

  useClickOutside(catRef, () => setCatOpen(false));
  useClickOutside(accountRef, () => setAccountOpen(false));
  useClickOutside(searchRef, () => setSearchFocused(false));
  useClickOutside(langRef, () => setLangOpen(false));
  useClickOutside(locRef, () => setLocOpen(false));

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const searchResults =
    searchQuery.length > 0
      ? products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.category.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .slice(0, 6)
      : [];

  const popularSearches = [
    "AirPods Max",
    "Bose Headphones",
    "Nordic Chair",
    "Running Shoes",
    "Leather Bag",
  ];

  return (
    <>
      {/* ── Top Promo Bar ── */}
      <div className="bg-[#1a3c34] text-white text-xs py-2.5 px-6 flex items-center justify-between relative z-[60]">
        {/* Left: promo */}
        <span className="font-semibold tracking-wide">
          🎉 Get 50% Off on Selected Items &nbsp;|&nbsp;
          <button
            onClick={() => onNavigate("deals")}
            className="underline hover:text-green-300 transition-colors"
          >
            Shop Deals →
          </button>
        </span>

        {/* Right: Language + Location */}
        <div className="flex items-center gap-4 text-white/80">
          {/* Language */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => {
                setLangOpen(!langOpen);
                setLocOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span>{selectedLang.slice(0, 3)}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${selectedLang === lang ? "bg-[#1a3c34] text-white font-bold" : "text-gray-700 hover:bg-gray-50 font-medium"}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location */}
          <div ref={locRef} className="relative">
            <button
              onClick={() => {
                setLocOpen(!locOpen);
                setLangOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3 h-3" />
              <span className="max-w-[80px] truncate">
                {selectedLoc.split(",")[0]}
              </span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${locOpen ? "rotate-180" : ""}`}
              />
            </button>
            {locOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 overflow-hidden">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setSelectedLoc(loc);
                      setLocOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${selectedLoc === loc ? "bg-[#1a3c34] text-white font-bold" : "text-gray-700 hover:bg-gray-50 font-medium"}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center gap-5">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <div className="w-9 h-9 bg-[#1a3c34] rounded-xl flex items-center justify-center text-white text-xl shadow-md shadow-green-900/20 group-hover:scale-105 transition-transform">
              🛒
            </div>
            <span className="font-extrabold text-xl text-[#1a3c34] tracking-tight">
              Shopcart
            </span>
          </button>

          {/* ── Categories Mega-Dropdown ── */}
          <div ref={catRef} className="relative hidden md:block">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl border transition-all ${catOpen ? "bg-[#1a3c34] text-white border-[#1a3c34]" : "text-gray-700 border-gray-200 hover:border-[#1a3c34] hover:text-[#1a3c34]"}`}
            >
              Categories{" "}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${catOpen ? "rotate-180" : ""}`}
              />
            </button>

            {catOpen && (
              <div className="absolute top-full left-0 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                <div className="p-5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Browse All Categories
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => {
                          onNavigate("products");
                          setCatOpen(false);
                        }}
                        className={`flex items-center gap-3 p-3 rounded-xl border ${cat.color} hover:shadow-md transition-all text-left`}
                      >
                        <span className="text-2xl">{cat.icon}</span>
                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            {cat.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {cat.count} items
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      🔥 Trending Now
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AirPods Max",
                        "Bose QC45",
                        "Nordic Chair",
                        "Air Runner X",
                        "UltraSlim Pro",
                      ].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSearchQuery(tag);
                            setCatOpen(false);
                          }}
                          className="text-xs font-medium bg-gray-100 hover:bg-[#1a3c34] hover:text-white text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => onNavigate("deals")}
              className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${activeView === "deals" ? "text-[#1a3c34] bg-green-50" : "text-gray-600 hover:text-[#1a3c34] hover:bg-gray-50"}`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-500" /> Deals
            </button>
            <button
              onClick={() => onNavigate("whats-new")}
              className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${activeView === "whats-new" ? "text-[#1a3c34] bg-green-50" : "text-gray-600 hover:text-[#1a3c34] hover:bg-gray-50"}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-500" /> What's New
            </button>
            <button
              onClick={() => onNavigate("home")}
              className="text-sm font-semibold text-gray-600 hover:text-[#1a3c34] px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Delivery
            </button>
          </nav>

          {/* ── Search ── */}
          <div
            ref={searchRef}
            className="flex-1 max-w-lg mx-auto hidden md:block relative"
          >
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                placeholder="Search products, brands, categories…"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1a3c34] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {searchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  <div className="p-3">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider px-2 mb-2">
                      Results
                    </p>
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          setSearchFocused(false);
                          setSearchQuery("");
                          onNavigate("products");
                        }}
                        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <img
                            src={product.image}
                            alt=""
                            className="w-full h-full object-contain p-1 rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-800 line-clamp-1">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {product.brand} · {product.category}
                          </p>
                        </div>
                        <span className="text-sm font-extrabold text-[#1a3c34]">
                          ${product.price}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
                      Popular Searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSearchQuery(s)}
                          className="text-xs bg-gray-100 hover:bg-[#1a3c34] hover:text-white text-gray-600 font-medium px-3 py-1.5 rounded-full transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/50 flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    {searchResults.length > 0
                      ? `${searchResults.length} results found`
                      : "Type to search"}
                  </span>
                  <button
                    onClick={() => {
                      onNavigate("products");
                      setSearchFocused(false);
                    }}
                    className="text-xs font-bold text-[#1a3c34] hover:underline"
                  >
                    View All Products →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Wishlist */}
            <button
              onClick={() => onNavigate("wishlist")}
              title="Wishlist"
              className={`relative hidden sm:flex items-center justify-center w-10 h-10 rounded-xl border transition-colors ${activeView === "wishlist" ? "bg-red-50 border-red-200 text-red-500" : "border-gray-200 text-gray-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50"}`}
            >
              <Heart
                className={`w-4 h-4 ${wishlist.length > 0 ? "fill-red-400 text-red-500" : ""}`}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Account */}
            <div ref={accountRef} className="relative hidden sm:block">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className={`flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl border transition-all ${accountOpen ? "bg-[#1a3c34] text-white border-[#1a3c34]" : "text-gray-700 border-gray-200 hover:border-[#1a3c34] hover:text-[#1a3c34]"}`}
              >
                <User className="w-4 h-4" /> Account{" "}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${accountOpen ? "rotate-180" : ""}`}
                />
              </button>

              {accountOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-4 bg-[#1a3c34] text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg font-bold">
                        A
                      </div>
                      <div>
                        <p className="font-bold text-sm">Alex Johnson</p>
                        <p className="text-xs text-green-200">
                          alex@shopcart.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    {[
                      {
                        Icon: User,
                        label: "My Profile",
                        sub: "View & edit profile",
                        view: "profile" as View,
                      },
                      {
                        Icon: Package,
                        label: "My Orders",
                        sub: "16 total orders",
                        view: "orders" as View,
                      },
                      {
                        Icon: Heart,
                        label: "Wishlist",
                        sub: `${wishlist.length} saved items`,
                        view: "wishlist" as View,
                      },
                    ].map(({ Icon, label, sub, view }) => (
                      <button
                        key={label}
                        onClick={() => {
                          onNavigate(view);
                          setAccountOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            {label}
                          </p>
                          <p className="text-xs text-gray-400">{sub}</p>
                        </div>
                      </button>
                    ))}
                    <div className="mx-4 my-1 h-[1px] bg-gray-100" />
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <LogOut className="w-4 h-4 text-red-500" />
                      </div>
                      <p className="text-sm font-bold text-red-500">Sign Out</p>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={() => onNavigate("cart")}
              className="relative flex items-center gap-2 bg-[#1a3c34] hover:bg-[#16342e] text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors shadow-md shadow-green-900/20"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <>
                  <span className="bg-white/20 text-white text-xs font-bold ml-1 px-1.5 py-0.5 rounded-lg">
                    {cartCount}
                  </span>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {cartCount}
                  </span>
                </>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Cart Total Strip */}
        {cartCount > 0 && (
          <div className="hidden md:flex bg-green-50 border-t border-green-100 items-center justify-center gap-4 py-1.5 text-xs text-[#1a3c34] font-medium">
            <Tag className="w-3.5 h-3.5" />
            <span>
              You have{" "}
              <strong>
                {cartCount} item{cartCount > 1 ? "s" : ""}
              </strong>{" "}
              in your cart — Total: <strong>${cartTotal.toFixed(2)}</strong>
            </span>
            <button
              onClick={() => onNavigate("checkout")}
              className="bg-[#1a3c34] text-white font-bold px-3 py-1 rounded-lg text-xs hover:bg-[#16342e] transition-colors"
            >
              Checkout Now →
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
            <div className="relative mb-2">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products…"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1a3c34]"
              />
            </div>
            {[
              { label: "🏠 Home", view: "home" as View },
              { label: "🛍️ Products", view: "products" as View },
              { label: "🔥 Deals", view: "deals" as View },
              { label: "✨ What's New", view: "whats-new" as View },
              { label: "📁 Categories", view: "categories" as View },
              { label: "👤 My Profile", view: "profile" as View },
              { label: "📦 My Orders", view: "orders" as View },
              { label: "❤️ Wishlist", view: "wishlist" as View },
            ].map(({ label, view }) => (
              <button
                key={label}
                onClick={() => {
                  onNavigate(view);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left text-sm font-bold px-3 py-2.5 rounded-xl transition-colors ${activeView === view ? "bg-[#1a3c34] text-white" : "text-gray-700 hover:bg-gray-50"}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
