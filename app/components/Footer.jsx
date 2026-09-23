"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Lock, Truck, ShieldCheck, RotateCcw, MapPin } from "lucide-react";

const shopLinks = [
  { href: "/shop", label: "Shop All Products" },
  { href: "/shop?category=home-printers", label: "Home Printers" },
  { href: "/shop?category=office-printers", label: "Office Printers" },
  { href: "/shop?category=laser-printers", label: "Laser Printers" },
  { href: "/shop?category=inkjet-printers", label: "Inkjet Printers" },
  { href: "/shop?category=ink-toner", label: "Ink & Toner - Genuine Supplies" },
];

const helpLinks = [
  { href: "/faqs", label: "FAQs" },
  { href: "/refund-cancellation-policy", label: "Shipping & Returns" },
  { href: "/book-an-appointment", label: "Book an Appointment" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800">

      {/* Trust Strip */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-5 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-brand-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Free Delivery Over $49</p>
              <p className="text-[11px] text-slate-400">Continental US orders</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="w-5 h-5 text-brand-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">30-Day Easy Returns</p>
              <p className="text-[11px] text-slate-400">Hassle-free refund policy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Secure Checkout</p>
              <p className="text-[11px] text-slate-400">256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <Link href="/" aria-label="SmartEprint Services Home">
            <Image
              src="/footer-logo.png"
              alt="SmartEprint Services"
              width={130}
              height={44}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <p className="text-sm text-slate-400 leading-relaxed">
            Shop genuine printers, original ink & toner cartridges, and accessories - delivered fast across the US.
          </p>

          {/* HP Partner */}
          <div className="inline-flex items-center gap-2.5">
            <Image
              src="/hp-seller.png"
              alt="HP Authorized Partner"
              width={80}
              height={36}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Shop</h5>
          <ul className="space-y-2.5">
            {shopLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Help</h5>
          <ul className="space-y-2.5">
            {helpLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Contact Us</h5>
          <ul className="space-y-3.5">
            <li>
              <a
                href="tel:+18777652289"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500 flex-shrink-0" />
                +1 (877) 765-2289
              </a>
            </li>
            <li>
              <a
                href="mailto:support@smarteprintservices.com"
                className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="break-all">support@smarteprintservices.com</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
              <span>
                11397 Quincy St NE<br />
                Blaine, Minnesota 55434<br />
                United States
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Methods & Back to Top */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <Lock className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            {["VISA", "Mastercard", "AMEX", "Discover", "PayPal", "Apple Pay", "G Pay"].map((p) => (
              <span
                key={p}
                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 border border-slate-700 text-slate-300"
              >
                {p}
              </span>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="text-xs text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
              Back to top
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-900 bg-[#03080f]">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>&copy; {year} Smart ePrint Services. All rights reserved. Owned &amp; Operated by <span className="text-slate-400 font-semibold">Innovation Dynamic Group LLC</span>.</p>
          <div className="flex items-center flex-wrap justify-center gap-3">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">Terms</Link>
            <span>|</span>
            <Link href="/refund-cancellation-policy" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
            <span>|</span>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">Disclaimer</Link>
            <span>|</span>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
