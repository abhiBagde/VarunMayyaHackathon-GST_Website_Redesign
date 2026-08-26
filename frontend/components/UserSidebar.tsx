"use client";

import React, { useState } from "react";
import {
  Building2,
  MapPin,
  ShieldCheck,
  Wallet,
  ArrowUpRight,
  PlusCircle,
  Copy,
  Check,
  Activity,
  Award,
  CreditCard,
  FileCheck2,
  TrendingUp,
  ExternalLink,
  QrCode,
  FileText,
} from "lucide-react";

export default function UserSidebar() {
  const [copied, setCopied] = useState(false);

  const gstNumber = "27AAACS1429B1Z8";

  const handleCopyGstin = () => {
    navigator.clipboard.writeText(gstNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="space-y-4">
      
      {/* 1. Taxpayer Profile Card */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-xs relative overflow-hidden">
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#072a5e] via-[#0284c7] to-[#85b6ee]" />

        <div className="space-y-3 pt-0.5">
          {/* Business Header */}
          <div className="flex items-start gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#eef6fc] border border-[#85b6ee]/60 text-[#072a5e] flex items-center justify-center font-black text-sm shadow-xs shrink-0">
              ST
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
                <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">
                  Regular
                </span>
              </div>
              <h3 className="text-xs font-bold text-[#072a5e] leading-snug mt-0.5 truncate" title="Sharma Textiles & Handlooms">
                Sharma Textiles &amp; Handlooms
              </h3>
              <p className="text-[10px] text-slate-500 truncate">
                Satish Chandra Sharma (Prop.)
              </p>
            </div>
          </div>

          {/* GSTIN Copy Box */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-2 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">GSTIN Number</p>
              <p className="text-[11px] font-mono font-bold text-[#072a5e] tracking-wider">{gstNumber}</p>
            </div>
            <button
              type="button"
              onClick={handleCopyGstin}
              className="p-1 rounded-md hover:bg-slate-200 text-slate-500 hover:text-[#072a5e] transition-colors"
              title="Copy GSTIN"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Business Details List */}
          <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-2">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3 h-3 text-[#0284c7] shrink-0 mt-0.5" />
              <p className="text-[10px] leading-relaxed text-slate-600">
                Shop No. 42, Main Textile Market, Chandni Chowk, Central Delhi, Delhi - 110006
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[10px] pt-0.5">
              <div className="bg-slate-50 p-1.5 rounded-md border border-slate-100">
                <span className="text-[9px] text-slate-400 block">State Ward</span>
                <span className="font-semibold text-slate-700">Ward 45, Zone 3</span>
              </div>
              <div className="bg-slate-50 p-1.5 rounded-md border border-slate-100">
                <span className="text-[9px] text-slate-400 block">Center Range</span>
                <span className="font-semibold text-slate-700">Range 12, Div IV</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. GST Compliance Health Meter */}
      <div className="bg-gradient-to-br from-[#072a5e] to-[#0b3b82] text-white rounded-xl p-4 shadow-sm relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#85b6ee]/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#85b6ee]" />
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-200">GST Health Score</h4>
            </div>
            <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-0.5 rounded-full">
              Excellent
            </span>
          </div>

          {/* Health Gauge */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white/20"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-400"
                  strokeDasharray="98, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-xs font-black text-white">98%</span>
              </div>
            </div>

            <div className="space-y-0.5">
              <p className="text-[11px] font-bold text-white">Fully Compliant</p>
              <p className="text-[10px] text-blue-200/90 leading-tight">
                All mandatory returns filed within due date. Zero outstanding demand notices.
              </p>
            </div>
          </div>

          <div className="pt-1.5 border-t border-blue-400/20 grid grid-cols-2 gap-1.5 text-[10px]">
            <div>
              <span className="text-blue-300 block text-[9px]">On-Time Ratio</span>
              <span className="font-bold text-white">100% (Last 12 M)</span>
            </div>
            <div>
              <span className="text-blue-300 block text-[9px]">Pending Fines</span>
              <span className="font-bold text-emerald-300">₹0.00 Nil</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. GST Wallet & Electronic Ledger Balances */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Wallet className="w-3.5 h-3.5 text-[#0284c7]" />
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#072a5e]">GST Wallet Balances</h4>
          </div>
          <span className="text-[9px] text-slate-400">Live Ledgers</span>
        </div>

        {/* Balance 1: Cash Ledger */}
        <div className="bg-[#eef6fc] border border-[#85b6ee]/50 rounded-lg p-2.5 space-y-0.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-600">Electronic Cash Ledger</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <div className="text-base font-extrabold text-[#072a5e]">
            ₹ 48,500<span className="text-[10px] font-normal text-slate-500">.00</span>
          </div>
          <p className="text-[9px] text-slate-500">Available for immediate tax payment</p>
        </div>

        {/* Balance 2: Credit Ledger (ITC) */}
        <div className="bg-[#f0f9ff] border border-blue-200 rounded-lg p-2.5 space-y-0.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-600">Electronic Credit Ledger (ITC)</span>
            <span className="text-[9px] font-bold text-[#0284c7] bg-blue-100 px-1.5 py-0.5 rounded">ITC Ready</span>
          </div>
          <div className="text-base font-extrabold text-[#0284c7]">
            ₹ 1,24,350<span className="text-[10px] font-normal text-slate-500">.00</span>
          </div>
          <p className="text-[9px] text-slate-500">IGST: ₹68.4k • CGST: ₹27.9k • SGST: ₹27.9k</p>
        </div>

        {/* Quick Ledger Action Buttons */}
        <div className="grid grid-cols-2 gap-1.5 pt-0.5">
          <button
            type="button"
            className="flex items-center justify-center gap-1 bg-[#0284c7] hover:bg-[#0077e6] text-white text-[10px] font-semibold py-1.5 px-2.5 rounded-lg shadow-xs transition-colors"
          >
            <PlusCircle className="w-3 h-3" />
            <span>Add Cash</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-[#072a5e] text-[10px] font-semibold py-1.5 px-2.5 rounded-lg transition-colors"
          >
            <FileText className="w-3 h-3 text-[#0284c7]" />
            <span>Ledger Book</span>
          </button>
        </div>
      </div>

      {/* 4. Quick Portal Actions */}
      <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-xs space-y-2.5">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#072a5e]">Quick Actions</h4>
        <div className="space-y-1.5">
          <button
            type="button"
            className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-[#eef6fc] border border-slate-100 text-[11px] font-semibold text-[#072a5e] transition-colors group"
          >
            <div className="flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>File GSTR-1 / 3B Return</span>
            </div>
            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-[#eef6fc] border border-slate-100 text-[11px] font-semibold text-[#072a5e] transition-colors group"
          >
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Download REG-06 Certificate</span>
            </div>
            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#0284c7] transition-colors" />
          </button>
        </div>
      </div>

    </aside>
  );
}
