"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  AudioLines,
  Bot,
  Globe,
  MessageCircle,
  Mic,
  PanelLeft,
  Plus,
} from "lucide-react";
import { GUIDE_TOPICS, type GuideTopic } from "@/app/gstGuide/guideContent";

/* ── GSTGPT intelligence (keyword router → guide topics) ───────────────── */

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

interface RecentChat {
  id: string;
  title: string;
}

const RECENT_CHATS: RecentChat[] = [
  { id: "c1", title: "GSTR-3B filing steps for July" },
  { id: "c2", title: "Why was my ITC rejected?" },
  { id: "c3", title: "LUT renewal deadline for exporters" },
  { id: "c4", title: "E-way bill missing records fix" },
  { id: "c5", title: "Documents needed for GST registration" },
  { id: "c6", title: "How to file a Nil return" },
];

const SUGGESTIONS = [
  "Do I need GST registration?",
  "How do I file GSTR-3B?",
  "What is an LUT?",
  "How do I resolve an ITC mismatch?",
];

/** Lightweight keyword router so GSTGPT can point users at the right guide topic. */
function findTopicForQuery(query: string): GuideTopic | undefined {
  const q = query.toLowerCase();
  const rules: Array<{ keywords: string[]; topicId: string }> = [
    {
      keywords: ["register", "registration", "trn", "sign up"],
      topicId: "register-for-gst",
    },
    {
      keywords: ["need gst", "eligible", "turnover", "mandatory", "voluntary"],
      topicId: "need-registration",
    },
    {
      keywords: ["document", "prepare", "checklist", "pan", "aadhaar"],
      topicId: "prepare-before-registering",
    },
    {
      keywords: ["track", "arn", "srn", "application status"],
      topicId: "track-registration",
    },
    { keywords: ["gstr-1", "gstr1", "sales return"], topicId: "filing-gstr1" },
    { keywords: ["gstr-3b", "gstr3b", "3b"], topicId: "filing-gstr3b" },
    { keywords: ["return", "filing", "file a return"], topicId: "file-return" },
    { keywords: ["nil"], topicId: "nil-returns" },
    {
      keywords: ["itc", "input tax credit", "mismatch", "credit"],
      topicId: "understand-itc",
    },
    {
      keywords: ["pay", "payment", "challan", "liability"],
      topicId: "pay-gst",
    },
    {
      keywords: ["lut", "undertaking", "export", "zero-rated", "refund"],
      topicId: "file-renew-lut",
    },
    {
      keywords: ["e-invoice", "einvoice", "e invoice", "irn", "qr"],
      topicId: "e-invoicing",
    },
    {
      keywords: ["e-way", "eway", "way bill", "waybill", "consignment"],
      topicId: "e-way-bills",
    },
    {
      keywords: ["upload", "offline", "json", "excel", "csv", "template"],
      topicId: "upload-offline-data",
    },
    {
      keywords: ["notice", "order", "demand", "appeal"],
      topicId: "notices-and-orders",
    },
    {
      keywords: ["late", "deadline", "fee", "interest", "penalty", "missed"],
      topicId: "missed-deadline",
    },
    { keywords: ["gstin"], topicId: "understand-gstin" },
    { keywords: ["dashboard", "pending task"], topicId: "gst-dashboard" },
    {
      keywords: ["amend", "amendment", "change", "update"],
      topicId: "update-registration",
    },
    {
      keywords: ["rule", "regulation", "compliance", "calendar", "record"],
      topicId: "rules-regulations",
    },
  ];
  for (const rule of rules) {
    if (rule.keywords.some((k) => q.includes(k))) {
      return GUIDE_TOPICS.find((t) => t.id === rule.topicId);
    }
  }
  return undefined;
}

function botReply(query: string): string {
  const topic = findTopicForQuery(query);
  if (topic) {
    return `Here's what the GST Guide recommends — open “${topic.num}. ${topic.title}” in the guide sidebar. It covers the step-by-step process, common mistakes, and what happens next. Ask me anything else!`;
  }
  return "I can help with GST registration, returns (GSTR-1 / GSTR-3B), Nil returns, ITC, payments, LUT, e-invoicing, e-way bills, notices and deadlines. Try one of the suggestions below, or browse the guide topics in the sidebar.";
}

/* ── ChatGPT-style input pill ──────────────────────────────────────────── */

function InputPill({
  input,
  onInputChange,
  onSend,
  thinking,
}: {
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  thinking: boolean;
}) {
  const hasText = input.trim().length > 0;
  return (
    <div className="w-full bg-white border border-slate-200 rounded-[28px] shadow-[0_4px_16px_rgba(0,0,0,0.07)] px-3 sm:px-4 py-2.5 flex items-center gap-2 sm:gap-3">
      <button
        type="button"
        className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 transition-colors"
        aria-label="Attach files"
      >
        <Plus className="w-5 h-5" />
      </button>
      <input
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
        placeholder="Ask anything"
        className="flex-1 min-w-0 bg-transparent outline-none text-sm sm:text-[15px] text-slate-700 placeholder:text-slate-400"
      />
      
      <button
        type="button"
        className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 transition-colors"
        aria-label="Voice input"
      >
        <Mic className="w-[18px] h-[18px]" />
      </button>
      <button
        type="button"
        onClick={onSend}
        disabled={!hasText || thinking}
        className="w-9 h-9 rounded-full bg-[#0284c7] hover:bg-[#0077e6] disabled:hover:bg-[#0284c7] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
        aria-label={hasText ? "Send message" : "Voice mode"}
      >
          <ArrowUp className="w-[18px]  h-[18px]" />
      </button>
    </div>
  );
}

