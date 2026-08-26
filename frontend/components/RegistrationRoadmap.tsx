"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  FileText,
  KeyRound,
  MailCheck,
  Hash,
  Building,
  Users,
  MapPinned,
  PackageCheck,
  Fingerprint,
  ClipboardCheck,
  Send,
  FileCheck,
  HelpCircle,
  Award,
  Sparkles,
  ArrowRight,
  Download,
  CheckSquare,
} from "lucide-react";

interface StepItem {
  number: number;
  title: string;
  description: string;
  phase: string;
  icon: React.ElementType;
  documentRequired?: string;
}

const stepsData: StepItem[] = [
  {
    number: 1,
    title: "Check if you need GST registration",
    description:
      "Verify whether your turnover exceeds the threshold (₹40 Lakhs/₹20 Lakhs for goods, ₹20 Lakhs/₹10 Lakhs for services) or if you engage in interstate or e-commerce sales.",
    phase: "Phase 1: Pre-Registration & TRN",
    icon: HelpCircle,
    documentRequired: "Turnover Assessment",
  },
  {
    number: 2,
    title: "Keep your required documents ready",
    description:
      "Gather scanned soft copies of PAN card, Aadhaar, business address proof, bank proof, partner/director IDs, and passport size photographs.",
    phase: "Phase 1: Pre-Registration & TRN",
    icon: FileText,
    documentRequired: "PAN, Aadhaar & Photos",
  },
  {
    number: 3,
    title: "Start a new registration on the GST portal",
    description:
      "Visit the official GST Portal (gst.gov.in), navigate to Services > Registration > New Registration, and choose Taxpayer as the user type.",
    phase: "Phase 1: Pre-Registration & TRN",
    icon: FileCheck,
    documentRequired: "Portal Access",
  },
  {
    number: 4,
    title: "Verify your mobile number and email with OTP",
    description:
      "Enter your legal business name, PAN, primary email address, and mobile number. Validate with two separate one-time passwords (OTPs).",
    phase: "Phase 1: Pre-Registration & TRN",
    icon: MailCheck,
    documentRequired: "Mobile & Email OTP",
  },
  {
    number: 5,
    title: "Get your Temporary Reference Number (TRN)",
    description:
      "Upon successful OTP validation, a 15-digit TRN is generated and emailed/SMSed to you. Use this TRN to log in and complete Part-B within 15 days.",
    phase: "Phase 1: Pre-Registration & TRN",
    icon: KeyRound,
    documentRequired: "15-digit TRN Generated",
  },
  {
    number: 6,
    title: "Fill in your business details",
    description:
      "Enter trade name, constitution of business (Proprietorship, Partnership, Pvt Ltd), district, sector/circle jurisdiction, and reason for registration.",
    phase: "Phase 2: Business & Owner Details",
    icon: Building,
    documentRequired: "Constitution Proof / COI",
  },
  {
    number: 7,
    title: "Add owner, partner, or director details",
    description:
      "Provide personal information, designation, PAN, DIN, Aadhaar, residential address, and upload photos of all promoters, partners, or directors.",
    phase: "Phase 2: Business & Owner Details",
    icon: Users,
    documentRequired: "Promoter KYC & Photos",
  },
  {
    number: 8,
    title: "Enter your business address and upload proof",
    description:
      "Specify principal place of business, nature of premises (Owned/Rented/Shared), upload Electricity Bill, Rent Agreement, Consent Letter or Municipal Khata.",
    phase: "Phase 2: Business & Owner Details",
    icon: MapPinned,
    documentRequired: "Rent Agreement / Utility Bill",
  },
  {
    number: 9,
    title: "Add your goods or services",
    description:
      "Search and add top 5 HSN (Harmonized System of Nomenclature) codes for physical goods or SAC (Services Accounting Code) for service offerings.",
    phase: "Phase 3: Goods/Services & KYC",
    icon: PackageCheck,
    documentRequired: "Top 5 HSN/SAC Codes",
  },
  {
    number: 10,
    title: "Complete Aadhaar verification",
    description:
      "Opt for Aadhaar authentication for promoters and primary authorized signatory to expedite registration without physical site verification.",
    phase: "Phase 3: Goods/Services & KYC",
    icon: Fingerprint,
    documentRequired: "Aadhaar e-KYC Link",
  },
  {
    number: 11,
    title: "Review all your information",
    description:
      "Cross-check all uploaded documents, spellings, postal codes, and bank account details on the comprehensive review summary screen.",
    phase: "Phase 3: Goods/Services & KYC",
    icon: ClipboardCheck,
    documentRequired: "Draft Form Summary",
  },
  {
    number: 12,
    title: "Sign and submit your application",
    description:
      "Submit application using DSC (Digital Signature Certificate) for companies/LLPs or EVC (Electronic Verification Code via OTP) for proprietorships.",
    phase: "Phase 4: Submission & GSTIN Grant",
    icon: Send,
    documentRequired: "DSC / Aadhaar OTP Sign",
  },
  {
    number: 13,
    title: "Receive your Application Reference Number (ARN)",
    description:
      "Immediately receive your ARN via email and SMS to track the real-time processing status of your application with tax officers.",
    phase: "Phase 4: Submission & GSTIN Grant",
    icon: Hash,
    documentRequired: "ARN Tracking Number",
  },
  {
    number: 14,
    title: "Respond to any clarification requests",
    description:
      "If the tax officer issues a query (Form GST REG-03), submit required documents or clarifications online (Form GST REG-04) within 7 working days.",
    phase: "Phase 4: Submission & GSTIN Grant",
    icon: HelpCircle,
    documentRequired: "Clarification / REG-04 (if asked)",
  },
  {
    number: 15,
    title: "Get your GSTIN (GST Number)",
    description:
      "Congratulations! Your 15-digit GSTIN is issued along with the official GST Registration Certificate (Form GST REG-06) downloadable from portal.",
    phase: "Phase 4: Submission & GSTIN Grant",
    icon: Award,
    documentRequired: "GSTIN Certificate (REG-06)",
  },
];

