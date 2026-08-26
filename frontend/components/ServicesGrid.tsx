"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FileCheck2,
  Search,
  CreditCard,
  UserCog,
  Coins,
  Truck,
  QrCode,
  Compass,
  Wrench,
  ArrowRight,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Layers,
  ArrowLeft,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  color: string;
  popular?: boolean;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "File Returns",
    description:
      "File monthly, quarterly, and annual GST returns (GSTR-1, GSTR-3B, CMP-08, IFF) and view filing status.",
    icon: FileCheck2,
    tag: "Core Return Filing",
    color: "from-blue-600 to-sky-500",
    popular: true,
    features: [
      "Prepare Online / Offline",
      "GSTR-1 & GSTR-3B",
      "View Filed Returns",
    ],
  },
  {
    id: 2,
    title: "Search Taxpayer",
    description:
      "Verify any GSTIN / UIN, search composition taxpayers, and check legal trade names and filing compliance.",
    icon: Search,
    tag: "Verification",
    color: "from-indigo-600 to-blue-500",
    features: ["Search by GSTIN / UIN", "Search by PAN", "Filing Status Check"],
  },
  {
    id: 3,
    title: "Payments",
    description:
      "Create payment challans (Form GST PMT-06), generate CPIN, track payment status, and manage cash ledger top-ups.",
    icon: CreditCard,
    tag: "Tax Payments",
    color: "from-emerald-600 to-teal-500",
    popular: true,
    features: [
      "Create Payment Challan",
      "Track Payment Status",
      "Payment History (PMT-06)",
    ],
  },
  {
    id: 4,
    title: "User Services",
    description:
      "View or download notices and demand orders, cause lists, view saved forms, certificates, and holiday lists.",
    icon: UserCog,
    tag: "Account Utilities",
    color: "from-purple-600 to-indigo-500",
    features: [
      "View Notices and Orders",
      "Download Certificates",
      "Grievance / Feedback",
    ],
  },
  {
    id: 5,
    title: "Refunds",
    description:
      "Apply for GST refunds (Form RFD-01), track refund application status, and view refund sanction orders.",
    icon: Coins,
    tag: "Claims & ITC",
    color: "from-amber-500 to-orange-500",
    features: [
      "Application for Refund (RFD-01)",
      "Track Application Status",
      "Saved Applications",
    ],
  },
  {
    id: 6,
    title: "E-Way Bill System",
    description:
      "Generate, update, and manage electronic waybills for movement and interstate consignment of goods.",
    icon: Truck,
    tag: "Logistics & Transport",
    color: "from-sky-600 to-cyan-500",
    features: [
      "Generate E-Way Bill",
      "Consolidated EWB",
      "Update Vehicle Details",
    ],
  },
  {
    id: 7,
    title: "E-Invoice",
    description:
      "Direct interface for Invoice Registration Portal (IRP) to generate unique IRN and QR codes for B2B supplies.",
    icon: QrCode,
    tag: "B2B Billing",
    color: "from-violet-600 to-purple-500",
    features: [
      "IRN Generation Portal",
      "Verify Signed E-Invoice",
      "Bulk JSON Upload",
    ],
  },
  {
    id: 8,
    title: "Track Application Status",
    description:
      "Track real-time status of GST registration, amendment, core field modification, or cancellation requests using ARN/SRN.",
    icon: Compass,
    tag: "Status Audit",
    color: "from-rose-500 to-pink-500",
    features: ["Track by ARN", "Track by SRN", "Track Clarifications (REG-04)"],
  },
  {
    id: 9,
    title: "ITC Resolution Center",
    description: "Resolve any mistakes related to ITC filing.",
    icon: Wrench,
    tag: "ITC Corrections",
    color: "from-teal-600 to-cyan-500",
    features: [
      "Rectify ITC Claims",
      "Reclaim Rejected ITC",
      "Track Resolution Status",
    ],
  },
];

interface ServicesGridProps {
  onBackToOverview?: () => void;
}

export default function ServicesGrid({ onBackToOverview }: ServicesGridProps) {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (title: string) => {
    if (title === "ITC Resolution Center") {
      router.push("/userPage/ITCResolution");
      return;
    }
    setSelectedService(title);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#0284c7]" />
              <h2 className="text-xl font-bold text-[#072a5e]">
                Taxpayer Services &amp; Facilities
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Select a service below to access return filing, tax payments, e-way bills, refunds, or verification utilities.
            </p>
          </div>

          {onBackToOverview && (
            <button
              type="button"
              onClick={onBackToOverview}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:text-[#072a5e] bg-[#eef6fc] hover:bg-blue-100 px-3.5 py-2 rounded-xl border border-[#85b6ee]/50 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </button>
          )}
        </div>
      </div> */}

      {/* 8 Services Grid (3-4 items per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.title)}
              className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#85b6ee] transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Gradient on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284c7] to-[#85b6ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-3">
                {/* Header row with Icon and Tag */}
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#eef6fc] group-hover:bg-[#0284c7] border border-[#85b6ee]/50 group-hover:border-[#0284c7] text-[#0284c7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {service.popular && (
                      <span className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                        Top
                      </span>
                    )}
                    <span className="text-[9px] font-bold text-[#072a5e] bg-slate-100 group-hover:bg-blue-50 px-2 py-0.5 rounded-md truncate max-w-[100px]">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#072a5e] group-hover:text-[#0284c7] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-snug line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="pt-1 flex flex-wrap gap-1">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#0284c7] group-hover:underline">
                  Launch Portal
                </span>
                <div className="w-6 h-6 rounded-md bg-[#eef6fc] group-hover:bg-[#0284c7] text-[#0284c7] group-hover:text-white flex items-center justify-center transition-all duration-200 transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Service Feedback Alert */}
      {selectedService && (
        <div className="bg-[#eef6fc] border border-[#85b6ee] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#072a5e]">
                Opening {selectedService}...
              </p>
              <p className="text-[11px] text-slate-500">
                Connected with GSTN Core Engine (v4.2). Taxpayer session
                authenticated.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSelectedService(null)}
            className="text-xs font-semibold text-[#0284c7] hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