/* ── Recent chats sidebar body ─────────────────────────────────────────── */

function SidebarBody({
  activeChatId,
  onNewChat,
  onOpenChat,
}: {
  activeChatId: string | null;
  onNewChat: () => void;
  onOpenChat: (chat: RecentChat) => void;
}) {
  return (
    <>
      <div className="p-3">
        <button
          type="button"
          onClick={onNewChat}
          className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-semibold text-slate-700 shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4 text-[#0284c7]" />
          New chat
        </button>
      </div>
      <p className="px-5 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
        Recent chats
      </p>
      <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-0.5">
        {RECENT_CHATS.map((chat) => (
          <button
            key={chat.id}
            type="button"
            onClick={() => onOpenChat(chat)}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-[13px] transition-colors ${
              activeChatId === chat.id
                ? "bg-[#eef6fc] text-[#072a5e] font-semibold"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <MessageCircle className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{chat.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}

/* ── GSTGPT full-screen chat (ChatGPT-style interface) ─────────────────── */

export default function GstGptChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, thinking]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || thinking) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setActiveChatId(null);
    setThinking(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: botReply(text) }]);
      setThinking(false);
    }, 700);
  };

  const openRecentChat = (chat: RecentChat) => {
    setActiveChatId(chat.id);
    setMessages([
      { role: "user", text: chat.title },
      { role: "bot", text: botReply(chat.title) },
    ]);
    setSidebarOpen(false);
  };

  const startNewChat = () => {
    setMessages([]);
    setInput("");
    setActiveChatId(null);
    setSidebarOpen(false);
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex  h-[calc(100vh-4rem)] bg-white overflow-hidden">
      {/* Desktop sidebar: recent chats */}
      <aside className="hidden md:flex w-72 flex-col bg-[#f7f8fa] border-r border-slate-200 shrink-0">
        <SidebarBody
          activeChatId={activeChatId}
          onNewChat={startNewChat}
          onOpenChat={openRecentChat}
        />
        <div className="p-3 border-t border-slate-200 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#0284c7] text-white flex items-center justify-center font-bold text-xs shrink-0">
            ST
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-700 truncate">
              Sharma Textiles
            </p>
            <p className="text-[10px] text-emerald-600 font-medium">
              GSTGPT Plus
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 max-w-[80%] bg-[#f7f8fa] border-r border-slate-200 flex flex-col">
            <div className="flex items-center justify-between p-3 pb-0">
              <span className="text-sm font-bold text-[#072a5e]">GSTGPT</span>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200/60"
                aria-label="Close recent chats"
              >
                <PanelLeft className="w-4 h-4" />
              </button>
            </div>
            <SidebarBody
              activeChatId={activeChatId}
              onNewChat={startNewChat}
              onOpenChat={openRecentChat}
            />
          </div>
        </div>
      )}

      {/* Main chat area */}
      <div className="scale-95 flex-1 flex flex-col min-w-0">
        {/* Chat header */}
        <div className="h-12 shrink-0 px-3 sm:px-4 flex items-center gap-2 border-b border-slate-100 bg-white/90 backdrop-blur">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
            aria-label="Open recent chats"
          >
            <PanelLeft className="w-[18px] h-[18px]" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#072a5e]">GSTGPT</span>
            <span className="text-[9px] font-bold bg-[#eef6fc] text-[#0284c7] border border-[#85b6ee]/60 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
              Beta
            </span>
          </div>
        </div>

        {isEmpty ? (
          /* Empty state — centered greeting + input (ChatGPT-style) */
          <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-16">
            <h1 className="text-2xl sm:text-[28px] text-slate-800 font-normal text-center">
              Hey, Satish. Ready to dive in?
            </h1>
            <div className="w-full max-w-2xl mt-8">
              <InputPill
                input={input}
                onInputChange={setInput}
                onSend={() => send()}
                thinking={thinking}
              />
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="text-[11px] sm:text-xs font-medium text-slate-500 hover:text-[#0284c7] bg-white hover:bg-[#eef6fc] border border-slate-200 hover:border-[#85b6ee]/60 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Thread */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
                {messages.map((m, i) =>
                  m.role === "user" ? (
                    <div key={i} className="flex justify-end">
                      <div className="max-w-[85%] bg-[#eef6fc] border border-[#85b6ee]/50 text-[#072a5e] px-4 py-2.5 rounded-2xl rounded-tr-md text-sm leading-relaxed whitespace-pre-wrap">
                        {m.text}
                      </div>
                    </div>
                  ) : (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0284c7] to-[#6366f1] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="max-w-[85%] text-sm text-slate-700 leading-relaxed whitespace-pre-wrap pt-1">
                        {m.text}
                      </div>
                    </div>
                  )
                )}
                {thinking && (
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0284c7] to-[#6366f1] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="flex gap-1 pt-3">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom input */}
            <div className="shrink-0 px-4 sm:px-6 pb-5 pt-2">
              <div className="max-w-3xl mx-auto">
                <InputPill
                  input={input}
                  onInputChange={setInput}
                  onSend={() => send()}
                  thinking={thinking}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}