const requiredDocsList = [
  {
    name: "PAN Card",
    desc: "PAN of Business Entity or Proprietor",
    badge: "Mandatory",
  },
  {
    name: "Aadhaar Card",
    desc: "Aadhaar of Proprietor / Partners / Directors",
    badge: "Mandatory",
  },
  {
    name: "Address Proof",
    desc: "Electricity Bill / Municipal Tax Receipt / Rent Agreement",
    badge: "Mandatory",
  },
  {
    name: "Bank Account Proof",
    desc: "Cancelled Cheque or First Page of Bank Passbook/Statement",
    badge: "Mandatory",
  },
  {
    name: "Digital Photos",
    desc: "Passport size photos of owners/authorized signatories",
    badge: "Mandatory",
  },
  {
    name: "Authorization Letter",
    desc: "Board Resolution or Letter of Authorisation for Signatory",
    badge: "If Applicable",
  },
];

export default function RegistrationRoadmap() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const phases = [
    { key: "all", label: "All 15 Steps" },
    {
      key: "Phase 1: Pre-Registration & TRN",
      label: "1. Pre-Registration & TRN",
    },
    {
      key: "Phase 2: Business & Owner Details",
      label: "2. Business & Owner Details",
    },
    {
      key: "Phase 3: Goods/Services & KYC",
      label: "3. Goods, Services & e-KYC",
    },
    {
      key: "Phase 4: Submission & GSTIN Grant",
      label: "4. Submission & GSTIN",
    },
  ];

  const filteredSteps =
    selectedFilter === "all"
      ? stepsData
      : stepsData.filter((s) => s.phase === selectedFilter);

  return (
    <section id="roadmap" className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#0284c7]/10 border border-[#0284c7]/25 text-[#072a5e] font-semibold text-[11px] sm:text-xs px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Interactive Onboarding Roadmap</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#072a5e] tracking-tight">
            Simple Steps to Get a GST Number
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Follow this clear, step-by-step roadmap to complete your GST
            application smoothly and receive your 15-digit GSTIN without hassle.
          </p>
        </div>

        {/* Required Documents Checklist Card */}
        <div className="bg-[#eef6fc] border border-[#85b6ee]/50 rounded-xl p-4 sm:p-6 mb-10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#85b6ee]/40">
            <div>
              <div className="flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-[#0284c7]" />
                <h3 className="text-base font-bold text-[#072a5e]">
                  Keep Your Required Documents Ready
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Having clear soft copies (PDF/JPEG &lt; 1MB) ready will speed up
                your application.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#072a5e] bg-white px-3 py-1 rounded-full border border-blue-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Step 2 Checklist</span>
            </div>
          </div>

          {/* Docs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {requiredDocsList.map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-3 border border-slate-200/80 shadow-xs flex items-start gap-2.5 hover:border-[#0284c7] transition-all"
              >
                <div className="w-6 h-6 rounded-md bg-[#eef6fc] text-[#0284c7] flex items-center justify-center shrink-0 font-bold text-[10px]">
                  0{i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-bold text-[#072a5e] truncate">
                      {doc.name}
                    </p>
                    <span
                      className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${doc.badge === "Mandatory" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-700"}`}
                    >
                      {doc.badge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {phases.map((p) => (
            <button
              key={p.key}
              onClick={() => setSelectedFilter(p.key)}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 ${
                selectedFilter === p.key
                  ? "bg-[#072a5e] text-white shadow-sm shadow-blue-900/20 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Roadmap Timeline List */}
        <div className="relative">
          {/* Vertical central connector line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#85b6ee] via-[#0284c7] to-[#072a5e] rounded-full" />

          {/* Vertical line on mobile */}
          <div className="lg:hidden absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#85b6ee] via-[#0284c7] to-[#072a5e] rounded-full" />

          <div className="space-y-5 lg:space-y-8">
            {filteredSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              const cardContent = (alignRightOnDesktop: boolean) => (
                <div className="w-full max-w-lg bg-[#f8fbfe] hover:bg-white border border-slate-200 hover:border-[#85b6ee] rounded-xl p-4 shadow-xs hover:shadow-md transition-all duration-300 group">
                  {/* Top Step Meta */}
                  <div
                    className={`flex items-center gap-1.5 mb-2 ${
                      alignRightOnDesktop ? "lg:flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <span className="text-[10px] font-bold text-[#0284c7] bg-[#eef6fc] px-2.5 py-0.5 rounded-full border border-[#85b6ee]/50">
                      Step {step.number} of 15
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                      {step.phase}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm sm:text-base font-bold text-[#072a5e] group-hover:text-[#0284c7] transition-colors mb-1.5">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Document or Key output tag */}
                  {step.documentRequired && (
                    <div
                      className={`flex items-center gap-1.5 pt-2 border-t border-slate-100 text-[10px] font-medium text-slate-500 ${
                        alignRightOnDesktop ? "lg:justify-end" : "justify-start"
                      }`}
                    >
                      <span className="text-slate-400">
                        Key Output / Requirement:
                      </span>
                      <span className="text-[#072a5e] font-semibold bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100">
                        {step.documentRequired}
                      </span>
                    </div>
                  )}
                </div>
              );

              return (
                <div key={step.number}>
                  {/* Desktop view (3-column grid: Left Card / Center Icon / Right Card) */}
                  <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6 relative">
                    {/* Left column */}
                    <div className="w-full flex justify-end text-left lg:text-right">
                      {isEven && cardContent(true)}
                    </div>

                    {/* Center Icon Node (always precisely on the center line) */}
                    <div className="relative z-10 flex items-center justify-center shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#072a5e] to-[#0284c7] text-white shadow-md shadow-blue-700/25 ring-2 ring-white">
                      <Icon className="w-5 h-5" />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#85b6ee] text-[#072a5e] text-[10px] font-black flex items-center justify-center shadow">
                        {step.number}
                      </span>
                    </div>

                    {/* Right column */}
                    <div className="w-full flex justify-start text-left">
                      {!isEven && cardContent(false)}
                    </div>
                  </div>

                  {/* Mobile view (Linear left-aligned timeline) */}
                  <div className="flex lg:hidden items-start gap-3 relative">
                    <div className="relative z-10 flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#072a5e] to-[#0284c7] text-white shadow-md shadow-blue-700/25 ring-2 ring-white mt-1">
                      <Icon className="w-5 h-5" />
                      <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#85b6ee] text-[#072a5e] text-[9px] font-black flex items-center justify-center shadow">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">{cardContent(false)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Celebration Box */}
        <div className="mt-10 bg-[#eef6fc] border-2 border-dashed border-[#0284c7]/40 rounded-xl p-5 text-center space-y-2.5 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#0284c7] text-white flex items-center justify-center mx-auto shadow-sm">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-[#072a5e]">
            Congratulations on your GSTIN!
          </h3>
          <p className="text-xs text-slate-600">
            Once your application is approved by the tax officer, download your
            official GST Registration Certificate (Form GST REG-06) and display
            it proudly at your principal place of business.
          </p>
          <div className="pt-1.5">
            <a
              href="https://reg.gst.gov.in/registration/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#072a5e] hover:bg-[#041d42] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all"
            >
              <span>Visit Official Registration Portal</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#85b6ee]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
