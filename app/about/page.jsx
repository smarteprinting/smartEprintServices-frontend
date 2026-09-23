import Link from "next/link";
import {
  Printer,
  ScanLine,
  Layers,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Star,
  Package,
  Lock,
  Clock,
  MapPin,
  AlertTriangle,
  Zap,
} from "lucide-react";

const offerings = [
  { icon: Truck, title: "Free Shipping on Orders Over $49", desc: "We cover standard shipping costs on qualifying orders within the continental United States." },
  { icon: RotateCcw, title: "30-Day Returns", desc: "Unused items in original condition may be returned within 30 days; exclusions and return shipping rules apply." },
  { icon: Headphones, title: "Dedicated Assistance Team", desc: "Our knowledgeable team is here to answer product and compatibility questions before and after your purchase." },
  { icon: Star, title: "Expert Product Recommendations", desc: "We help you cut through the noise and choose the right printer or scanner for your exact use case." },
  { icon: Lock, title: "Secure Checkout Process", desc: "Your transactions are protected with industry-standard encryption and trusted payment processing." },
  { icon: Package, title: "Order Tracking Available", desc: "Track your shipment in real time from dispatch to your doorstep through our easy-to-use order portal." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Quality Products", desc: "We carefully select printers and scanners from trusted manufacturers known for reliability and long-term performance.", color: "#0f6cff" },
  { icon: Truck, title: "Reliable US Shipping", desc: "We partner with trusted carriers to ensure your equipment arrives safely and on time, coast to coast.", color: "#10b981" },
  { icon: Lock, title: "Secure Shopping", desc: "Your transactions are protected with industry-standard SSL encryption and secure payment gateways.", color: "#8b5cf6" },
  { icon: Headphones, title: "Dedicated Support", desc: "Our expert team is available to answer questions about products, compatibility, and post-purchase setup.", color: "#f59e0b" },
];

const productTypes = [
  { title: "Laser Printers", desc: "Fast, efficient printing for high-volume home office and business needs. Sharp text, low per-page costs.", icon: Zap, bg: "bg-blue-50", color: "text-blue-600" },
  { title: "Inkjet Printers", desc: "Vibrant color printing perfect for photos, graphics, and everyday documents.", icon: Printer, bg: "bg-sky-50", color: "text-sky-600" },
  { title: "Document Scanners", desc: "Digitize and archive documents quickly and accurately with flatbed and sheet-fed models.", icon: ScanLine, bg: "bg-indigo-50", color: "text-indigo-600" },
  { title: "All-in-One Devices", desc: "Print, scan, copy, and fax in a single space-saving powerhouse — perfect for busy workspaces.", icon: Layers, bg: "bg-violet-50", color: "text-violet-600" },
];

const businessHours = [
  { day: "Monday \u2013 Friday", hours: "9 AM \u2013 6 PM PT" },
  { day: "Saturday", hours: "10 AM \u2013 4 PM PT" },
  { day: "Sunday", hours: "Closed" },
];

export const metadata = {
  title: "About Us | SmartEprint Services \u2014 Printing & Scanning Solutions",
  description: "Learn about SmartEprint Services, your trusted online destination for professional printing and scanning solutions across the United States.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800 overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg-hero.webp')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#024AD8]/95 via-[#023b9f]/85 to-[#011f59]/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-[#024AD8]/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>About SmartEprint Services</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Your Trusted Online Destination for Professional Printing &amp; Scanning Solutions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-200 max-w-xl">
              We help homes and businesses across the United States find the right equipment for their needs &mdash; without the confusion of technical jargon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-[#0f6cff] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-600 hover:-translate-y-0.5">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f6cff]">Who We Are</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl leading-tight">Your Partner in Printing Excellence</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              SmartEprint Services is a specialized online retailer dedicated to providing high-quality printers and scanners to customers throughout the United States. Founded with a vision to simplify the process of finding the right printing and scanning solutions, we have grown to become a trusted name in the industry.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Our team consists of e-commerce professionals and printing technology experts. We combine our technical knowledge with a passion for customer service to deliver a smooth shopping experience. Each team member brings years of experience in the printing industry, allowing us to provide accurate product information and genuine recommendations.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs leading-relaxed text-amber-800">
                <strong>Important Note:</strong> SmartEprint Services is an independent retailer. We are not affiliated with, endorsed by, or sponsored by HP, Canon, Epson, Brother, or any other manufacturer. We source products from trusted brands and offer them at competitive prices.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productTypes.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${pt.bg} ${pt.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900">{pt.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-gradient-to-br from-[#0c1e3c] to-[#0f3a8a] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-sky-300">Our Mission</span>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl leading-tight">Simplifying Your Printing Needs</h2>
              <p className="mt-5 text-sm leading-relaxed text-blue-100">
                At SmartEprint Services, our mission is to make finding the right printing and scanning equipment as simple and stress-free as possible. We understand that navigating the world of printers and scanners can be overwhelming, especially with the vast array of options available today.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-blue-100">
                That&apos;s why we&apos;ve curated a carefully selected catalog of products that offer genuine value and reliability. Rather than overwhelming you with endless choices, we focus on presenting strong options across different price points and use cases.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-blue-100">
                Our commitment extends beyond just selling products. We strive to educate our customers through comprehensive buying guides, detailed product descriptions, and honest comparisons. We believe that an informed customer is a satisfied customer.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Free shipping on orders over $49", "30-day returns on unused items", "Dedicated assistance team", "Expert product recommendations", "Secure checkout process", "Order tracking available"].map((label) => (
                <div key={label} className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-sky-300 shrink-0" />
                  <span className="text-xs font-semibold text-blue-100 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f6cff]">What We Offer</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Everything You Need in One Place</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">From free shipping to expert recommendations, every part of your shopping experience is designed to save time and deliver practical value.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0f6cff] mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f6cff]">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Why Choose SmartEprint Services?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">We&apos;re committed to providing a smooth shopping experience from browsing to delivery.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: item.color + "18", color: item.color }}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f6cff]">Our Team</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl leading-tight">Here to Help</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              At the heart of SmartEprint Services is our dedicated team of product researchers and technology experts. We take pride in staying up-to-date with the latest developments in printing technology to provide you with accurate, current information and recommendations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Whether you have questions about product specifications, need help choosing between models, or require assistance with your order, we&apos;re here to help. We aim to respond to all inquiries within 24 business hours.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              We believe that good service doesn&apos;t end at checkout. We&apos;re available to help with product compatibility questions, setup guidance, and general inquiries even after your purchase. Your satisfaction is our priority.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-bold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available Mon &ndash; Fri, 9 AM &ndash; 6 PM PT &amp; Sat 10 AM &ndash; 4 PM PT
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-[#0f6cff]" />
                <h3 className="text-sm font-black text-slate-900">Business Hours</h3>
              </div>
              <ul className="space-y-1">
                {businessHours.map(({ day, hours }) => (
                  <li key={day} className="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-0">
                    <span className="text-xs font-semibold text-slate-700">{day}</span>
                    <span className={`text-xs font-bold ${hours === "Closed" ? "text-red-500" : "text-[#0f6cff]"}`}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-[#0f6cff]" />
                <h3 className="text-sm font-black text-slate-900">Service Area</h3>
              </div>
              <div className="space-y-0">
                {[
                  { label: "Primary Market", value: "United States" },
                  { label: "Shipping", value: "Continental US, Alaska & Hawaii" },
                  { label: "Headquarters", value: "3343 Santa Fe St Ste A, Riverbank, CA 95367" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start py-2.5 border-b border-slate-100 last:border-0">
                    <span className="text-xs font-semibold text-slate-500">{label}</span>
                    <span className="text-xs font-bold text-slate-800 text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SELL */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f6cff]">Our Products</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">What We Sell</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">Browse our comprehensive range of printing and scanning solutions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Zap, label: "Laser Printers", sub: "Fast, efficient printing for high-volume needs", color: "#0f6cff" },
              { icon: Printer, label: "Inkjet Printers", sub: "Vibrant color printing for photos and graphics", color: "#0ea5e9" },
              { icon: ScanLine, label: "Document Scanners", sub: "Digitize documents quickly and accurately", color: "#8b5cf6" },
              { icon: Layers, label: "All-in-One", sub: "Print, scan, copy, and fax in one device", color: "#10b981" },
            ].map(({ icon: Icon, label, sub, color }) => (
              <Link key={label} href="/shop" className="group flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl mb-4 transition group-hover:scale-110" style={{ background: color + "15", color }}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-black text-slate-900">{label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#0f3a8a] via-[#0f6cff] to-[#0ea5e9] p-8 sm:p-12 text-white shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-black leading-tight">Ready to Find the Right Printer?</h2>
              <p className="mt-3 text-sm text-blue-100 max-w-lg">Browse our curated selection of printers and scanners. Have questions? Our team is here to help you make the right choice.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
              <Link href="/shop" className="rounded-full bg-white px-7 py-3 text-sm font-black text-[#0f6cff] transition hover:bg-blue-50 hover:-translate-y-0.5 shadow">
                Shop Now
              </Link>
              <Link href="/contact-us" className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/20 backdrop-blur-md">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
