"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck2, Search, Sparkles, Building2, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#072a5e] via-[#0b3b82] to-[#eef6fc] text-white pt-8 pb-14 lg:pt-12 lg:pb-18">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#85b6ee_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#0284c7]/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#85b6ee]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-1.5 self-start bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[11px] sm:text-xs font-medium text-blue-100 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#85b6ee]" />
              <span>One Nation • One Tax • One Market</span>
            </div>

            {/* Main Headline (English & Hindi) */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Making business easier, <br />
                <span className="text-[#85b6ee] bg-clip-text text-transparent bg-gradient-to-r from-[#85b6ee] via-blue-200 to-white">
                  every step of the way
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-blue-100/95 font-serif tracking-wide border-l-3 border-[#0284c7] pl-2.5 py-0.5">
                व्यवसाय को आसान बनाते हुए, हर कदम पर
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-xl">
              Empowering millions of Indian businesses, micro-entrepreneurs, traders, and artisans with seamless digital tax compliance, transparent billing, and nationwide market access.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#roadmap"
                className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0077e6] text-white font-semibold text-xs sm:text-sm px-4.5 py-2.5 rounded-lg shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Register for GST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="#benefits"
                className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-lg backdrop-blur-sm transition-all duration-200"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-[#85b6ee]" />
                <span>Explore Benefits</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-3 border-t border-blue-400/20 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div>
                <div className="text-base sm:text-lg font-bold text-white">1.4+ Cr</div>
                <div className="text-[10px] text-blue-200">Active Taxpayers</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">100%</div>
                <div className="text-[10px] text-blue-200">Digital Process</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">28 States</div>
                <div className="text-[10px] text-blue-200">&amp; 8 UTs Unified</div>
              </div>
            </div>

          </div>

          {/* Right Column: Shop Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg group">
              {/* Glow backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0284c7] to-[#85b6ee] rounded-2xl blur-lg opacity-30 group-hover:opacity-40 transition duration-500" />
              
              {/* Image Frame */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm">
                <Image
                  src="/hero-shop.jpg"
                  alt="Traditional Indian Textile Shop representing flourishing businesses under GST"
                  width={600}
                  height={400}
                  priority
                  className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-103"
                />

                {/* Floating Info Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#072a5e]/90 backdrop-blur-md border border-white/20 p-2.5 rounded-lg text-white shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0284c7]/30 border border-[#85b6ee]/40 flex items-center justify-center text-[#85b6ee]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-white">Empowering Indian Merchants</p>
                      <p className="text-[10px] text-blue-200">From local shops to pan-India markets</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[10px] text-emerald-300 font-medium bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Verified GSTN</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
