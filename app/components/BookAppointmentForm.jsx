"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function BookAppointmentForm() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#024AD8]">
        <ShoppingBag size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900">Online Retail &amp; Product Support</h3>
      <p className="mt-2 text-sm text-slate-600">
        Smart ePrint Services is an online retailer selling printers, scanners, and OEM supplies. For product questions or order inquiries, please contact our sales and support team.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#024AD8] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          Browse Shop <ArrowRight size={16} />
        </Link>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
