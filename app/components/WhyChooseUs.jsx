        "use client";

import { Truck, ShieldCheck, Award, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Truck,
      title: 'Fast, Free Shipping',
      description: 'Free standard shipping on qualifying orders over $49 to all 50 U.S. states. Orders processed within 1–2 business days.'
    },
    {
      icon: ShieldCheck,
      title: 'Genuine Products Only',
      description: 'Every printer, cartridge, and accessory we sell is brand new and authentic — sourced directly from authorized distributors.'
    },
    {
      icon: Award,
      title: 'HP Authorized Reseller',
      description: 'Innovation Dynamics Group LLC is an HP Authorized Reseller, so you can shop with full confidence in product authenticity.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Customer Service',
      description: 'Our customer service team is available Mon–Fri 9 AM–6 PM and Sat 10 AM–4 PM EST to assist with orders, returns, and product questions.'
    }
  ];

  const features = [
    { title: 'Easy Online Ordering', desc: 'Browse, compare, and order from our full catalog anytime' },
    { title: 'Order Tracking', desc: 'Track every shipment in real time with automated email updates' },
    { title: '30-Day Returns', desc: 'Hassle-free returns on unused items within 30 days of delivery' },
    { title: 'Secure Checkout', desc: 'SSL-encrypted checkout with major credit cards, debit cards, and more' }
  ];

  const stats = [
    { number: '5,000+', label: 'Orders Shipped' },
    { number: '30-Day', label: 'Return Policy' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  const categories = [
    'HP Printers',
    'Inkjet Printers',
    'Laser Printers',
    'All-in-One Printers',
    'Document Scanners',
    'Ink & Toner Cartridges',
    'Printer Accessories',
    'Office Supplies',
    'Specialty Media & Paper',
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 mb-6 border border-brand-200/50 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-brand-600"></div>
            <span className="text-sm font-semibold text-brand-700 uppercase tracking-wider">Why Shop With Us</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Your Trusted Online
            <br />
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent">Printer Retailer</span>
          </h2>
    
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Smart ePrint Services makes it easy to shop for printers, ink, toner, and accessories online — with fast shipping, genuine products, and a team ready to help with any order question.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200/50 hover:border-brand-300/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
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

        {/* Features section */}
        <div className="bg-white rounded-3xl border border-slate-200/50 p-8 lg:p-12 shadow-sm mb-16 lg:mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-100/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 relative z-10">What Makes Shopping With Us Easy</h3>
          
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group text-black bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200/50 hover:border-brand-300/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden text-center"
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

        {/* Product Categories Grid */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Shop By Category</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                href="/shop"
                className="group relative bg-white rounded-xl p-6 border border-slate-200/50 hover:border-brand-300/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-brand-50 to-blue-50 transition-opacity"></div>
                
                <div className="relative flex items-center justify-between">
                  <span className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">{category}</span>
                  <ArrowRight className="h-5 w-5 text-brand-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
