import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck2,
  MapPinned,
  ShieldCheck,
  Users,
  Zap,
  CheckCircle,
  Wrench,
  Home,
  Wifi,
} from "lucide-react";
import StandardCTA from "../StandardCTA";

export default function ConsultationSection() {
  const features = [
    {
      icon: Home,
      title: "Residential & Business Support",
      description: "Reliable on-site assistance for homeowners, offices, and commercial spaces with technology and appliance service needs."
    },
    {
      icon: CheckCircle,
      title: "Consultation First",
      description: "Every service request begins with a consultation to understand your equipment, concerns, and the most suitable assistance."
    },
    {
      icon: Wrench,
      title: "On-Site Technology Support",
      description: "Help with computers, printers, networking, smart devices, and office technology at your location."
    },
    {
      icon: Users,
      title: "Home Appliance Assistance",
      description: "Practical assistance for a wide range of household appliances with convenient scheduling."
    },
    {
      icon: MapPinned,
      title: "Flexible Scheduling",
      description: "Appointments are arranged based on your location, availability, and service requirements."
    },
    {
      icon: Zap,
      title: "Preventive Maintenance",
      description: "Routine maintenance services designed to help keep your technology and appliances operating efficiently."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#024AD8]/95 via-[#024AD8]/90 to-blue-600/85 z-10"></div>
          <Image
            src="/bg-hero.webp"
            alt="Technology and Appliance Support"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Technology & Appliance Assistance
              </h2>
              
              <p className="text-lg lg:text-xl text-white/95 leading-relaxed mb-6">
                SmartEprint Services helps homeowners and businesses arrange dependable on-site assistance for a broad range of technology and appliance needs. Every request starts with a consultation so we can understand your situation, discuss available options, and schedule service based on your location and requirements.
              </p>

              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                Whether you need support for computers, printers, networking, smart home devices, or household appliances, our goal is to deliver straightforward assistance with clear communication from beginning to end.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Services & Support
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Assistance for your technology and appliance needs
            </p>
          </div>

          {/* Features Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl border border-slate-200/50 p-8 shadow-sm hover:shadow-lg hover:border-[#024AD8]/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50 to-transparent transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#024AD8] transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      {feature.description}
                    </p>

                    {/* Divider */}
                    <div className="h-1 w-0 bg-[#024AD8] group-hover:w-10 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
     <StandardCTA />
    </section>
  );
}