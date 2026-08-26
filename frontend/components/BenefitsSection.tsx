"use client";

import React from "react";
import {
  Layers,
  MapPin,
  Receipt,
  BadgeCheck,
  ShoppingBag,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  stats?: string;
}

const benefitsData: BenefitItem[] = [
  {
    id: 1,
    title: "One Unified Tax System",
    description:
      "Reduces the complexity of dealing with multiple indirect taxes (VAT, Service Tax, Excise, CST) by unifying them under a single, transparent national umbrella.",
    icon: Layers,
    tag: "Simplicity & Clarity",
    stats: "17+ Taxes Unified",
  },
  {
    id: 2,
    title: "Expand Your Business Across India",
    description:
      "Makes interstate selling and supplying goods/services easier under a unified tax framework without interstate checkposts and cascading border duties.",
    icon: MapPin,
    tag: "National Reach",
    stats: "Pan-India Trading",
  },
  {
    id: 3,
    title: "Claim Tax Credits",
    description:
      "You may be able to claim Input Tax Credit (ITC) on eligible business purchases, significantly reducing your overall tax burden and operational costs.",
    icon: Receipt,
    tag: "Cost Savings",
    stats: "Save on ITC",
  },
  {
    id: 4,
    title: "Build Business Credibility",
    description:
      "GST registration can make your business appear more established and compliant to customers, institutional buyers, banks, and prospective partners.",
    icon: BadgeCheck,
    tag: "Trust & Growth",
    stats: "Verified Trust",
  },
  {
    id: 5,
    title: "Sell on More Platforms",
    description:
      "GST registration is required or essential for selling through major e-commerce marketplaces (Amazon, Flipkart, ONDC) and partnering with larger enterprises.",
    icon: ShoppingBag,
    tag: "E-Commerce Ready",
    stats: "Online Marketplaces",
  },
  {
    id: 6,
    title: "Better Business Records",
    description:
      "GST compliance encourages organised invoicing, sales tracking, and financial record-keeping, which can help as your business grows and seeks loan approvals.",
    icon: BarChart3,
    tag: "Financial Health",
    stats: "Streamlined Books",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-12 lg:py-16 bg-[#f3f7fd] relative">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-36 bg-gradient-to-b from-[#eef6fc] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#0284c7]/10 border border-[#0284c7]/25 text-[#072a5e] font-semibold text-[11px] sm:text-xs px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Why GST Compliance Matters</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#072a5e] tracking-tight">
            Benefits of being compliant with GST :
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transitioning to a formal, GST-compliant enterprise unlocks tremendous financial, operational, and commercial advantages for your business.
          </p>
        </div>

        {/* Infographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="group bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#85b6ee] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent top gradient stripe on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284c7] via-[#85b6ee] to-[#072a5e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Background watermarked number */}
                <span className="absolute -bottom-3 -right-1 text-6xl font-black text-slate-100 group-hover:text-blue-50/70 transition-colors pointer-events-none select-none">
                  0{index + 1}
                </span>

                <div className="space-y-3 relative z-10">
                  {/* Top row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#eef6fc] group-hover:bg-[#0284c7] border border-[#85b6ee]/50 group-hover:border-[#0284c7] text-[#0284c7] group-hover:text-white p-2.5 flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#072a5e] bg-[#eef6fc] group-hover:bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                      {benefit.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 pt-1">
                    <h3 className="text-base font-bold text-[#072a5e] group-hover:text-[#0284c7] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 group-hover:text-[#072a5e]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>{benefit.stats}</span>
                  </div>
                  <span className="text-[#0284c7] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infographic Summary Callout Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#072a5e] via-[#0b3b82] to-[#0284c7] rounded-xl p-4 sm:p-5 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to scale your business with official GST registration?
            </h4>
            <p className="text-xs text-blue-100/90 max-w-2xl">
              Join over 1.4 Crore Indian entrepreneurs enjoying seamless nationwide commerce, input tax credits, and simplified digital filings.
            </p>
          </div>
          <a
            href="#roadmap"
            className="whitespace-nowrap bg-white hover:bg-blue-50 text-[#072a5e] font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all hover:scale-103"
          >
            Follow Registration Steps &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
