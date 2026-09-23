import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Wrench,
} from "lucide-react";
import BookAppointmentForm from "../components/BookAppointmentForm";

export const metadata = {
  title: "Book an Appointment | SmartEprint Services",
  description:
    "Schedule an on-site or remote printer appointment with certified HP specialists at SmartEprint Services.",
};

export default function BookingPage() {
  return (
    <div className="">
      {/* Hero Section with Background Image, Headline & HP Seller Badge */}
      <section className="relative overflow-hidden text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/appointment-hero-1.webp')" }}
          role="img"
          aria-label="Book an Appointment Background"
        />

        {/* Gradient Overlays for high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d4d]/95 via-[#032b70]/88 to-[#02183d]/80" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Column: Badges, Headline & Value Props */}
            <div className="max-w-2xl text-center lg:text-left">
              {/* Partner Badge Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
                {/* HP Seller Badge */}
                <div className="inline-flex items-center gap-2.5">
                  <Image
                    src="/hp-seller.png"
                    alt="Authorized HP Seller"
                    width={150}
                    height={50}
                    className="h-10 w-auto object-contain brightness-110"
                    priority
                  />
                  
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Schedule Your Expert <br />
                <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-100 bg-clip-text text-transparent">
                  Printer Consultation &amp; Setup
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Book a direct appointment with certified hardware technicians for seamless printer setup, wireless networking, driver installation, and troubleshooting across the US.
              </p>

              {/* Trust Points */}
              
            </div>

            {/* Right Column: Priority Dispatch Guidance Card */}
            <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  Priority Dispatch
                </span>
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="SmartEprint Logo"
                    width={80}
                    height={28}
                    className="h-6 w-auto object-contain brightness-0 invert"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">
                Need Faster Assistance?
              </h3>
              <p className="mt-1 text-xs text-slate-200 leading-relaxed">
                Connect directly with our dispatch desk to lock in a dedicated appointment window for your home or office printer setup today.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-950/70 p-3.5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300">Toll-Free Dispatch:</span>
                <a
                  href="tel:+18777652289"
                  className="font-bold text-sky-400 hover:text-sky-300 transition"
                >
                  (877) 765-2289
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <div id="booking-form" className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Form + Side Image Container */}
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <div className="flex">
              <div className="w-full">
                <BookAppointmentForm />
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                <img
                  src="/k-hub1.png"
                  alt="Printer consultation and appointment booking"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
