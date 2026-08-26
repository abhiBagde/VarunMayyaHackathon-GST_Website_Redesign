"use client";

import React, { useState } from "react";
import {
  FileCheck,
  IndianRupee,
  ShieldAlert,
  Percent,
  ArrowUpRight,
  TrendingUp,
  Download,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Filter,
  BarChart3,
} from "lucide-react";

interface ReturnFilingRecord {
  period: string;
  type: string;
  arn: string;
  date: string;
  taxPaid: string;
  itcClaimed: string;
  status: "Filed" | "Pending" | "Processing";
}

const filingHistory: ReturnFilingRecord[] = [
  {
    period: "Jul 2026",
    type: "GSTR-1",
    arn: "AA2707260198421",
    date: "09-08-2026",
    taxPaid: "₹ 1,42,800",
    itcClaimed: "₹ 84,200",
    status: "Filed",
  },
  {
    period: "Jun 2026",
    type: "GSTR-3B",
    arn: "AA2706260841239",
    date: "18-07-2026",
    taxPaid: "₹ 2,18,400",
    itcClaimed: "₹ 1,12,000",
    status: "Filed",
  },
  {
    period: "Jun 2026",
    type: "GSTR-1",
    arn: "AA2706260312984",
    date: "10-07-2026",
    taxPaid: "₹ 2,18,400",
    itcClaimed: "₹ 1,12,000",
    status: "Filed",
  },
  {
    period: "May 2026",
    type: "GSTR-3B",
    arn: "AA2705260943210",
    date: "19-06-2026",
    taxPaid: "₹ 1,89,650",
    itcClaimed: "₹ 96,400",
    status: "Filed",
  },
  {
    period: "May 2026",
    type: "GSTR-1",
    arn: "AA2705260218734",
    date: "09-06-2026",
    taxPaid: "₹ 1,89,650",
    itcClaimed: "₹ 96,400",
    status: "Filed",
  },
  {
    period: "Apr 2026",
    type: "GSTR-3B",
    arn: "AA2704260751902",
    date: "20-05-2026",
    taxPaid: "₹ 2,05,300",
    itcClaimed: "₹ 1,05,200",
    status: "Filed",
  },
];

export default function AccountActivityStats() {
  const [filterType, setFilterType] = useState<string>("All");

  const filteredHistory =
    filterType === "All"
      ? filingHistory
      : filingHistory.filter((item) => item.type === filterType);

  return (
    <div className="space-y-6">
      
      {/* 1. Statistics Cards Grid (4 KPI Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        
        {/* Card 1: Returns Filed */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-[#85b6ee] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Returns Filed</span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-[#072a5e]">36 / 36</div>
            <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% On-Time Compliance</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Pending: <strong className="text-slate-700">0</strong></span>
            <span>FY 2026-27</span>
          </div>
        </div>

        {/* Card 2: Total Tax Paid */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-[#85b6ee] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Tax Paid</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <IndianRupee className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-[#072a5e]">₹ 18.42 L</div>
            <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold mt-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+14.2% YoY Business Growth</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Cash: <strong className="text-slate-700">₹6.12L</strong></span>
            <span>ITC: <strong className="text-slate-700">₹12.30L</strong></span>
          </div>
        </div>

        {/* Card 3: Total ITC Claimed */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-[#85b6ee] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">ITC Claimed</span>
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Percent className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-[#072a5e]">₹ 6.45 L</div>
            <div className="flex items-center gap-1 text-xs text-blue-600 font-semibold mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>99.8% GSTR-2B Match</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Eligible ITC: <strong className="text-slate-700">100%</strong></span>
            <span>Ineligible: <strong className="text-slate-700">₹0</strong></span>
          </div>
        </div>

        {/* Card 4: Fines & Penalties */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-[#85b6ee] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Fines &amp; Late Fees</span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-emerald-600">₹ 0.00</div>
            <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero Penalties Incurred</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Demands: <strong className="text-slate-700">None</strong></span>
            <span>Interest: <strong className="text-slate-700">₹0</strong></span>
          </div>
        </div>

      </div>

      {/* 2. Detailed Return Filing Activity History Table */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
        
        {/* Table Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#0284c7]" />
              <h3 className="text-xl font-bold text-[#072a5e]">
                Recent Return Filing Activity
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Complete chronological audit trail of all filed GSTR-1, GSTR-3B and acknowledgments
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            {["All", "GSTR-1", "GSTR-3B"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilterType(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === tab
                    ? "bg-white text-[#072a5e] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-[#f8fafc] text-[#072a5e] text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">Tax Period</th>
                <th className="py-3 px-4">Return Type</th>
                <th className="py-3 px-4">ARN (Ref. Number)</th>
                <th className="py-3 px-4">Date of Filing</th>
                <th className="py-3 px-4">Tax Value</th>
                <th className="py-3 px-4">ITC Utilized</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700 bg-white">
              {filteredHistory.map((item, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#072a5e]">
                    {item.period}
                  </td>
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    <span className="inline-block whitespace-nowrap font-semibold text-xs px-2 py-0.5 rounded-md bg-[#eef6fc] text-[#0284c7] border border-[#85b6ee]/50">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-medium text-slate-600">
                    {item.arn}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {item.date}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                    {item.taxPaid}
                  </td>
                  <td className="py-3.5 px-4 inline-block whitespace-nowrap text-slate-600">
                    {item.itcClaimed}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 font-bold text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => alert(`Downloading ACK Receipt for ARN: ${item.arn}`)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0284c7] hover:text-[#072a5e] hover:underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
