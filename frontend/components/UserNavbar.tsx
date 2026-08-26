"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Bell,
  Home,
  Layers,
  FileText,
  BookOpen,
  Newspaper,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  User,
  LogOut,
  Sparkles,
  Menu,
  X,
  CreditCard,
  FileCheck2,
  AlertCircle,
  Truck,
  ArrowRight,
} from "lucide-react";

export const recentNotices = [
  {
    id: 1,
    title: "Advisory on GSTR-1 / IFF filing for July 2026",
    date: "Aug 22, 2026",
    tag: "Filing Advisory",
    unread: true,
    summary:
      "Taxpayers eligible for QRMP scheme may file IFF for July 2026 before the cut-off date.",
  },
  {
    id: 2,
    title: "Enhanced security: Mandatory 2-Factor Authentication (2FA) active",
    date: "Aug 18, 2026",
    tag: "Security",
    unread: true,
    summary:
      "All taxpayers with turnover above ₹20 Lakhs must authenticate via OTP or Authenticator App.",
  },
  {
    id: 3,
    title: "Advisory on IMS (Invoice Management System) for ITC reconciliation",
    date: "Aug 14, 2026",
    tag: "Input Tax Credit",
    unread: false,
    summary:
      "New IMS facility is available to accept, reject or keep pending supplier invoices for August return.",
  },
  {
    id: 4,
    title:
      "System Maintenance window scheduled on 28th Aug 2026 (01:00 AM - 04:00 AM)",
    date: "Aug 10, 2026",
    tag: "Maintenance",
    unread: false,
    summary:
      "GST portal services will be momentarily unavailable during the scheduled database optimization.",
  },
  {
    id: 5,
    title: "Clarification on HSN Code requirement for B2B electronic invoices",
    date: "Aug 05, 2026",
    tag: "Compliance",
    unread: false,
    summary:
      "Mandatory 6-digit HSN reporting guideline for businesses with aggregate turnover above ₹5 Crore.",
  },
];

interface UserNavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function UserNavbar({
  activeTab = "overview",
  onTabChange,
}: UserNavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isNewsActive = pathname === "/userPage/notifications";
  const [notificationsHover, setNotificationsHover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setNotificationsHover(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setNotificationsHover(false);
    }, 250);
  };

  const handleBellClick = (e: React.MouseEvent) => {
    setNotificationsHover(false);
    router.push("/userPage/notifications");
  };

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      router.push(`/userPage?tab=${tab}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#072a5e] text-white shadow-lg border-b border-[#0d3b7e]">
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

        {/* Right Side: Navigation Items */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Home Link */}
          <button
            type="button"
            onClick={() => handleTabClick("overview")}
            className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${activeTab === "overview" && !isNewsActive
                ? "bg-white/20 text-white font-bold shadow-xs"
                : "text-blue-100 hover:text-white hover:bg-white/10"
              }`}
          >
            <Home className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>Home</span>
          </button>

          {/* Services Link (No Dropdown - direct page view switch) */}
          <button
            type="button"
            onClick={() => handleTabClick("services")}
            className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${activeTab === "services"
                ? "bg-white/20 text-white font-bold shadow-xs"
                : "text-blue-100 hover:text-white hover:bg-white/10"
              }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>Services</span>
          </button>

          {/* News / Updates Link */}
          <Link
            href="/userPage/notifications"
            className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${isNewsActive
                ? "bg-white/20 text-white font-bold shadow-xs"
                : "text-blue-100 hover:text-white hover:bg-white/10"
              }`}
          >
            <Newspaper className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>News / Updates</span>
          </Link>

          {/* GST Guide Link */}
          <Link
            href="/gstGuide"
            className="flex items-center gap-1 text-xs font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#85b6ee]" />
            <span>GST Guide</span>
          </Link>

          {/* Notification Icon (Hover: 5 recent notices, Click: full notifications page) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={handleBellClick}
              className="relative p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white transition-all focus:outline-none ring-1 ring-white/15"
              aria-label="View notifications"
              title="Click to view all notifications & updates"
            >
              <Bell className="w-5 h-5 text-[#85b6ee]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center animate-bounce shadow">
                2
              </span>
            </button>

            {/* Hover popover for 5 recent notices */}
            {notificationsHover && (
              <div className="absolute top-full right-0 w-80 sm:w-96 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-4 mt-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-[#0284c7]" />
                    <h4 className="text-sm font-bold text-[#072a5e]">
                      Recent Notices &amp; Updates
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                    2 Unread
                  </span>
                </div>

                <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto pr-1">
                  {recentNotices.slice(0, 5).map((notice) => (
                    <div
                      key={notice.id}
                      onClick={handleBellClick}
                      className="py-2.5 px-2 hover:bg-[#eef6fc] rounded-lg transition-colors cursor-pointer group/item"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#072a5e]">
                          {notice.tag}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {notice.date}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 group-hover/item:text-[#0284c7] mt-1 leading-snug">
                        {notice.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                        {notice.summary}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleBellClick}
                    className="w-full flex items-center justify-center gap-1.5 py-2 bg-[#072a5e] hover:bg-[#041d42] text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
                  >
                    <span>View All Notices &amp; Updates</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#85b6ee]" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Pill / Logout */}
          <div className="flex items-center gap-3 pl-2 border-l border-blue-900/60">
            <div className="flex items-center gap-2 bg-[#041d42] px-3 py-1.5 rounded-xl border border-blue-900/80">
              <div className="w-7 h-7 rounded-full bg-[#0284c7] text-white flex items-center justify-center font-bold text-xs">
                ST
              </div>
              <div className="text-left hidden xl:block">
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
              title="Logout to landing page"
              className="p-2 text-blue-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            type="button"
            onClick={handleBellClick}
            className="p-2 rounded-lg bg-white/10 text-[#85b6ee]"
          >
            <Bell className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#041d42] border-t border-[#0d3b7e] px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            onClick={() => {
              handleTabClick("overview");
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-left"
          >
            <Home className="w-4 h-4 text-[#85b6ee]" />
            <span>Home</span>
          </button>
          <button
            type="button"
            onClick={() => {
              handleTabClick("services");
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-left"
          >
            <Layers className="w-4 h-4 text-[#85b6ee]" />
            <span>Services</span>
          </button>
          <Link
            href="/userPage/notifications"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 text-sm font-medium px-3 py-2 rounded-lg ${isNewsActive
                ? "bg-white/20 text-white font-bold"
                : "text-blue-100 hover:text-white hover:bg-white/10"
              }`}
          >
            <Newspaper className="w-4 h-4 text-[#85b6ee]" />
            <span>News & Updates (5 New)</span>
          </Link>
          <Link
            href="/gstGuide"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg"
          >
            <BookOpen className="w-4 h-4 text-[#85b6ee]" />
            <span>GST Guide</span>
          </Link>
          <div className="pt-2 border-t border-blue-900/60 flex items-center justify-between">
            <div className="text-xs text-blue-200">
              Logged in: <strong className="text-white">Sharma Textiles</strong>
            </div>
            <Link
              href="/"
              className="text-xs text-rose-300 font-semibold hover:underline flex items-center gap-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
