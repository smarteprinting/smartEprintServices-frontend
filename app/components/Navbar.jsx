"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  ShoppingCart,
  ShieldCheck,
  UserCircle,
  ChevronDown,
  ShoppingBag,
  ArrowRight,
  Printer,
  Users,
  Zap,
  Droplet,
} from "lucide-react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // "Shop" is rendered separately with dropdown popup
  { href: "/book-an-appointment", label: "Book an Appointment" },
  { href: "/contact-us", label: "Contact Us" },
];

const shopCategories = [
  {
    name: "HOME PRINTERS",
    href: "/shop?category=home-printers",
    icon: Printer,
  },
  {
    name: "OFFICE PRINTERS",
    href: "/shop?category=office-printers",
    icon: Users,
  },
  {
    name: "LASER PRINTERS",
    href: "/shop?category=laser-printers",
    icon: Zap,
  },
  {
    name: "INKJET PRINTERS",
    href: "/shop?category=inkjet-printers",
    icon: Droplet,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(true);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

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

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 180);
  };

  const closeMenu = () => {
    setOpen(false);
    setShopDropdownOpen(false);
  };

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
            <Link
              href="/"
              className="group relative text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-500"
            >
              Home
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/about"
              className="group relative text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-500"
            >
              About
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* SHOP WITH FLYOUT DROPDOWN POPUP */}
            <div
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/shop"
                  className="group relative text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-500"
                >
                  Shop
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-full" />
                </Link>
                <button
                  type="button"
                  onClick={() => setShopDropdownOpen((prev) => !prev)}
                  className="p-0.5 text-slate-600 transition hover:text-brand-500 focus:outline-none"
                  aria-label="Toggle shop category menu"
                  aria-expanded={shopDropdownOpen}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      shopDropdownOpen ? "rotate-180 text-brand-500" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Flyout Popup Menu */}
              {shopDropdownOpen && (
                <div
                  className="absolute left-1/2 top-full z-50 mt-1 w-[320px] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl shadow-slate-900/15 animate-in fade-in duration-150"
                  role="menu"
                >
                  {/* Small upward pointer indicator */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-l border-t border-slate-100 bg-white" />

                  <div className="relative z-10 flex flex-col gap-1">
                    {/* Top Blue Card: SHOP ALL PRODUCTS */}
                    <Link
                      href="/shop"
                      onClick={() => setShopDropdownOpen(false)}
                      className="group/card flex items-center justify-between rounded-xl bg-[#0052cc] p-3.5 text-white transition hover:bg-[#0042a6] shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition group-hover/card:scale-105">
                          <ShoppingBag size={20} className="text-white" />
                        </div>
                        <div className="flex flex-col text-left leading-tight">
                          <span className="text-[12px] font-black tracking-wider uppercase text-white">SHOP ALL</span>
                          <span className="text-[12px] font-black tracking-wider uppercase text-white">PRODUCTS</span>
                        </div>
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-white transition-transform duration-200 group-hover/card:translate-x-1"
                      />
                    </Link>

                    {/* Section Header: BROWSE BY CATEGORY */}
                    <div className="px-3 pt-3.5 pb-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-blue-900/60">
                      BROWSE BY CATEGORY
                    </div>

                    {/* Category Rows */}
                    <div className="flex flex-col gap-0.5">
                      {shopCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <Link
                            key={cat.href}
                            href={cat.href}
                            onClick={() => setShopDropdownOpen(false)}
                            className="group/item flex items-center gap-3.5 rounded-xl px-3 py-2 text-slate-800 transition hover:bg-slate-50 hover:text-brand-600"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover/item:bg-blue-50 group-hover/item:text-brand-600">
                              <Icon size={17} />
                            </div>
                            <span className="text-[13px] font-bold tracking-wide text-slate-800 transition group-hover/item:text-brand-600">
                              {cat.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Dark Card: INK & TONER / GENUINE SUPPLIES */}
                    <Link
                      href="/shop?category=ink-toner"
                      onClick={() => setShopDropdownOpen(false)}
                      className="group/ink mt-2 flex items-center gap-3.5 rounded-xl bg-[#0d1424] px-4 py-3 text-white transition hover:bg-[#151f36] shadow-sm"
                    >
                      <div className="text-blue-400 transition group-hover/ink:scale-110">
                        <ShoppingCart size={19} className="text-blue-400" />
                      </div>
                      <div className="flex flex-col text-left leading-tight">
                        <span className="text-[13px] font-black tracking-wider uppercase text-white">
                          INK & TONER
                        </span>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 mt-0.5">
                          GENUINE SUPPLIES
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/book-an-appointment"
              className="group relative text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-500"
            >
              Book an Appointment
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/contact-us"
              className="group relative text-[15px] font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-500"
            >
              Contact Us
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </Link>
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

          {/* User Account / Profile */}
          <Link
            href={user ? "/profile" : "/login"}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600"
            title={user ? "Open profile" : "Sign in"}
          >
            <UserCircle size={16} className="text-brand-500" />
            <span>{loading ? "Account" : user ? "Profile" : "Sign In"}</span>
          </Link>
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
          className="fixed right-0 top-20 z-50 h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden translate-x-0"
        >
          <nav className="flex flex-col gap-1 p-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
            >
              About
            </Link>

            {/* Mobile Shop Accordion */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-2">
              <button
                type="button"
                onClick={() => setMobileShopOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-base font-bold text-slate-800 transition hover:text-brand-600"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-brand-500" />
                  Shop
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform duration-200 ${
                    mobileShopOpen ? "rotate-180 text-brand-500" : ""
                  }`}
                />
              </button>

              {mobileShopOpen && (
                <div className="mt-1 flex flex-col gap-1 pl-2 pr-1 pt-1">
                  <Link
                    href="/shop"
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-xl bg-[#0052cc] px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                  >
                    <span>Shop All Products</span>
                    <ArrowRight size={15} />
                  </Link>

                  <div className="px-2 pt-2 pb-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                    Browse By Category
                  </div>

                  {shopCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={closeMenu}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-white hover:text-brand-600"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200/70 text-slate-600">
                          <Icon size={14} />
                        </div>
                        <span>{cat.name}</span>
                      </Link>
                    );
                  })}

                  <Link
                    href="/shop?category=ink-toner"
                    onClick={closeMenu}
                    className="mt-1 flex items-center gap-2.5 rounded-xl bg-[#0d1424] px-3 py-2.5 text-xs font-bold uppercase text-white shadow-sm"
                  >
                    <ShoppingCart size={15} className="text-blue-400" />
                    <div className="flex flex-col text-left leading-tight">
                      <span>Ink & Toner</span>
                      <span className="text-[9px] font-normal text-slate-400">Genuine Supplies</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/book-an-appointment"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
            >
              Book an Appointment
            </Link>

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
            >
              Contact Us
            </Link>

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
