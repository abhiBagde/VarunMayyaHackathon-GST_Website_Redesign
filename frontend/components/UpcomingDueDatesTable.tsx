"use client";

import React, { useState } from "react";
import { Download, Info, Calendar, Clock, CheckCircle2 } from "lucide-react";

interface ReturnDueItem {
  code: string;
  period: string;
  date: string;
  hasInfo?: boolean;
  infoText?: string;
  badge?: string;
}

export default function UpcomingDueDatesTable() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
      
      {/* Header with Title and Download PDF */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#0284c7]" />
            <h3 className="text-xl font-bold text-[#072a5e]">
              Upcoming Due Dates
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Statutory calendar for filing GST returns and statements for Tax Period July / Q2 2026
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownloadPdf}
          className="inline-flex items-center gap-2 bg-[#eef6fc] hover:bg-[#0284c7] text-[#072a5e] hover:text-white border border-[#85b6ee]/60 hover:border-[#0284c7] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs group"
        >
          <Download className="w-4 h-4 text-[#0284c7] group-hover:text-white transition-colors" />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Table Container - matching the reference image layout and structure */}
      <div className="overflow-x-auto rounded-xl border border-blue-200/90 shadow-xs">
        <table className="w-full text-left border-collapse min-w-[700px]">
          
          {/* Table Header */}
          <thead>
            <tr className="bg-[#eef6fc] text-[#072a5e] border-b border-blue-200">
              <th className="py-3.5 px-4 font-bold text-sm border-r border-blue-200 w-1/4">
                Monthly
              </th>
              <th className="py-3.5 px-4 font-bold text-sm border-r border-blue-200 w-1/4">
                Quarterly
              </th>
              <th
                colSpan={2}
                className="py-3.5 px-4 font-bold text-sm text-center w-2/4"
              >
                Other Due Dates
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-blue-100 text-xs text-slate-700 bg-white">
            
            {/* ROW 1 */}
            <tr className="hover:bg-blue-50/40 transition-colors">
              {/* Monthly */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  GSTR-3B (Jul, 2026)
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <span className="font-medium">Aug 20th, 2026</span>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip("gstr3b_m")}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="text-[#0284c7] hover:text-[#072a5e] p-0.5 relative"
                    aria-label="More Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                    {activeTooltip === "gstr3b_m" && (
                      <div className="absolute left-0 bottom-full mb-1 w-52 bg-slate-900 text-white text-[11px] p-2 rounded-lg shadow-xl z-50">
                        Monthly return of inward &amp; outward supplies and tax payment for July 2026.
                      </div>
                    )}
                  </button>
                </div>
              </td>

              {/* Quarterly */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  GSTR-3B (Jul-Sep, 2026)
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <span className="font-medium">Oct 22nd, 24th, 2026</span>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip("gstr3b_q")}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="text-[#0284c7] hover:text-[#072a5e] p-0.5 relative"
                    aria-label="More Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                    {activeTooltip === "gstr3b_q" && (
                      <div className="absolute left-0 bottom-full mb-1 w-56 bg-slate-900 text-white text-[11px] p-2 rounded-lg shadow-xl z-50">
                        Category 1 states on Oct 22nd, Category 2 states on Oct 24th under QRMP scheme.
                      </div>
                    )}
                  </button>
                </div>
              </td>

              {/* Other Due Dates - Col 1 */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1 w-1/4">
                <div className="font-semibold text-slate-800">
                  GSTR-5 (Jul, 2026)
                </div>
                <div className="text-slate-600 font-medium">
                  Aug 13th, 2026
                </div>
              </td>

              {/* Other Due Dates - Col 2 */}
              <td className="py-4 px-4 align-top space-y-1 w-1/4">
                <div className="font-semibold text-slate-800">
                  GSTR-5A (Jul, 2026)
                </div>
                <div className="text-slate-600 font-medium">
                  Aug 20th, 2026
                </div>
              </td>
            </tr>

            {/* ROW 2 */}
            <tr className="hover:bg-blue-50/40 transition-colors">
              {/* Monthly */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  GSTR-1 (Jul, 2026)
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <span className="font-medium">Aug 11th, 2026</span>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip("gstr1_m")}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="text-[#0284c7] hover:text-[#072a5e] p-0.5 relative"
                    aria-label="More Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                    {activeTooltip === "gstr1_m" && (
                      <div className="absolute left-0 bottom-full mb-1 w-52 bg-slate-900 text-white text-[11px] p-2 rounded-lg shadow-xl z-50">
                        Details of outward supplies of goods and services for July 2026.
                      </div>
                    )}
                  </button>
                </div>
              </td>

              {/* Quarterly */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  GSTR-1 (Jul-Sep, 2026)
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <span className="font-medium">Oct 13th, 2026</span>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip("gstr1_q")}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="text-[#0284c7] hover:text-[#072a5e] p-0.5 relative"
                    aria-label="More Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                    {activeTooltip === "gstr1_q" && (
                      <div className="absolute left-0 bottom-full mb-1 w-56 bg-slate-900 text-white text-[11px] p-2 rounded-lg shadow-xl z-50">
                        Quarterly outward supplies statement under QRMP scheme for Q2 (Jul-Sep 2026).
                      </div>
                    )}
                  </button>
                </div>
              </td>

              {/* Other Due Dates - Col 1 */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  GSTR-6 (Jul, 2026)
                </div>
                <div className="text-slate-600 font-medium">
                  Aug 13th, 2026
                </div>
              </td>

              {/* Other Due Dates - Col 2 */}
              <td className="py-4 px-4 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  GSTR-7 (Jul, 2026)
                </div>
                <div className="text-slate-600 font-medium">
                  Aug 10th, 2026
                </div>
              </td>
            </tr>

            {/* ROW 3 */}
            <tr className="hover:bg-blue-50/40 transition-colors">
              {/* Monthly */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  IFF (Optional) (Jul,2026)
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <span className="font-medium">Aug 13th, 2026</span>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip("iff_m")}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="text-[#0284c7] hover:text-[#072a5e] p-0.5 relative"
                    aria-label="More Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                    {activeTooltip === "iff_m" && (
                      <div className="absolute left-0 bottom-full mb-1 w-52 bg-slate-900 text-white text-[11px] p-2 rounded-lg shadow-xl z-50">
                        Invoice Furnishing Facility to upload B2B invoices for Month 1 of Quarter.
                      </div>
                    )}
                  </button>
                </div>
              </td>

              {/* Quarterly */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  CMP-08 (Jul-Sep, 2026)
                </div>
                <div className="text-slate-600 font-medium">
                  Oct 18th, 2026
                </div>
              </td>

              {/* Other Due Dates - Col 1 */}
              <td className="py-4 px-4 border-r border-blue-100 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  GSTR-8 (Jul, 2026)
                </div>
                <div className="text-slate-600 font-medium">
                  Aug 10th, 2026
                </div>
              </td>

              {/* Other Due Dates - Col 2 */}
              <td className="py-4 px-4 align-top space-y-1">
                <div className="font-semibold text-slate-800">
                  RFD-10
                </div>
                <div className="text-slate-600 font-normal leading-relaxed text-[11px]">
                  2 years from the last day of the quarter in which supply was received
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Helpful Status Legend Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>GSTR-1 Filed</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>GSTR-3B Due in 5 days</span>
          </span>
        </div>
        <div className="text-[11px] text-slate-400">
          Last synchronized with GSTN Server: Today, 11:45 AM IST
        </div>
      </div>

    </div>
  );
}
