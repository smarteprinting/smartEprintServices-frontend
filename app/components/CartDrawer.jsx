"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";
import { useCart } from "./CartContext";
import CheckoutModal from "./CheckoutModal";
import { useAuth } from "./AuthContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  } = useCart();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { user, loading: authLoading } = useAuth();

  const openCheckout = () => {
    if (authLoading) return;
    if (!user) {
      closeCart();
      window.location.assign(`/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    setIsCheckoutOpen(true);
  };

  if (!isCartOpen) return null;

  const calculatedTotal = subtotal;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Slide-over panel */}
        <aside
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out"
          aria-label="Shopping Cart Drawer"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-brand-500">
                <ShoppingBag size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Your Cart ({totalItems})
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs font-semibold text-slate-400 transition hover:text-red-600 px-2 py-1"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={closeCart}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Shipping notice */}
          {cart.length > 0 && (
            <div className="border-b border-slate-100 bg-slate-50 px-6 py-3">
              <div className="flex items-center text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Truck size={14} className="text-brand-500" />
                  Shipping is calculated from your delivery address at checkout.
                </span>
              </div>
            </div>
          )}

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-brand-500">
                  <ShoppingBag size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Your cart is empty
                </h3>
                <p className="mt-2 max-w-xs text-sm text-slate-500">
                  Explore our selection of commercial laser printers, inkjets, and original cartridges.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-700"
                >
                  <span>Browse Products</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition hover:border-slate-200"
                  >
                    {/* Item Thumbnail */}
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                      <Image
                        src={item.image || "/logo.png"}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="line-clamp-2 text-sm font-semibold text-slate-900">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 transition hover:text-red-500"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {item.brand} • {item.badge || "Verified Hardware"}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Stepper */}
                        <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center text-slate-600 transition hover:text-brand-500"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center text-slate-600 transition hover:text-brand-500"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-sm font-bold text-slate-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="ml-1.5 text-xs text-slate-400 line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer / Summary */}
          {cart.length > 0 && (
            <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-4 backdrop-blur-sm">
              {/* Totals */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-slate-800">
                    Calculated at checkout
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-bold text-slate-900">
                  <span>Estimated Total</span>
                  <span className="text-base text-brand-600">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={openCheckout}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-700 active:scale-[0.99]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-brand-500" />
                  1-Year Warranty
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles size={13} className="text-amber-500" />
                  Guaranteed Authentic
                </span>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}
