"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const tabs = [
  {
    id: "crm",
    label: "CRM та продажі",
    color: "#29ABE2",
    lightBg: "#EFF9FF",
    fullBg: "#29ABE2",
    headline: "Управляйте клієнтами та угодами без хаосу",
    description: "Від першого контакту до закритої угоди — вся воронка продажів в одному місці.",
    tags: ["Воронка продажів", "Картки клієнтів", "Автонагадування", "KPI та аналітика", "Телефонія та пошта"],
  },
  {
    id: "omni",
    label: "Омніканальні комунікації",
    color: "#8B5CF6",
    lightBg: "#F5F3FF",
    fullBg: "#8B5CF6",
    headline: "Всі повідомлення в одному вікні",
    description: "Telegram, Instagram, Email, SMS, Viber — жодне повідомлення не загубиться.",
    tags: ["Єдина inbox", "Чат-боти", "Масові розсилки", "Шаблони", "Аналітика"],
  },
  {
    id: "tasks",
    label: "Управління задачами",
    color: "#10B981",
    lightBg: "#ECFDF5",
    fullBg: "#10B981",
    headline: "Команда завжди знає що і коли робити",
    description: "Kanban-дошки, дедлайни, відповідальні — повний контроль над задачами.",
    tags: ["Kanban-дошки", "Підзадачі", "Таймтрекінг", "Нагадування", "Звіти"],
  },
  {
    id: "projects",
    label: "Проєкти та виробництво",
    color: "#F59E0B",
    lightBg: "#FFFBEB",
    fullBg: "#F59E0B",
    headline: "Повний цикл від планування до результату",
    description: "Управляйте проєктами та виробничими процесами без зайвих інструментів.",
    tags: ["Діаграми Ганта", "Ресурси", "Бюджет", "Виробничі замовлення", "Milestone"],
  },
  {
    id: "hr",
    label: "HR, фінанси та склад",
    color: "#EF4444",
    lightBg: "#FFF5F5",
    fullBg: "#EF4444",
    headline: "Команда, гроші та склад — все під контролем",
    description: "Автоматизуйте HR-процеси, фінансовий облік та управління складом.",
    tags: ["Штатний розклад", "Відпустки", "Фінзвіти", "Облік товарів", "Зарплата"],
  },
];

function openDemoModal() {
  window.dispatchEvent(new CustomEvent("open-demo-modal"));
}

export default function Features() {
  const [activeId, setActiveId] = useState("crm");
  const [hoverId, setHoverId] = useState<string | null>(null);
  const tab = tabs.find((t) => t.id === activeId)!;

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Можливості
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">
            Можливості My Community
          </h2>
          <p className="text-t1 text-gray-500 max-w-2xl mx-auto">
            Все що потрібно для ефективного бізнесу — в одному продукті
          </p>
        </div>

        {/* Text tab bar — centered, no full-width border line */}
        <div className="flex items-end justify-center gap-0 mb-8 overflow-x-auto scrollbar-none">
          {tabs.map((t) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className="relative flex-none px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200"
                style={{ color: (isActive || hoverId === t.id) ? t.color : "#6B7280" }}
                onMouseEnter={() => setHoverId(t.id)}
                onMouseLeave={() => setHoverId(null)}
              >
                {t.label}
                {/* Underline: visible only under active or hovered tab */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-opacity duration-150"
                  style={{
                    background: t.color,
                    opacity: (isActive || hoverId === t.id) ? 1 : 0,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Two-column card — fixed height so it never jumps between tabs */}
        <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row lg:h-[460px]">

          {/* Left panel — light bg, text content */}
          <div
            className="flex flex-col justify-between p-8 lg:p-10 lg:w-[38%] lg:h-full"
            style={{ background: tab.lightBg }}
          >
            <div className="space-y-5">
              {/* Label */}
              <p
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: tab.color }}
              >
                {tab.label}
              </p>

              {/* Headline */}
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                {tab.headline}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {tab.description}
              </p>

              {/* CTA button */}
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl px-6 py-3 transition-all duration-200"
              >
                Спробувати безкоштовно
              </button>
            </div>

            {/* Feature tags */}
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

          {/* Right panel — full color bg, video */}
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
                  Демо: {tab.label}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
