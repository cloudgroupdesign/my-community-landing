"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

function openDemoModal() {
  window.dispatchEvent(new CustomEvent("open-demo-modal"));
}

export default function Features() {
  const { lang } = useLang();
  const t = i18n[lang].features;
  const tabs = t.tabs as typeof i18n.ua.features.tabs;

  const [activeId, setActiveId] = useState("crm");
  const [hoverId, setHoverId] = useState<string | null>(null);
  const tab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-5">{t.eyebrow}</p>
          <h2 className="text-h2 text-gray-900 mb-6">{t.title}</h2>
          <p className="text-t2 text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="flex items-end justify-center gap-0 mb-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            const isHovered = hoverId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className="relative flex-none px-5 pb-3 pt-3 text-sm font-medium whitespace-nowrap transition-colors duration-200"
                style={{ color: isActive ? tab.color : "#6B7280" }}
                onMouseEnter={() => setHoverId(tab.id)}
                onMouseLeave={() => setHoverId(null)}
              >
                {tab.label}
                <span
                  className="absolute bottom-0 rounded-full transition-all duration-150"
                  style={{
                    left: "16px",
                    right: "16px",
                    height: "2px",
                    background: isActive ? tab.color : "#9CA3AF",
                    opacity: (isActive || isHovered) ? 1 : 0,
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className="rounded-xl overflow-hidden flex flex-col lg:flex-row lg:h-[460px]">

          <div
            className="flex flex-col justify-between p-8 lg:p-10 lg:w-[38%] lg:h-full"
            style={{ background: tab.lightBg }}
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">{tab.headline}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{tab.description}</p>
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl px-6 py-3 transition-all duration-200"
              >
                {t.tryFree}
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {tab.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/70 text-gray-600 border border-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="flex-1 flex items-center justify-center p-8 lg:p-10 min-h-[280px] lg:h-full"
            style={{ background: tab.fullBg }}
          >
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden aspect-video bg-white/10 border border-white/20 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 border border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-105">
                  <Play size={22} className="text-white fill-white ml-1" />
                </button>
                <p className="text-white/70 text-sm font-medium">
                  {t.demoPrefix}{tab.label}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
