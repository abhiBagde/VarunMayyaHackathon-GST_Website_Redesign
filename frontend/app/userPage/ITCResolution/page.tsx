"use client";

import React, { useState } from "react";
import Link from "next/link";
import UserNavbar from "@/components/UserNavbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  AlertTriangle,
  FileText,
  Wrench,
  BellRing,
  FilePenLine,
  Upload,
  Route,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
  Building2,
  IndianRupee,
} from "lucide-react";

type ActionKey = "notify" | "correct" | "evidence" | "track";

interface ActionFeedback {
  title: string;
  message: string;
}

export default function ITCResolutionPage() {
  const [activeAction, setActiveAction] = useState<ActionKey | null>(null);
  const [feedback, setFeedback] = useState<ActionFeedback | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleAction = (key: ActionKey, title: string, message: string) => {
    setActiveAction(key);
    setFeedback({ title, message });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
      setActiveAction("evidence");
      setFeedback({
        title: "Evidence Uploaded Successfully",
        message: `"${file.name}" has been attached to case ITC-RES-2026-00451. Your tax credit remains protected while verification is in progress.`,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7fb]">
      <UserNavbar activeTab="services" />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Back Navigation */}
        <div>
          <Link
            href="/userPage?tab=services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:text-[#072a5e] bg-white hover:bg-blue-50 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-[#85b6ee] transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#072a5e] text-white flex items-center justify-center shadow-md shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#072a5e] leading-tight">
              ITC Resolution Center
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Resolve input tax credit mismatches without losing your rightful
              credit.
            </p>
          </div>
        </div>

        {/* Invoice Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 space-y-4">
            {/* Invoice Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#0284c7]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Invoice
                  </p>
                  <p className="text-base font-black text-[#072a5e] font-mono">
                    INV-2026-451
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-bold text-amber-700 bg-amber-50 border border-amber-300 px-3 py-1.5 rounded-full">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                Status: Mismatch
              </span>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Problem Statement */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Problem Detected
              </p>
              <p className="text-sm font-semibold text-slate-800 mt-1.5 leading-snug">
                Supplier entered incorrect GSTIN.
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="bg-white rounded-lg border border-amber-200 px-3 py-2">
                  <p className="text-slate-400 font-semibold uppercase text-[9px] tracking-wide">
                    GSTIN on Invoice
                  </p>
                  <p className="font-mono font-bold text-rose-600 mt-0.5 line-through decoration-rose-400">
                    27AABCU9603R1ZM
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-emerald-200 px-3 py-2">
                  <p className="text-slate-400 font-semibold uppercase text-[9px] tracking-wide">
                    Your Registered GSTIN
                  </p>
                  <p className="font-mono font-bold text-emerald-700 mt-0.5">
                    27AAEC S1234F1Z5
                  </p>
                </div>
              </div>
            </div>

            {/* ITC Protection Banner — credit is NOT silently removed */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-800 flex items-center gap-1.5 flex-wrap">
                  Your ITC of
                  <span className="inline-flex items-center font-black text-emerald-700 bg-white border border-emerald-300 px-2 py-0.5 rounded-md">
                    <IndianRupee className="w-3 h-3" />
                    24,600
                  </span>
                  is SAFE
                </p>
                <p className="text-[11px] text-emerald-700/90 mt-1 leading-relaxed">
                  This credit has been moved to{" "}
                  <strong>&ldquo;ITC Pending Resolution&rdquo;</strong> in your
                  electronic credit ledger — it has{" "}
                  <strong>not been reversed or debited</strong>. It stays fully
                  protected while you resolve this mismatch and will be
                  restored to your available balance automatically once
                  resolved.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resolution Options */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-[#072a5e] uppercase tracking-wider flex items-center gap-2">
            <Route className="w-4 h-4 text-[#0284c7]" />
            Your Options
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Notify Supplier */}
            <button
              type="button"
              onClick={() =>
                handleAction(
                  "notify",
                  "Supplier Notified",
                  "A mismatch intimation has been sent to the supplier via the GSTN portal and registered email. Your ITC remains protected — no credit has been reduced."
                )
              }
              className={`text-left bg-white rounded-xl p-4 border shadow-xs hover:shadow-md transition-all group ${
                activeAction === "notify"
                  ? "border-[#0284c7] ring-1 ring-[#0284c7]"
                  : "border-slate-200/90 hover:border-[#85b6ee]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#eef6fc] group-hover:bg-[#0284c7] text-[#0284c7] group-hover:text-white border border-[#85b6ee]/50 flex items-center justify-center transition-all shrink-0">
                  <BellRing className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#072a5e] group-hover:text-[#0284c7] transition-colors">
                    Notify Supplier
                  </p>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Send an intimation about the incorrect GSTIN on this
                    invoice.
                  </p>
                </div>
                {activeAction === "notify" && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </div>
            </button>

            {/* Request Correction */}
            <button
              type="button"
              onClick={() =>
                handleAction(
                  "correct",
                  "Correction Requested",
                  "A GSTR-1 amendment request has been raised against INV-2026-451. The supplier must re-issue with the correct GSTIN. Your ITC stays in 'Pending Resolution' — it will not be reversed."
                )
              }
              className={`text-left bg-white rounded-xl p-4 border shadow-xs hover:shadow-md transition-all group ${
                activeAction === "correct"
                  ? "border-[#0284c7] ring-1 ring-[#0284c7]"
                  : "border-slate-200/90 hover:border-[#85b6ee]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#eef6fc] group-hover:bg-[#0284c7] text-[#0284c7] group-hover:text-white border border-[#85b6ee]/50 flex items-center justify-center transition-all shrink-0">
                  <FilePenLine className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#072a5e] group-hover:text-[#0284c7] transition-colors">
                    Request Correction
                  </p>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Ask the supplier to amend GSTR-1 and re-issue the invoice.
                  </p>
                </div>
                {activeAction === "correct" && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </div>
            </button>

            {/* Upload Supporting Evidence */}
            <div
              className={`bg-white rounded-xl p-4 border shadow-xs transition-all ${
                activeAction === "evidence"
                  ? "border-[#0284c7] ring-1 ring-[#0284c7]"
                  : "border-slate-200/90"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#eef6fc] text-[#0284c7] border border-[#85b6ee]/50 flex items-center justify-center shrink-0">
                  <Upload className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#072a5e]">
                    Upload Supporting Evidence
                  </p>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Attach delivery notes, payment proof or contracts (PDF/JPG,
                    max 5 MB).
                  </p>
                </div>
                {activeAction === "evidence" && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </div>
              <label className="mt-3 flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-dashed border-[#85b6ee] bg-[#eef6fc]/50 hover:bg-[#eef6fc] text-[11px] font-bold text-[#0284c7] cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                {uploadedFile ? "Replace File" : "Choose File"}
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
              {uploadedFile && (
                <p className="mt-2 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-1 truncate">
                  ✓ {uploadedFile}
                </p>
              )}
            </div>

            {/* Track Resolution */}
            <button
              type="button"
              onClick={() =>
                handleAction(
                  "track",
                  "Resolution Tracker",
                  "Case ITC-RES-2026-00451 is open with the supplier and GSTN. Your ₹24,600 ITC is safely parked under 'Pending Resolution' and will be auto-restored on closure."
                )
              }
              className={`text-left bg-white rounded-xl p-4 border shadow-xs hover:shadow-md transition-all group ${
                activeAction === "track"
                  ? "border-[#0284c7] ring-1 ring-[#0284c7]"
                  : "border-slate-200/90 hover:border-[#85b6ee]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#eef6fc] group-hover:bg-[#0284c7] text-[#0284c7] group-hover:text-white border border-[#85b6ee]/50 flex items-center justify-center transition-all shrink-0">
                  <Route className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#072a5e] group-hover:text-[#0284c7] transition-colors">
                    Track Resolution
                  </p>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    View live status of case ITC-RES-2026-00451.
                  </p>
                </div>
                {activeAction === "track" && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Resolution Timeline (shown when Track Resolution is clicked) */}
        {activeAction === "track" && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6 animate-in fade-in slide-in-from-bottom-2">
            <h3 className="text-sm font-bold text-[#072a5e] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0284c7]" />
              Case Timeline — ITC-RES-2026-00451
            </h3>
            <ol className="mt-4 space-y-4">
              {[
                {
                  label: "Mismatch detected in GSTR-2B reconciliation",
                  time: "20-Aug-2026, 10:12 AM",
                  done: true,
                },
                {
                  label: "ITC moved to 'Pending Resolution' — credit protected",
                  time: "20-Aug-2026, 10:12 AM",
                  done: true,
                },
                {
                  label: "Supplier notified & correction requested",
                  time: "Pending supplier action",
                  done: false,
                },
                {
                  label: "Invoice re-issued with correct GSTIN & ITC restored",
                  time: "Awaiting supplier amendment",
                  done: false,
                },
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {step.done ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  ) : (
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  )}
                  <div>
                    <p
                      className={`text-xs font-semibold ${
                        step.done ? "text-slate-800" : "text-slate-500"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {step.time}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Action Feedback Alert */}
        {feedback && (
          <div className="bg-[#eef6fc] border border-[#85b6ee] rounded-2xl p-4 sm:p-5 flex items-start justify-between gap-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#072a5e]">
                  {feedback.title}
                </p>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {feedback.message}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setFeedback(null)}
              className="text-xs font-semibold text-[#0284c7] hover:underline shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Assurance Footer Note */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pb-2">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            GSTN guarantee: your tax credit is never silently removed — it is
            only held safely until this mismatch is resolved.
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}