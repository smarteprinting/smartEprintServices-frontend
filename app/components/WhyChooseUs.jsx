"use client";

import { Zap, Clock, Shield, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import StandardCTA from './StandardCTA';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: 'On-Site Help',
      description: 'Technicians trained across computers, printers, smart home systems, networks, and appliances.'
    },
    {
      icon: Clock,
      title: 'Fast Response Times',
      description: 'We prioritize rapid deployment with flexible scheduling to minimize downtime for your home or business.'
    },
    {
      icon: Shield,
      title: 'Reliable Solutions',
      description: 'Every service is backed by our commitment to quality workmanship and transparent communication throughout.'
    },
    {
      icon: Lightbulb,
      title: 'Smart Home Ready',
      description: 'From network setup to smart systems, we handle your technology with care.'
    }
  ];

  const features = [
    { title: 'Rapid Assessment', desc: 'Quick diagnosis to help get your systems back online' },
    { title: 'Flexible Scheduling', desc: 'Appointments that work with your busy schedule' },
    { title: 'On-Site Assistance', desc: 'Technicians trained in multiple services' },
    { title: 'Clear Communication', desc: 'Transparent pricing and straightforward next steps' }
  ];

  const stats = [
    { number: '500+', label: 'Services Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  const services = [
    'Computer & Laptop Support',
    'Printer & Imaging Systems',
    'Smart Home Setup & Support',
    'Network Configuration',
    'TV & Entertainment Systems',
    'Appliance Diagnostics & Repair'
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 mb-6 border border-brand-200/50 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-brand-600"></div>
            <span className="text-sm font-semibold text-brand-700 uppercase tracking-wider">Why Choose SmartEprint</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            On-Site Support
            <br />
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent">Delivered to Your Door</span>
          </h2>
    
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every service starts with understanding your equipment and needs. A technician arrives prepared to help support your technology and appliances on site.
          </p>
        </div>

        {/* Benefits Grid - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200/50 hover:border-brand-300/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-blue-50 transition-opacity duration-300"></div>
                
                <div className="relative">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-[#024AD8] group-hover:bg-[#024AD8]/90 transition-all mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Features Section */}
        <div className="bg-white rounded-3xl border border-slate-200/50 p-8 lg:p-12 shadow-sm mb-16 lg:mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-100/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 relative z-10">Why Our Clients Trust Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded bg-[#024AD8]">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group text-black bg-gradient-to-br  from-white to-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200/50 hover:border-brand-300/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-50 to-blue-50 transition-opacity"></div>
              
              <div className="relative">
                <p className="text-5xl lg:text-6xl font-bold text-[#024AD8] bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text mb-3">
                  {stat.number}
                </p>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
       <StandardCTA />

        {/* Services Grid */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Services We Provide</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <a
                key={idx}
                href="/book-an-appointment"
                className="group relative bg-white rounded-xl p-6 border border-slate-200/50 hover:border-brand-300/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-brand-50 to-blue-50 transition-opacity"></div>
                
                <div className="relative flex items-center justify-between">
                  <span className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">{service}</span>
                  <ArrowRight className="h-5 w-5 text-brand-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
