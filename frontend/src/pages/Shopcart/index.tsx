import { useState } from "react";
import type { CartItem, Product } from "./data";
import type { View } from "./types";
import ShopNavbar from "./Navbar";
import ShopHome from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderSummary from "./OrderSummary";
import Categories from "./Categories";
import Profile from "./Profile";
import Orders from "./Orders";
import Wishlist from "./Wishlist";

export type { View };

// ── View state that some child pages still import via this re-export ──────────

interface CategoryFilterState {
  category?: string;
  dealsOnly?: boolean;
  newOnly?: boolean;
}

export default function Shopcart() {
  const [view, setView] = useState<View>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<CategoryFilterState>({});

  // ── Cart helpers ──────────────────────────────────────────────────────────

  const addToCart = (product: Product, color?: string, qty = 1) => {
    const selectedColor = color ?? product.colors[0];
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.selectedColor === selectedColor,
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.selectedColor === selectedColor
            ? { ...i, quantity: i.quantity + qty }
            : i,
        );
      }
      return [...prev, { ...product, selectedColor, quantity: qty }];
    });
  };

  const updateQty = (id: number, color: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id && i.selectedColor === color
            ? { ...i, quantity: i.quantity + delta }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  const removeItem = (id: number, color: string) => {
    setCart((prev) =>
      prev.filter((i) => !(i.id === id && i.selectedColor === color)),
    );
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id],
    );
  };

  // ── Navigate helpers ──────────────────────────────────────────────────────

  const viewProduct = (product: Product) => {
    setSelectedProduct(product);
    setView("product-detail");
  };

  const navigateTo = (v: View, extra?: CategoryFilterState) => {
    if (extra) setFilter(extra);
    else setFilter({});
    setView(v);
  };

  const placeOrder = () => setView("order-summary");

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ShopNavbar
        onNavigate={navigateTo}
        cart={cart}
        activeView={view}
        wishlist={wishlist}
      />

      {view === "home" && (
        <ShopHome
          onNavigate={navigateTo}
          onViewProduct={viewProduct}
          onAddToCart={addToCart}
          cart={cart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {view === "products" && (
        <Products
          onNavigate={navigateTo}
          onViewProduct={viewProduct}
          onAddToCart={addToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          defaultCategory={filter.category}
        />
      )}

      {/* Deals — products page filtered to deals */}
      {view === "deals" && (
        <Products
          onNavigate={navigateTo}
          onViewProduct={viewProduct}
          onAddToCart={addToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          dealsOnly
          pageTitle="🔥 Today's Deals"
        />
      )}

      {/* What's New — products page filtered to new arrivals */}
      {view === "whats-new" && (
        <Products
          onNavigate={navigateTo}
          onViewProduct={viewProduct}
          onAddToCart={addToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          newOnly
          pageTitle="✨ What's New"
        />
      )}

      {view === "product-detail" && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onNavigate={navigateTo}
          onAddToCart={(p, color, qty) => addToCart(p, color, qty)}
          cart={cart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {view === "cart" && (
        <Cart
          cart={cart}
          onUpdateQty={updateQty}
          onRemove={removeItem}
          onNavigate={navigateTo}
        />
      )}

      {view === "checkout" && (
        <Checkout
          cart={cart}
          onNavigate={navigateTo}
          onPlaceOrder={placeOrder}
        />
      )}

      {view === "order-summary" && (
        <OrderSummary
          cart={cart}
          onNavigate={(v) => {
            if (v === "home" || v === "products") setCart([]);
            navigateTo(v);
          }}
        />
      )}

      {view === "categories" && (
        <Categories onNavigate={navigateTo} onViewProduct={viewProduct} />
      )}

      {view === "profile" && <Profile onNavigate={navigateTo} />}
      {view === "orders" && <Orders />}
      {view === "wishlist" && (
        <Wishlist
          wishlist={wishlist}
          onNavigate={navigateTo}
          onViewProduct={viewProduct}
          onAddToCart={addToCart}
          onRemoveWishlist={toggleWishlist}
        />
      )}
    </div>
  );
}
