import Image from "next/image";
import Link from "next/link";
import {
  Printer,
  Scan,
  Droplet,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import StandardCTA from "../StandardCTA";

export default function ConsultationSection() {
  const features = [
    {
      icon: Printer,
      title: "Home & Business Printers",
      description: "Browse high-efficiency laser, inkjet, and all-in-one printers engineered for home offices and enterprise workloads."
    },
    {
      icon: Scan,
      title: "Document & Photo Scanners",
      description: "High-speed document scanners with duplex scanning, ADF, and high optical resolution for paperless workflows."
    },
    {
      icon: Droplet,
      title: "Genuine OEM Ink & Toner",
      description: "Original ink cartridges, high-yield toner, and bulk multipacks to ensure peak print quality and machine longevity."
    },
    {
      icon: Truck,
      title: "Fast Tracked Nationwide Shipping",
      description: "Prompt order dispatch and secure shipping across the United States with complete tracking updates."
    },
    {
      icon: ShieldCheck,
      title: "Manufacturer Warranties",
      description: "All hardware comes backed by official manufacturer warranties and genuine factory guarantees."
    },
    {
      icon: Headphones,
      title: "Product & Purchasing Guidance",
      description: "Dedicated purchasing support to help verify equipment compatibility, volume requirements, and specs."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#024AD8]/95 via-[#024AD8]/90 to-blue-600/85 z-10"></div>
          <Image
            src="/bg-hero.webp"
            alt="Printer and Scanner Retail Collection"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Printing Hardware &amp; Genuine Supplies
              </h2>
              
              <p className="text-lg lg:text-xl text-white/95 leading-relaxed mb-6">
                Smart ePrint Services is your dependable online retailer for home and business printers, high-speed document scanners, and genuine OEM cartridges. We make sourcing office technology simple and cost-effective.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="rounded-xl bg-white px-7 py-3.5 text-sm font-black text-[#024AD8] shadow-lg transition hover:bg-blue-50"
                >
                  Explore Catalog
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Contact Sales Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Shop With Smart ePrint Services
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quality printing hardware, OEM supplies, and dedicated customer support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl border border-slate-200/50 p-8 shadow-sm hover:shadow-lg hover:border-[#024AD8]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50 to-transparent transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#024AD8] transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      {feature.description}
                    </p>

                    <div className="h-1 w-0 bg-[#024AD8] group-hover:w-10 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <StandardCTA />
    </section>
  );
}