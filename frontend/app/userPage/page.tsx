"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import UserNavbar from "@/components/UserNavbar";
import UserSidebar from "@/components/UserSidebar";
import UpcomingDueDatesTable from "@/components/UpcomingDueDatesTable";
import AccountActivityStats from "@/components/AccountActivityStats";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";

function UserPageContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>("overview");

  useEffect(() => {
    if (tabParam === "services") {
      setActiveTab("services");
    } else {
      setActiveTab("overview");
    }
  }, [tabParam]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7fb]">
      {/* User Portal Navbar */}
      <UserNavbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Workspace (20% - 80% Split) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb / Greeting Header */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-[#072a5e]">
                {activeTab === "services" ? "Services & Facilities" : "Taxpayer Dashboard"}
              </h1>
              {activeTab === "services" && (
                <span className="text-[10px] font-bold bg-[#eef6fc] text-[#0284c7] border border-[#85b6ee]/50 px-2 py-0.5 rounded-full">
                  8 Available Services
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Welcome back, Satish Chandra Sharma • Last login: 25-Aug-2026 11:20 AM IST
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              Return Period:{" "}
              <strong className="text-[#072a5e]">July 2026 / Q2</strong>
            </span>
          </div>
        </div>

        {/* 20% - 80% Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: 20-25% Area (Sidebar) - Remains fixed */}
          <div className="lg:col-span-3 w-full">
            <UserSidebar />
          </div>

          {/* Right Column: 75-80% Area (Main Dynamic Content) */}
          <div className="lg:col-span-9 w-full space-y-8">
            {activeTab === "services" ? (
              /* Services Selection Menu (8 Items) */
              <ServicesGrid onBackToOverview={() => setActiveTab("overview")} />
            ) : (
              /* Overview Components */
              <>
                <AccountActivityStats />
                <UpcomingDueDatesTable />
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function UserPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-semibold">
            <span className="w-4 h-4 border-2 border-[#0284c7] border-t-transparent rounded-full animate-spin" />
            <span>Loading GST Portal...</span>
          </div>
        </div>
      }
    >
      <UserPageContent />
    </Suspense>
  );
}

