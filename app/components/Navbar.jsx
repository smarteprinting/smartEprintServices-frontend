"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X, ShoppingCart, ShieldCheck, UserCircle } from "lucide-react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/blogs", label: "Blogs" },
  // { href: "/services", label: "Setup & Support" },
  { href: "/book-an-appointment", label: "Book an Appointment" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { totalItems, openCart } = useCart();
  const { user, loading } = useAuth();

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="SmartEprint Services Home">
          <div className="flex h-12 w-auto items-center justify-center p-1">
            <Image 
              src="/logo.png" 
              width={100}
              alt="SmartEprint Logo"
              height={56} 
              priority
              className="h-full w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
          <nav className="flex items-center gap-7">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-500"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Cart Button */}
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 transition-all duration-200 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-500 hover:shadow-sm active:scale-95"
            aria-label={`Open Cart (${totalItems} items)`}
          >
            <ShoppingCart size={19} className="text-brand-500" />
            <span className="text-sm font-bold">Cart</span>
            {totalItems > 0 && (
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-500 px-1.5 text-xs font-bold text-white shadow-sm">
                {totalItems}
              </span>
            )}
          </button>

          {/* Admin Portal Link */}
          <Link
            href={user ? "/profile" : "/login"}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600"
            title={user ? "Open profile" : "Sign in"}
          >
            <UserCircle size={16} className="text-brand-500" />
            <span>{loading ? "Account" : user ? "Profile" : "Sign In"}</span>
          </Link>

          {/* Admin Portal Link */}
          {/* <Link
            href="/admin"
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600"
            title="Admin Dashboard"
          >
            <ShieldCheck size={16} className="text-brand-500" />
            <span>Admin</span>
          </Link> */}
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex flex-1 items-center justify-end gap-2 lg:hidden">
          {/* Mobile Cart Button */}
          <button
            onClick={openCart}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 hover:text-brand-500"
            aria-label={`Open Cart (${totalItems} items)`}
          >
            <ShoppingCart size={20} className="text-brand-500" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-white shadow-sm">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-brand-500 transition-colors hover:bg-slate-100"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full screen backdrop */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 top-20 z-40 bg-slate-950/50 transition-opacity duration-300 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Menu */}
      {open && (
        <aside
          className={`fixed right-0 top-20 z-50 h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden translate-x-0`}>
          <nav className="flex flex-col gap-1 p-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
              >
                {link.label}
              </Link>
            ))}

            <div className="my-3 border-t border-slate-200" />

            <Link
              href={user ? "/profile" : "/login"}
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
            >
              <UserCircle size={20} className="text-brand-500" />
              {user ? "My Profile" : "Sign In / Sign Up"}
            </Link>

            <button
              onClick={() => {
                closeMenu();
                openCart();
              }}
              className="flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-3 text-base font-semibold text-brand-700 transition hover:bg-brand-100"
            >
              <span className="flex items-center gap-3">
                <ShoppingCart size={20} className="text-brand-500" />
                View Shopping Cart
              </span>
              {totalItems > 0 && (
                <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-bold text-white">
                  {totalItems} items
                </span>
              )}
            </button>
          </nav>
        </aside>
      )}
    </header>
  );
}
