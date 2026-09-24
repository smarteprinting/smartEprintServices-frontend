"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { apiFetch as fetch } from "../lib/api";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmartEprint Services",
  url: "https://smarteprintservices.com",
  logo: "https://smarteprintservices.com/hero-printer-clean.avif",
  description:
    "SmartEprint Services provides printers, scanners, office technology products, business printing solutions, and on-site support across the United States.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-877-765-2289",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["en"],
    },
  ],
  sameAs: ["https://smarteprintservices.com"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};
import {
  Printer,
  ScanLine,
  Layers,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Star,
  Check,
  Building2,
  Home,
  GraduationCap,
  HeartPulse,
  Palette,
  Briefcase,
  Clock,
  Wifi,
  FileText,
  Send,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { useCart } from "./components/CartContext";
import { products as fallbackCatalog } from "../lib/productsData";

// Hardware Categories
const productCategories = [
  {
    title: "Inkjet & Supertank Printers",
    badge: "Vibrant Color",
    description:
      "Well-suited for vivid photos, marketing collateral, and everyday documents. Ideal for home offices and creative projects.",
    image: "/h1.png",
    accent: "from-blue-600/15 to-sky-500/10",
    features: [
      "Vibrant high-DPI color output",
      "Borderless photo printing",
      "Affordable upfront investment",
      "Supertank refillable options",
    ],
    href: "/shop?category=inkjet",
  },
  {
    title: "High-Speed Laser Printers",
    badge: "Fast & Sharp",
    description:
      "High-speed monochrome and color text printing with an ultra-low cost per page. A reliable powerhouse for busy offices.",
    image: "/h2.png",
    accent: "from-indigo-600/15 to-blue-500/10",
    features: [
      "Blazing print speeds up to 40+ ppm",
      "Minimal running cost per page",
      "Razor-sharp micro-text clarity",
      "Heavy-duty monthly duty cycles",
    ],
    href: "/shop?category=laser",
  },
  {
    title: "All-in-One Multi-Function",
    badge: "Space Saving",
    description:
      "Print, scan, copy, and fax combined into a single compact powerhouse. Maximizes workspace efficiency without sacrificing power.",
    image: "/h3.png",
    accent: "from-cyan-600/15 to-blue-500/10",
    features: [
      "Print, scan, copy & fax combined",
      "Automatic document feeders (ADF)",
      "Compact space-saving desktop footprint",
      "Cloud and wireless mobile printing",
    ],
    href: "/shop?category=all-in-one",
  },
  {
    title: "Dedicated Document Scanners",
    badge: "Paperless Flow",
    description:
      "Flatbed, portable, and high-speed sheetfed document scanners engineered for rapid archiving and clean digital workflows.",
    image: "/h4.png",
    accent: "from-emerald-600/15 to-teal-500/10",
    features: [
      "Rapid single-pass duplex scanning",
      "Scan directly to Cloud, PDF & Email",
      "Compact portable & desktop designs",
      "Receipt, card & legal paper handling",
    ],
    href: "/shop?category=all",
  },
];

// Who We Serve (Solutions for Every Need)
const solutions = [
  {
    title: "Home Office",
    icon: Home,
    summary: "Compact, reliable equipment well-suited for remote work, school assignments, and everyday home management.",
    points: ["Wireless & mobile connectivity", "Compact desk-friendly designs", "Simple 5-minute setup"],
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-100",
  },
  {
    title: "Small Business",
    icon: Briefcase,
    summary: "Cost-effective, heavy-duty setups that scale with your growing transactions, shipping labels, and documents.",
    points: ["High-volume paper capacity", "Gigabit network & Wi-Fi ready", "Ultra-low cost per page"],
    color: "from-sky-500/10 to-blue-500/10",
    borderColor: "border-sky-100",
  },
  {
    title: "Enterprise & Corporate",
    icon: Building2,
    summary: "High-performance multifunction devices designed for demanding corporate offices with advanced IT security.",
    points: ["Multi-department sharing", "Advanced hardware-level security", "Seamless cloud & ERP integration"],
    color: "from-slate-500/10 to-blue-500/10",
    borderColor: "border-slate-200",
  },
  {
    title: "Creative & Photography",
    icon: Palette,
    summary: "Professional-grade photo printers and high-resolution scanners built for designers, artists, and photographers.",
    points: ["Expansive, accurate color gamut", "Archival-grade pigment inks", "Wide-format & borderless media"],
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-100",
  },
  {
    title: "Education & Libraries",
    icon: GraduationCap,
    summary: "Durable, high-uptime equipment engineered for schools, universities, study centers, and administrative desks.",
    points: ["Low maintenance & jam-resistant", "Student-friendly intuitive touchscreens", "Strict budget-conscious operation"],
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-100",
  },
  {
    title: "Healthcare & Clinics",
    icon: HeartPulse,
    summary: "Secure printing and document digitization equipment suitable for medical clinics, pharmacies, and dental offices.",
    points: ["HIPAA-ready secure PIN release", "Prescription & medical label trays", "Fast ID card & insurance scanning"],
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-100",
  },
];

// The SmartEprint Advantage (Why Choose Us)
const advantages = [
  {
    title: "Trusted Manufacturer Brands",
    description:
      "We focus on genuine HP hardware known for durability, consistent performance, and dependable manufacturer support.",
    icon: ShieldCheck,
  },
  {
    title: "Fast 24-Hour Dispatch",
    description:
      "Most orders ship within 1 business day from nationwide distribution centers. Get your equipment quickly with full door-to-door tracking.",
    icon: Truck,
  },
  {
    title: "Personalized Human Guidance",
    description:
      "No confusing technical jargon. Our equipment specialists analyze your workload and help you select the exact device you need.",
    icon: Headphones,
  },
  {
    title: "Wide, Curated Hardware Selection",
    description:
      "From compact home-office printers to enterprise multifunction powerhouses, we stock solutions tailored for every budget and scale.",
    icon: Layers,
  },
];

// Simple 3-Step Process
const processSteps = [
  {
    number: "01",
    title: "Browse Our Curated Catalog",
    description:
      "Explore our handpicked selection of professional printers, scanners, and all-in-one machines without overwhelming technical jargon.",
  },
  {
    number: "02",
    title: "Compare & Choose",
    description:
      "Use our plain-English buying guides, transparent specifications, and expert advice to pick the right device for your exact volume.",
  },
  {
    number: "03",
    title: "Fast Delivery & Enjoy",
    description:
      "Experience fast checkout, prompt delivery straight to your doorstep, and easy plug-and-play setup to start printing immediately.",
  },
];

// For Business: Boost Your Office Productivity
const businessPerks = [
  {
    title: "Save Time",
    description: "High-speed duplex printers and single-pass scanners eliminate waiting lines and keep workflow moving.",
    icon: Clock,
  },
  {
    title: "Reduce Operating Costs",
    description: "Supertank models and high-yield laser cartridges dramatically lower cost-per-page expenses.",
    icon: Zap,
  },
  {
    title: "Stay Wirelessly Connected",
    description: "Print effortlessly from laptops, iPhones, iPads, and Android devices with Wi-Fi 6, AirPrint, and Mopria.",
    icon: Wifi,
  },
  {
    title: "Go Completely Paperless",
    description: "Convert stacks of paper into searchable digital PDFs, saving directly to cloud drives or email.",
    icon: FileText,
  },
];

// Buying Advice: What to Consider Before You Buy
const buyingFactors = [
  {
    title: "Monthly Print Volume",
    detail:
      "Consider how many pages you print each month. Home users typically print under 200 pages, while busy offices need duty cycles rated for 1,000+ pages monthly. Matching volume prevents premature wear and keeps costs predictable.",
  },
  {
    title: "Color vs. Monochrome",
    detail:
      "If you primarily print invoices, contracts, and text documents, a monochrome laser printer offers lightning speed and the lowest cost per page. For photos, charts, and marketing flyers, a color inkjet or color laser is essential.",
  },
  {
    title: "Connectivity & Mobile Options",
    detail:
      "Ensure the model matches your setup. Dual-band Wi-Fi, Ethernet, and USB connectivity allow multiple computers, phones, and tablets to print simultaneously with Apple AirPrint, Mopria, and cloud apps.",
  },
  {
    title: "Total Cost of Ownership (TCO)",
    detail:
      "The initial purchase price is just step one. Consider replacement ink and toner yields. While laser printers or refillable Supertanks cost a bit more upfront, they save hundreds of dollars over time with higher page yields.",
  },
  {
    title: "Size & Available Desk Space",
    detail:
      "Measure your available workspace prior to purchasing. Compact all-in-one models conserve valuable desk space by combining printing, scanning, and copying into one footprint.",
  },
  {
    title: "Print & Scan Resolution (DPI)",
    detail:
      "Resolution is measured in dots per inch (DPI). For standard office text, 600 DPI is crisp and professional. Photo printing benefits from 1200 x 4800 DPI, and document scanning is crisp at 300 to 600 DPI.",
  },
];

// FAQs
const faqs = [
  {
    q: "What types of printers and scanners do you sell?",
    a: "We stock a focused catalog of HP printing and scanning hardware, including laser printers, inkjet all-in-ones, desktop document scanners, and multifunction systems.",
  },
  {
    q: "Do you ship to all 50 U.S. states?",
    a: "Yes! SmartEprint Services ships nationwide across all 50 U.S. states. We offer free standard delivery on orders over $49 within the continental United States, with expedited shipping options available at checkout.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a straightforward 30-day return policy. If your purchase does not meet your expectations, contact our customer support within 30 days of receipt. Once received in original packaging and inspected, your refund is processed within 5 to 10 business days.",
  },
  {
    q: "Do your products come with a warranty?",
    a: "All equipment sold through SmartEprint Services is 100% brand new and backed by official manufacturer warranties (typically 1 to 2 years, depending on the brand and model). We also provide dedicated post-purchase setup and guidance.",
  },
  {
    q: "How do I decide between an inkjet and a laser printer?",
    a: "Choose an inkjet if you need vibrant colors, photo quality, or have lower volume everyday printing needs. Choose a laser printer if you print predominantly text documents, need blazing print speeds, and want the lowest ongoing cost per page.",
  },
  {
    q: "Can I print from my phone or tablet?",
    a: "Yes. Nearly all modern wireless printers in our catalog support Apple AirPrint, Android Mopria, Wi-Fi Direct, and manufacturer apps (such as HP Smart, Epson Smart Panel, and Canon PRINT). You can easily print from iOS and Android devices without tangled cables.",
  },
  {
    q: "Do you sell ink, toner, or replacement parts?",
    a: "Yes! In addition to hardware, we provide genuine OEM replacement toner cartridges, ink bottles, high-yield multi-packs, and heavy-duty printer cables in our online shop.",
  },
  {
    q: "How can I contact your support team?",
    a: "Our customer support team is available via email, phone, and our website contact form. You can also book a 1-on-1 virtual consultation or appointment for personalized recommendations and setup assistance.",
  },
];

export default function HomePage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Live Database Products State
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Fetch real products from database via /api/products (Show ONLY HP)
  useEffect(() => {
    fetch("/api/products", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products) && data.products.length > 0) {
          // Filter ONLY HP products with valid images
          const hpOnly = data.products.filter((p) => {
            const isHp =
              (p.brand || "").toLowerCase() === "hp" ||
              (p.name || p.title || "").toLowerCase().includes("hp");
            return isHp && p.image;
          });

          // Sort HP printers to the top
          const sortedHp = hpOnly.sort((a, b) => {
            const nameA = (a.name || a.title || "").toLowerCase();
            const nameB = (b.name || b.title || "").toLowerCase();
            const isPrinterA =
              nameA.includes("printer") ||
              nameA.includes("laserjet") ||
              nameA.includes("officejet") ||
              nameA.includes("smart tank") ||
              nameA.includes("deskjet") ||
              nameA.includes("envy")
                ? 1
                : 0;
            const isPrinterB =
              nameB.includes("printer") ||
              nameB.includes("laserjet") ||
              nameB.includes("officejet") ||
              nameB.includes("smart tank") ||
              nameB.includes("deskjet") ||
              nameB.includes("envy")
                ? 1
                : 0;
            return isPrinterB - isPrinterA;
          });

          if (sortedHp.length > 0) {
            setDbProducts(sortedHp);
          } else {
            const fallbackHp = fallbackCatalog.filter(
              (p) =>
                (p.brand || "").toLowerCase() === "hp" ||
                (p.name || "").toLowerCase().includes("hp")
            );
            setDbProducts(fallbackHp.length > 0 ? fallbackHp : fallbackCatalog);
          }
        } else {
          const fallbackHp = fallbackCatalog.filter(
            (p) =>
              (p.brand || "").toLowerCase() === "hp" ||
              (p.name || "").toLowerCase().includes("hp")
          );
          setDbProducts(fallbackHp.length > 0 ? fallbackHp : fallbackCatalog);
        }
      })
      .catch((err) => {
        console.warn("Could not load products from DB, using fallback:", err);
        setDbProducts(fallbackCatalog);
      })
      .finally(() => {
        setIsLoadingProducts(false);
      });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  // Slice top 8 HP products from database
  const displayProducts = dbProducts.slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="w-full bg-slate-50 text-slate-800 overflow-x-hidden">
        {/* ========================================================================= */}
      {/* 1. HERO SECTION: 70VH MIN-HEIGHT, VISIBLE BG IMAGE, RIGHT PRINTER ONLY */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-slate-950 py-8 sm:py-12 lg:py-14">
        {/* Background Image - Clearly Visible */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg-hero.webp')",
          }}
        />

        {/* Soft, Transparent Overlay - Background Image is Clearly Visible */}
        <div className="absolute inset-0 bg-blue-750/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-750/60 via-blue-850/30 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Left Side: Heading, Paragraph, Badge, and Buttons ONLY */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-md">
                <Sparkles className="h-3 w-3 text-sky-400" />
                <span>SmartEprint Services • Nationwide USA</span>
              </div>

              {/* Reduced Font Size Heading */}
              <h1 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight text-white leading-tight">
                Your Trusted Partner for Professional{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Printing &amp; Scanning
                </span>{" "}
                Solutions.
              </h1>

              {/* Reduced Font Size Paragraph */}
              <p className="mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-slate-200">
                At SmartEprint Services, we believe that everyone deserves access to reliable, high-quality printing
                and scanning equipment. Whether you are a student, remote professional, or growing business, we take
                the guesswork out of finding the right hardware—without confusing technical jargon.
              </p>

              {/* Compact Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f6cff] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_12px_28px_rgba(15,108,255,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>Shop Best Sellers</span>
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition duration-200 hover:bg-white/20 focus:outline-none"
                >
                  <Headphones className="h-3.5 w-3.5 text-sky-300" />
                  <span>Talk to an Expert</span>
                </Link>
              </div>

              {/* Compact Trust Badges */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span>Free Shipping &gt;$49</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span>Brand Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span>24h Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Side: Clean Printer Image ONLY (No people, no text overlays, no cards) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Subtle ambient lighting glow */}
              <div className="absolute h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

              {/* Pure printer image */}
              <div className="relative w-full max-w-md lg:max-w-lg flex items-center justify-center">
                <img
                  src="/hero-printer-only.jpg"
                  alt="SmartEprint Professional Printing Hardware"
                  className="w-full max-h-[300px] sm:max-h-[350px] lg:max-h-[390px] object-cover rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST STATS & HIGHLIGHTS BAR */}
      {/* ========================================================================= */}
      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0f6cff]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Genuine Equipment</h4>
                <p className="text-xs text-slate-500">Printers, scanners &amp; supplies</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0f6cff]">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Free U.S. Shipping</h4>
                <p className="text-xs text-slate-500">On orders over $49</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0f6cff]">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">30-Day Returns</h4>
                <p className="text-xs text-slate-500">Unused items; exclusions apply</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0f6cff]">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Dedicated Guidance</h4>
                <p className="text-xs text-slate-500">No technical jargon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HARDWARE CATEGORIES (PRODUCT TYPES: FIND THE RIGHT PRINTER) */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f6cff]">
              Product Types
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Find the Right Printing &amp; Scanning Hardware
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Different workflows require specialized hardware. Explore our primary equipment categories curated for
              reliability, quality, and low operating costs.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f6cff] hover:text-blue-700 shrink-0"
          >
            <span>Explore Complete Shop</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat) => (
            <div
              key={cat.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Category Image Box */}
                <div
                  className={`relative mb-6 h-48 w-full rounded-2xl bg-gradient-to-br ${cat.accent} flex items-center justify-center p-4 overflow-hidden`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-800 backdrop-blur-sm shadow-sm">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{cat.description}</p>

                {/* Features List */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {cat.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <Check className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href={cat.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 py-3 text-xs font-bold text-white transition hover:bg-[#0f6cff]"
                >
                  <span>Browse Collection</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED PRODUCTS (HP HARDWARE LOADED DIRECTLY FROM THE DATABASE) */}
      {/* ========================================================================= */}
      <section className="bg-slate-100/70 py-12 lg:py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f6cff]">
                HP Certified Hardware
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
                Featured HP Printers &amp; Hardware
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl">
                Official HP hardware synced directly from our inventory. Backed by genuine HP warranties,
                reliability, and fast nationwide delivery.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f6cff] hover:text-blue-700 shrink-0"
            >
              <span>View All HP Products</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {isLoadingProducts ? (
            /* Loading Skeleton Grid (Compact 4-col) */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm"
                >
                  <div className="h-36 bg-slate-200 rounded-xl mb-3" />
                  <div className="h-3 bg-slate-200 rounded w-1/3 mb-2" />
                  <div className="h-4 bg-slate-200 rounded w-3/4 mb-3" />
                  <div className="h-6 bg-slate-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            /* Real HP Database Products Grid (Compact 4-col) */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {displayProducts.map((item) => {
                const productName = item.name || item.title || "HP Hardware";
                const productPrice = Number(item.price || 0);
                const originalPrice = item.originalPrice ? Number(item.originalPrice) : null;
                const brand = item.brand || "HP";
                const badge = item.badge || (item.inStock !== false ? "In Stock" : "HP Genuine");
                const imageUrl = item.image || "/hero-printer-only.jpg";

                return (
                  <div
                    key={item.id || item._id}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div>
                      {/* Reduced Image Container */}
                      <Link
                        href={`/shop/${item.id || item._id}`}
                        className="relative h-36 sm:h-40 w-full bg-slate-50/80 p-3 flex items-center justify-center border-b border-slate-100 overflow-hidden block cursor-pointer"
                      >
                        <img
                          src={imageUrl}
                          alt={productName}
                          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 flex items-center gap-1">
                          <span className="rounded bg-slate-900/90 text-white px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
                            {badge}
                          </span>
                          <span className="rounded bg-blue-50 text-[#0f6cff] border border-blue-200 px-1.5 py-0.5 text-[9px] font-bold">
                            {brand}
                          </span>
                        </div>
                      </Link>

                      {/* Reduced Body Content */}
                      <div className="p-3">
                        {/* Rating & Category */}
                        <div className="flex items-center justify-between gap-1 text-[11px] mb-1">
                          <span className="font-semibold text-slate-500 uppercase tracking-wide truncate text-[10px]">
                            {item.category || "HP Printer"}
                          </span>
                          <div className="flex items-center gap-0.5 text-amber-500 font-bold shrink-0 text-[11px]">
                            <Star className="h-3 w-3 fill-current" />
                            <span>{item.rating || 4.8}</span>
                          </div>
                        </div>

                        {/* Name */}
                        <Link href={`/shop/${item.id || item._id}`} className="block group/title">
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2 h-9 transition group-hover/title:text-[#0f6cff]">
                            {productName}
                          </h3>
                        </Link>
                      </div>
                    </div>

                    {/* Reduced Footer Price & Add to Cart */}
                    <div className="p-3 pt-0 border-t border-slate-100 mt-1">
                      <div className="flex items-baseline justify-between gap-1 mb-2 pt-2">
                        <div>
                          <span className="text-base font-black text-slate-900">
                            ${productPrice.toFixed(2)}
                          </span>
                        </div>
                        <span className="text-[10px] font-medium text-emerald-600">Free Shipping</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() =>
                            addToCart({
                              id: item.id || item._id,
                              name: productName,
                              price: productPrice,
                              image: imageUrl,
                            })
                          }
                          className="inline-flex items-center justify-center gap-1 rounded-full bg-[#0f6cff] py-1.5 px-2 text-[11px] font-bold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none"
                        >
                          <ShoppingCart className="h-3 w-3" />
                          <span>Add</span>
                        </button>
                        <Link
                          href={`/shop/${item.id || item._id}`}
                          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 py-1.5 px-2 text-[11px] font-semibold text-slate-700 transition hover:bg-white hover:border-slate-300"
                        >
                          <span>Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHO WE SERVE: SOLUTIONS FOR EVERY NEED */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f6cff]">
            Who We Serve
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Solutions Built for Every Sector &amp; Workflow
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            SmartEprint Services proudly serves a diverse range of customers across the United States. Whether you
            are outfitting a home workspace, a creative photography studio, or a corporate hospital floor, we have
            tailored equipment built for your exact demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => {
            const IconComp = sol.icon;
            return (
              <div
                key={sol.title}
                className={`rounded-[28px] border ${sol.borderColor} bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${sol.color} text-[#0f6cff]`}
                >
                  <IconComp className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-black text-slate-900">{sol.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{sol.summary}</p>

                <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                  {sol.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="h-3.5 w-3.5 text-[#0f6cff] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. THE SMARTEPRINT ADVANTAGE: WHY CHOOSE US */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 lg:py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-400">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl leading-tight">
                The SmartEprint Advantage.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                We're more than just an equipment store—we're your trusted long-term printing technology partner.
                Our team takes the guesswork out of hardware selection with honest buying advice, genuine brand
                stock, and dedicated nationwide customer care.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">Our Product Guarantee</h3>
                  <p className="text-xs text-slate-300">Selected for durability, value &amp; satisfaction</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Every product in our catalog has been selected based on reliability, value, and customer satisfaction
                ratings. We stand firmly behind what we sell and are committed to helping you find equipment that will
                serve you well for years to come.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => {
              const IconComp = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-sky-400/40 hover:bg-white/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f6cff]/20 text-sky-400">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{adv.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SIMPLE PROCESS: HOW IT WORKS */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f6cff]">
            Simple Process
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            How Getting Equipment Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Getting your new printer or scanner is seamless and straightforward with SmartEprint Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="text-5xl font-black text-blue-100 mb-4">{step.number}</span>
              <h3 className="text-xl font-black text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FOR BUSINESS: BOOST YOUR OFFICE PRODUCTIVITY */}
      {/* ========================================================================= */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-400">
                For Business
              </span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl leading-tight">
                Boost Your Office Productivity With Modern Equipment
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                Modern printing and scanning equipment can transform how your business operates. From reducing
                delays to curbing recurring ink costs, the right tools make an immediate difference to your bottom
                line.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="inline-flex rounded-full bg-[#0f6cff] px-7 py-3.5 text-xs font-bold text-white shadow-lg transition hover:bg-blue-600"
                >
                  Shop Office Laser &amp; Scanners
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  Request Business Quote
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {businessPerks.map((perk) => {
                const IconComp = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{perk.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{perk.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BUYING ADVICE: WHAT TO CONSIDER BEFORE YOU BUY */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f6cff]">
            Buying Advice
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            What to Consider Before You Buy
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Choosing the right printer or scanner is a practical decision that depends on your specific volume,
            space, and media needs. Review the key factors below before purchasing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyingFactors.map((factor, i) => (
            <div
              key={factor.title}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[#0f6cff] text-xs font-black">
                  {i + 1}
                </span>
                <h3 className="text-lg font-black text-slate-900">{factor.title}</h3>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">{factor.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] bg-blue-50 border border-blue-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Need personalized equipment comparison?</h3>
            <p className="text-xs text-slate-600 mt-1">
              Our hardware advisors will guide you through duty cycles, toner costs, and connectivity.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex rounded-full bg-[#0f6cff] px-6 py-3 text-xs font-bold text-white transition hover:bg-blue-700 shrink-0"
          >
            Ask a Specialist
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SERVING THE USA: SHIPPING, DELIVERY & 3-STEP RETURNS */}
      {/* ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Shipping & Delivery Details */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0f6cff]">
                  <Truck className="h-6 w-6" />
                </span>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f6cff]">
                    Serving the USA
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Shipping &amp; Delivery Details</h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                SmartEprint Services ships from certified distribution partners across the United States. We work to
                get your equipment to you as swiftly and securely as possible.
              </p>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Free standard shipping</strong> on orders over $49 within the continental United
                    States.
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>5 to 7 business days</strong> standard delivery time depending on your destination.
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Expedited &amp; express options</strong> available during checkout for urgent deadlines.
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Live tracking numbers</strong> provided for every shipment so you can monitor progress.
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                <Link href="/refund-cancellation-policy" className="text-xs font-bold text-[#0f6cff] hover:underline">
                  View Shipping &amp; Cancellation Policy →
                </Link>
                <Link href="/disclaimer" className="text-xs font-bold text-slate-500 hover:underline">
                  Warranty &amp; Compliance Info
                </Link>
              </div>
            </div>

            {/* Right: 3-Step Return Process */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0f6cff]">
                  <RotateCcw className="h-6 w-6" />
                </span>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f6cff]">
                    Peace of Mind
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Our Return Process</h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                We want you to be completely satisfied with your purchase. If a product does not meet your expectations,
                our return procedure is transparent and uncomplicated:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-black">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Contact Us Within 30 Days</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Reach out to our customer support team within 30 days of receiving your order to request an RMA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-black">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Ship in Original Packaging</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Pack the item securely with all original cables, accessories, and manuals using provided instructions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-black">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Prompt Inspection &amp; Refund</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Once received and checked, your full refund is processed back to your original payment in 5 to 10 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link
                  href="/contact-us"
                  className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition hover:bg-[#0f6cff]"
                >
                  Start a Return or Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. INTERACTIVE FREQUENTLY ASKED QUESTIONS (ACCORDIONS) */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f6cff]">
            Common Questions
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Straightforward answers to the questions we hear most often from our customers across the USA.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
                >
                  <span className="text-base font-extrabold text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#0f6cff] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Have a question that is not listed here? Our support team is happy to assist.
          </p>
          <Link
            href="/contact-us"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0f6cff] px-6 py-3 text-xs font-bold text-white transition hover:bg-blue-700"
          >
            <span>Contact Support Team</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. NEWSLETTER & FINAL CONSULTATION CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:pb-24">
        <div className="rounded-[36px] bg-gradient-to-br from-[#0b3b63] via-[#041a2f] to-slate-950 p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-200">
                <Sparkles className="h-3 w-3 text-sky-400" />
                Stay Updated
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl text-white">
                Get Hardware Updates &amp; Printing Tips
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Subscribe to the SmartEprint Services newsletter for product announcements, new arrivals,
                and practical maintenance advice delivered to your inbox.
              </p>

              <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-400" />
                  <span>Free shipping on orders over $49</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-400" />
                  <span>30-Day returns on unused items</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-400" />
                  <span>Official Brand Warranties</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              {newsletterSuccess ? (
                <div className="text-center py-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Thank you for subscribing!</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Check your email soon for your welcome guide and technology updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <label htmlFor="newsletter-email" className="block text-xs font-bold text-slate-200">
                    Enter your work or personal email
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="e.g. name@company.com"
                      className="flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f6cff] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-blue-600 focus:outline-none shrink-0"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Subscribe</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    No spam ever. Unsubscribe anytime. We deeply respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
