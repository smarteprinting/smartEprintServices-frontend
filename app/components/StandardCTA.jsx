import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StandardCTA() {
  return (
    <div className="relative left-1/2 w-screen -ml-[50vw] overflow-hidden bg-gradient-to-br from-[#01152F] via-[#023B9E] to-[#024AD8]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-md">
              Need Professional Assistance?
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white lg:text-5xl xl:text-6xl">
              Ready to Get
              <span className="block text-blue-200">On-Site Assistance?</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100/90 lg:text-lg">
              SmartEprint Services provides professional support for printer setup, connectivity, computer configuration, and everyday technology issues. Schedule a consultation and let our experienced team assist you with practical, reliable solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-[#024AD8] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#024AD8]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-cyan-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/customer-care.jpg"
                alt="Customer Support"
                className="mx-auto w-full max-w-sm object-contain transition duration-500 hover:scale-105 lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
