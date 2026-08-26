"use client";

import React, { useState } from "react";
import GstGuideNavbar from "@/components/GstGuideNavbar";
import GstGptChat from "@/components/GstGptChat";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import {
  GUIDE_SECTIONS,
  GUIDE_TOPICS,
  GST_GUIDE_TAGLINE,
  TOPIC_PATTERN,
  type Block,
  type GuideTopic,
} from "./guideContent";

/* ── Content block renderer ────────────────────────────────────────────── */

function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case "heading":
      return (
        <h3 className="text-base sm:text-lg font-bold text-[#072a5e] pt-2">
          {block.content}
        </h3>
      );
    case "text":
      return (
        <p className="text-sm text-slate-600 leading-relaxed">{block.content}</p>
      );
    case "note":
      return (
        <div className="border-l-4 border-[#0284c7] bg-[#eef6fc] rounded-r-xl px-4 py-3">
          <p className="text-sm font-medium text-[#072a5e] leading-relaxed">
            {block.content}
          </p>
        </div>
      );
    case "list":
      if (block.ordered) {
        return (
          <ol className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="w-5 h-5 mt-0.5 rounded-md bg-[#eef6fc] border border-[#85b6ee]/50 text-[#0284c7] text-[10px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="space-y-1.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 mt-[7px] rounded-sm bg-[#0284c7] shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "terminal":
      return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
          {block.title && (
            <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              {block.title}
            </div>
          )}
          <pre className="px-4 py-3 text-xs font-mono text-slate-700 whitespace-pre-wrap leading-relaxed">
            {block.content}
          </pre>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#eef6fc]">
              <tr>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2.5 text-xs font-bold text-[#072a5e] border-b border-slate-200"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="even:bg-slate-50/60">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-2.5 text-xs border-b border-slate-100 ${
                        j === 0 ? "font-semibold text-[#072a5e]" : "text-slate-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/* ── Topic view ────────────────────────────────────────────────────────── */

function TopicNavButton({
  topic,
  align,
  onClick,
}: {
  topic: GuideTopic;
  align: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col gap-0.5 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-[#85b6ee] hover:shadow-sm transition-all ${
        align === "right" ? "items-end text-right" : "items-start"
      }`}
    >
      <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
        {align === "left" && <ArrowLeft className="w-3 h-3" />}
        {align === "left" ? "Previous" : "Next"}
        {align === "right" && <ArrowRight className="w-3 h-3" />}
      </span>
      <span className="text-xs font-bold text-[#072a5e] group-hover:text-[#0284c7] transition-colors">
        {topic.num}. {topic.title}
      </span>
    </button>
  );
}

function TopicView({
  topic,
  prev,
  next,
  onNavigate,
}: {
  topic: GuideTopic;
  prev: GuideTopic | null;
  next: GuideTopic | null;
  onNavigate: (id: string) => void;
}) {
  const isFirst = GUIDE_TOPICS[0]?.id === topic.id;
  const section = GUIDE_SECTIONS.find((s) => s.id === topic.section);

  return (
    <article className="max-w-3xl">
      {/* Docs-style hero (first page only, mirrors reference layout) */}
      {isFirst && (
        <>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            GST Guide
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Welcome to the GST Guide!
          </p>
          <div className="mt-4 border-l-4 border-[#0284c7] bg-[#eef6fc] rounded-r-xl px-4 py-3">
            <p className="text-sm font-semibold text-[#072a5e] italic">
              “{GST_GUIDE_TAGLINE}”
            </p>
          </div>
          <hr className="my-8 border-slate-200" />
        </>
      )}

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0284c7]">
        <span>Section {section?.num}</span>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span>{section?.title}</span>
      </div>

      {/* Title */}
      <h2
        className={`mt-1.5 font-bold text-slate-900 tracking-tight ${
          isFirst ? "text-2xl" : "text-3xl sm:text-4xl"
        }`}
      >
        <span className="text-slate-300 mr-2">{topic.num}</span>
        {topic.title}
      </h2>
      {topic.intro && (
        <p className="mt-2 text-sm italic text-slate-500">{topic.intro}</p>
      )}

      <hr className="my-6 border-slate-200" />

      {/* Blocks */}
      <div className="space-y-5">
        {topic.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </div>

      {/* Topic pattern recommendation (first page only) */}
      {isFirst && (
        <div className="mt-10 rounded-2xl border border-[#85b6ee]/60 bg-[#eef6fc]/60 p-5">
          <p className="flex items-center gap-2 text-xs font-bold text-[#072a5e] uppercase tracking-wider">
            <MessageCircle className="w-4 h-4 text-[#0284c7]" />
            Every topic follows this pattern
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TOPIC_PATTERN.map((step, i) => (
              <span
                key={step}
                className="inline-flex items-center gap-1.5 bg-white border border-[#85b6ee]/60 text-[#072a5e] text-[11px] font-semibold px-2.5 py-1 rounded-full"
              >
                <span className="text-[#0284c7] font-bold">{i + 1}</span>
                {step}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next */}
      <div className="mt-10 pt-6 border-t border-slate-200 flex items-stretch justify-between gap-3">
        {prev ? (
          <TopicNavButton
            topic={prev}
            align="left"
            onClick={() => onNavigate(prev.id)}
          />
        ) : (
          <div />
        )}
        {next && (
          <TopicNavButton
            topic={next}
            align="right"
            onClick={() => onNavigate(next.id)}
          />
        )}
      </div>
    </article>
  );
}

/* ── Sidebar ───────────────────────────────────────────────────────────── */

function SidebarContent({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Topic navigation */}
      <nav className="space-y-5 pb-6">
        {GUIDE_SECTIONS.map((section) => (
          <div key={section.id}>
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {section.num} · {section.title}
            </p>
            <div className="mt-1.5 space-y-0.5">
              {GUIDE_TOPICS.filter((t) => t.section === section.id).map(
                (topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => onSelect(topic.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors border-l-2 ${
                      activeId === topic.id
                        ? "bg-[#eef6fc] text-[#0284c7] font-bold border-[#0284c7]"
                        : "text-slate-600 hover:text-[#072a5e] hover:bg-slate-100/70 border-transparent"
                    }`}
                  >
                    {topic.title}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function GstGuidePage() {
  const [activeId, setActiveId] = useState<string>(
    GUIDE_TOPICS[0]?.id ?? "what-is-gst"
  );
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [gstGptOpen, setGstGptOpen] = useState(false);

  const activeTopic = GUIDE_TOPICS.find((t) => t.id === activeId) ?? null;
  const activeIndex = GUIDE_TOPICS.findIndex((t) => t.id === activeId);
  const prev = activeIndex > 0 ? GUIDE_TOPICS[activeIndex - 1] ?? null : null;
  const next =
    activeIndex >= 0 && activeIndex < GUIDE_TOPICS.length - 1
      ? GUIDE_TOPICS[activeIndex + 1] ?? null
      : null;

  const handleSelect = (id: string) => {
    setActiveId(id);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleGstGpt = () => setGstGptOpen((open) => !open);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GstGuideNavbar gstGptActive={gstGptOpen} onGstGptClick={toggleGstGpt} />

      {gstGptOpen ? (
        /* Full-screen GSTGPT chat — the entire guide is hidden */
        <GstGptChat />
      ) : (
        <>
          {/* Mobile guide bar */}
          <div className="lg:hidden sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="flex items-center gap-2 text-xs font-bold text-[#072a5e]"
            >
              <Menu className="w-4 h-4 text-[#0284c7]" />
              Guide Menu
            </button>
            <button
              type="button"
              onClick={toggleGstGpt}
              className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-gradient-to-r from-[#0284c7] to-[#6366f1] px-3 py-1.5 rounded-lg shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              GSTGPT
            </button>
          </div>

          {/* Mobile drawer */}
          {mobileNavOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-slate-900/50"
                onClick={() => setMobileNavOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85%] bg-[#fafbfc] border-r border-slate-200 overflow-y-auto p-4 animate-in slide-in-from-left-2 duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#072a5e]">
                    GST Guide
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileNavOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <SidebarContent activeId={activeId} onSelect={handleSelect} />
              </div>
            </div>
          )}

          {/* Docs layout: sidebar + content */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
              {/* Desktop sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 pb-8">
                  <SidebarContent activeId={activeId} onSelect={handleSelect} />
                </div>
              </aside>

              {/* Main content */}
              <section className="mt-6 lg:mt-0 min-w-0">
                {activeTopic ? (
                  <TopicView
                    topic={activeTopic}
                    prev={prev}
                    next={next}
                    onNavigate={handleSelect}
                  />
                ) : null}
              </section>
            </div>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}