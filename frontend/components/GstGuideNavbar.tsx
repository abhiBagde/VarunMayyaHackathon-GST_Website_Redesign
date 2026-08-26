"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot, LogOut, Sparkles } from "lucide-react";

interface GstGuideNavbarProps {
  gstGptActive?: boolean;
  onGstGptClick?: () => void;
}

/**
 * Dedicated navbar for the GST Guide page:
 * standard GST logo on the left, and GSTGPT + taxpayer
 * account profile on the right.
 */
export default function GstGuideNavbar({
  gstGptActive = false,
  onGstGptClick,
}: GstGuideNavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#072a5e] text-white shadow-lg border-b border-[#0d3b7e]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left Side: Standard Logo */}
        <Link href="/" className="flex items-center gap-2.5 py-1 group shrink-0">
          <Image
            src="/Emblem_of_India-white.svg"
            alt="Goods and Services Tax Home"
            width={48}
            height={56}
            priority
            className="w-8 h-10 sm:w-10 sm:h-12 object-contain shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight group-hover:text-blue-100 transition-colors">
              Goods and Services Tax
            </span>
            <span className="text-[9px] sm:text-[10px] text-blue-200/90 font-normal leading-tight">
              Government of India, States and Union Territories
            </span>
          </div>
        </Link>

        {/* Right Side: GSTGPT + Account Profile */}
        <div className="flex items-center gap-3 shrink-0">
          {/* GSTGPT nav item */}
          <button
            type="button"
            onClick={onGstGptClick}
            className={`hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 border shrink-0 ${
              gstGptActive
                ? "bg-gradient-to-r from-[#0284c7] to-[#6366f1] text-white border-[#0284c7] shadow-md"
                : "text-blue-100 hover:text-white hover:bg-white/10 border-white/15"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>GSTGPT</span>
            <Bot className="w-3.5 h-3.5 text-[#85b6ee]" />
          </button>

          <div className="flex items-center gap-2 bg-[#041d42] px-3 py-1.5 rounded-xl border border-blue-900/80">
            <div className="w-7 h-7 rounded-full bg-[#0284c7] text-white flex items-center justify-center font-bold text-xs">
              ST
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-white leading-tight">
                Sharma Textiles
              </p>
              <p className="text-[10px] text-emerald-400 font-medium leading-none">
                Regular Taxpayer
              </p>
            </div>
          </div>

          <Link
            href="/"
            title="Back to landing page"
            className="p-2 text-blue-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}