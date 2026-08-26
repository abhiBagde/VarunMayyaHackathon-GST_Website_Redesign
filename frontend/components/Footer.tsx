"use client";

import React from "react";
import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#072a5e] text-white pt-16 pb-8 border-t border-[#0d3b7e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid (5 columns matching the reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 pb-12">
          
          {/* Column 1: About GST */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#85b6ee] tracking-wide">
              About GST
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-100/80">
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  GST Council Structure
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  GST History
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Website Policies */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#85b6ee] tracking-wide">
              Website Policies
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-100/80">
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  Website Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  Hyperlink Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Related Sites */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#85b6ee] tracking-wide">
              Related Sites
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-100/80">
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors leading-relaxed block">
                  Central Board of Indirect Taxes and Customs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  State Tax Websites
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  National Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help and Taxpayer Facilities */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#85b6ee] tracking-wide">
              Help and Taxpayer Facilities
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-100/80">
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  System Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  GST Knowledge Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  GST Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  Grievance Nodal Officers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  Free Accounting and Billing Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">
                  GST Suvidha Providers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#85b6ee] tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 text-xs text-blue-100/80">
              <div>
                <p className="text-blue-200/90 font-medium">Help Desk Number:</p>
                <p className="text-sm font-semibold text-white mt-0.5">1800-103-4786</p>
              </div>

              <div>
                <p className="text-blue-200/90 font-medium">Log/Track Your Issue:</p>
                <Link
                  href="#"
                  className="text-xs text-blue-200 hover:text-white hover:underline block mt-0.5 leading-relaxed"
                >
                  Grievance Redressal Portal for GST
                </Link>
              </div>

              {/* Social Media Icons */}
              <div className="pt-2 flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0284c7] flex items-center justify-center text-blue-100 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.8C10.6 0 9 1.6 9 4.667V8z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0284c7] flex items-center justify-center text-blue-100 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0284c7] flex items-center justify-center text-blue-100 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0284c7] flex items-center justify-center text-blue-100 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar matching exact text in reference image */}
        <div className="border-t border-[#0d3b7e] pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-blue-200/80 gap-3 text-center md:text-left">
          <div>
            &copy; 2026-27 Goods and Services Tax Network
          </div>
          <div>
            Site Last Updated on 13-08-2026
          </div>
          <div>
            Designed &amp; Developed by GSTN
          </div>
        </div>

      </div>
    </footer>
  );
}
