"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserPlus, BookOpen, LogIn, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#072a5e] text-white shadow-lg border-b border-[#0d3b7e]">
      {/* Top Gov Banner Strip */}
      {/* <div className="bg-[#041d42] text-[11px] text-blue-200/90 py-1 px-4 sm:px-8 flex justify-between items-center border-b border-blue-900/40">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Official Portal for Goods and Services Tax, Government of India</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px]">
          <span className="text-blue-300">Toll Free: 1800-103-4786</span>
          <span className="text-blue-400">|</span>
          <span className="hover:text-white cursor-pointer transition-colors">Skip to Main Content</span>
          <span className="text-blue-400">|</span>
          <span className="hover:text-white cursor-pointer transition-colors font-medium">हिंदी</span>
        </div>
      </div> */}

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2.5 py-1 group">
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

        {/* Right Side: Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#roadmap"
            className="flex items-center gap-1.5 text-xs font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            <UserPlus className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>New User Registration</span>
          </Link>

          <Link
            href="#benefits"
            className="flex items-center gap-1.5 text-xs font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>GST Guide</span>
          </Link>

          {/* Login / Signup CTA Button */}
          <Link
            href="/userPage"
            className="flex items-center gap-1.5 bg-[#0284c7] hover:bg-[#0077e6] text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-sm hover:shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Login / Signup</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#041d42] border-t border-[#0d3b7e] px-4 pt-2.5 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <Link
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 text-xs font-medium text-blue-100 hover:text-white hover:bg-white/10 px-2.5 py-2 rounded-lg"
          >
            <UserPlus className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>New User Registration</span>
          </Link>
          <Link
            href="#benefits"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 text-xs font-medium text-blue-100 hover:text-white hover:bg-white/10 px-2.5 py-2 rounded-lg"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>GST Guide &amp; Documentation</span>
          </Link>
          <div className="pt-1.5">
            <Link
              href="/userPage"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 bg-[#0284c7] hover:bg-[#0077e6] text-white font-semibold text-xs px-4 py-2 rounded-lg shadow"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login / Signup</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
