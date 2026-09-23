"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import StandardCTA from './StandardCTA';

const blogPosts = [
  {
    id: 'on-site-technology-consultation',
    title: 'What to Expect During an On-Site Technology Service Consultation',
    excerpt: 'Technology and appliances have become integral to our daily routines, supporting work, communication, entertainment, and household responsibilities. Understanding what happens during an on-site consultation helps you prepare.',
    image: '/k-hub1.png',
    date: 'July 2026',
    category: 'Service Guide',
    link: '/blogs/on-site-technology-consultation'
  },
  {
    id: 'keep-technology-running-smoothly',
    title: 'Simple Ways to Keep Home and Office Technology Running Smoothly',
    excerpt: 'Technology supports nearly every part of modern life. From computers used for work and education to printers, Wi-Fi networks, smart home devices, and office equipment, keeping these systems running smoothly is essential. Learn practical maintenance tips.',
    image: '/k-hub2.png',
    date: 'July 2026',
    category: 'Maintenance',
    link: '/blogs/keep-technology-running-smoothly'
  },
  {
    id: 'improving-home-wifi-stability',
    title: 'A Practical Guide to Improving Home Wi-Fi and Network Stability',
    excerpt: 'A reliable network has become just as important as electricity in many homes and workplaces. Computers, printers, televisions, smart home devices, and security systems all depend on stable connectivity. Discover practical solutions to enhance your network.',
    image: '/k-hub3.png',
    date: 'July 2026',
    category: 'Networking',
    link: '/blogs/improving-home-wifi-stability'
  }
];

export default function BlogSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-100/10 rounded-full blur-3xl -ml-40 -mt-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -mr-40 -mb-40"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 mb-6 border border-brand-200/50 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-brand-600"></div>
            <span className="text-sm font-semibold text-brand-700 uppercase tracking-wider">Knowledge Hub</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Power Up Your Knowledge
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tips, guides, and insights to help you maintain your technology and appliances.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, idx) => (
            <Link
              key={post.id}
              href={post.link}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-brand-300/50 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 lg:h-52 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30 group-hover:to-black/50 transition-all"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <div className="flex items-center justify-center h-5 w-5 rounded bg-[#024AD8] flex-shrink-0">
                    <Calendar className="w-3 h-3 text-white" />
                  </div>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors line-clamp-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-white bg-[#024AD8] px-3 py-1 rounded-lg group-hover:bg-[#024AD8]/90 transition-colors mt-auto w-fit">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <StandardCTA />
      </div>
    </section>
  );
}
