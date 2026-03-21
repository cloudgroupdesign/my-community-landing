"use client";

import { useState } from "react";
import { Check, Play, Users, MessageSquare, CheckSquare, Layers, DollarSign } from "lucide-react";
import {
  PhoneIcon,
  PaperClipIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon,
  EllipsisHorizontalIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleSolid, ExclamationCircleIcon } from "@heroicons/react/24/solid";

const tabs = [
  { id: "crm", label: "CRM та продажі", icon: <Users size={15} /> },
  { id: "omni", label: "Омніканальні комунікації", icon: <MessageSquare size={15} /> },
  { id: "tasks", label: "Управління задачами", icon: <CheckSquare size={15} /> },
  { id: "projects", label: "Проєкти та виробництво", icon: <Layers size={15} /> },
  { id: "hr", label: "HR, фінанси та склад", icon: <DollarSign size={15} /> },
];

const tabContent: Record<string, { features: string[]; description: string }> = {
  crm: {
    description: "Управляйте угодами, контактами та воронкою продажів в одному місці. Від першого дотику до закритої угоди — без втрат.",
    features: [
      "Воронка продажів з drag-and-drop",
      "Картки клієнтів з повною історією",
      "Автоматичні нагадування та follow-up",
      "Прогнозування доходів та KPI",
      "Інтеграція з телефонією та поштою",
      "Аналітика ефективності менеджерів",
    ],
  },
  omni: {
    description: "Всі канали комунікації в єдиному вікні: Telegram, Instagram, Email, SMS, Viber — ніколи не пропускайте повідомлення.",
    features: [
      "Єдина inbox для всіх каналів",
      "Чат-боти та автовідповіді",
      "Масові розсилки та кампанії",
      "Шаблони повідомлень",
      "Сегментація аудиторії",
      "Аналітика відкриттів та кліків",
    ],
  },
  tasks: {
    description: "Ставте задачі, встановлюйте дедлайни, контролюйте виконання. Ваша команда завжди знає що і коли потрібно зробити.",
    features: [
      "Kanban-дошки та списки задач",
      "Підзадачі та залежності",
      "Таймтрекінг та звіти",
      "Призначення відповідальних",
      "Нагадування та дедлайни",
      "Інтеграція з проєктами",
    ],
  },
  projects: {
    description: "Від планування до виробництва — повний цикл управління проєктами та виробничими процесами у вашому бізнесі.",
    features: [
      "Діаграми Ганта та дорожні карти",
      "Управління ресурсами",
      "Контроль бюджету проєктів",
      "Виробничі замовлення",
      "Облік матеріалів та ресурсів",
      "Milestone та звітність",
    ],
  },
  hr: {
    description: "Управляйте командою, фінансами та складом ефективно. Автоматизуйте HR-процеси та отримуйте повний контроль над активами.",
    features: [
      "База співробітників та оргструктура",
      "Управління відпустками та графіком",
      "Рахунки, платежі та фінзвіти",
      "Облік товарів та залишків",
      "Складські операції",
      "Нарахування заробітньої плати",
    ],
  },
};

/* ─── Lead detail mockup (CRM tab) ────────────────────────── */
const pipelineStages = ["Новий", "Кваліфікація", "Переговори", "КП надіслано", "Узгодження", "Закрито"];

function LeadDetailMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl select-none"
      style={{ background: "#F8FAFC", fontSize: "11px" }}
    >
      {/* ── Top app bar ── */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          {/* Logo mini */}
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg,#29ABE2,#0369A1)" }}>
              <span className="text-white font-black text-[8px]">M</span>
            </div>
            <span className="font-bold text-[10px] text-gray-700">MY COMMUNITY</span>
          </div>
        </div>
        {/* Nav tabs */}
        <div className="flex items-center gap-1">
          {["CRM", "Фінанси", "Виробництво", "HR"].map((t, i) => (
            <span key={t} className={`px-2.5 py-1 rounded-md text-[10px] font-semibold cursor-pointer ${i === 0 ? "text-sky-600 border-b-2 border-sky-500" : "text-gray-400"}`}>{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-[8px] font-bold text-gray-500">ІП</span>
          </div>
        </div>
      </div>

      <div className="flex" style={{ minHeight: 340 }}>
        {/* ── Left sidebar ── */}
        <div className="w-36 flex-shrink-0 bg-white border-r border-gray-100 py-3 px-2 space-y-0.5">
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider px-2 mb-1.5">Продажі</div>
          {[
            { label: "Ліди", active: true, count: 99 },
            { label: "Угоди", active: false, count: 12 },
            { label: "Замовлення", active: false },
            { label: "Доставка", active: false },
          ].map((item) => (
            <div key={item.label} className={`flex items-center justify-between px-2 py-1.5 rounded-lg cursor-pointer ${item.active ? "bg-sky-50" : "hover:bg-gray-50"}`}>
              <span className={`text-[10px] font-medium ${item.active ? "text-sky-600" : "text-gray-600"}`}>{item.label}</span>
              {item.count && (
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.active ? "bg-sky-100 text-sky-600" : "bg-gray-100 text-gray-400"}`}>{item.count}</span>
              )}
            </div>
          ))}
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider px-2 mt-3 mb-1.5">Проєкти</div>
          {["Назва проєкту", "Календар"].map((item) => (
            <div key={item} className="flex items-center px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50">
              <span className="text-[10px] text-gray-500">{item}</span>
            </div>
          ))}
        </div>

        {/* ── Main content ── */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Pipeline progress bar */}
          <div className="flex items-center gap-0 px-3 pt-3 pb-2 bg-white border-b border-gray-100 overflow-x-auto">
            {pipelineStages.map((stage, i) => {
              const done = i < 2;
              const active = i === 2;
              return (
                <div key={stage} className="flex items-center flex-shrink-0">
                  <div
                    className={`flex items-center px-3 py-1.5 text-[9px] font-semibold rounded-sm ${
                      done ? "text-white" : active ? "text-white" : "text-gray-400 bg-gray-100"
                    }`}
                    style={done ? { background: "#29ABE2" } : active ? { background: "#1A8EC4" } : {}}
                  >
                    {done && <CheckCircleSolid className="w-3 h-3 mr-1 text-white/80" />}
                    {stage}
                  </div>
                  {i < pipelineStages.length - 1 && (
                    <div className={`w-2 h-0 border-t-2 ${done ? "border-sky-300" : "border-gray-200"}`} />
                  )}
                </div>
              );
            })}
            <div className="ml-auto flex-shrink-0">
              <button className="ml-2 px-2.5 py-1.5 rounded-lg bg-sky-500 text-white text-[9px] font-bold whitespace-nowrap">
                Завершити обробку
              </button>
            </div>
          </div>

          {/* Breadcrumb + title */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-100">
            <ChevronLeftIcon className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-[10px]">Назад</span>
            <span className="text-gray-300 text-[10px]">/</span>
            <span className="font-bold text-gray-800 text-[11px]">Іван Петренко</span>
          </div>

          {/* Two-column body */}
          <div className="flex flex-1 overflow-hidden">

            {/* Left — lead details */}
            <div className="w-52 flex-shrink-0 border-r border-gray-100 bg-white px-4 py-3 space-y-3 overflow-y-auto">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Про лід</p>

              <div>
                <p className="text-[9px] text-gray-400 mb-0.5">Назва <span className="text-red-400">*</span></p>
                <p className="font-bold text-gray-900 text-sm leading-tight">Іван Петренко</p>
              </div>

              <div>
                <p className="text-[9px] text-gray-400 mb-1">Теги</p>
                <div className="flex gap-1 flex-wrap">
                  {["Новий клієнт", "VIP"].map((tag) => (
                    <span key={tag} className="text-[8px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[9px] text-gray-400 mb-1">Статус</p>
                <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">Новий</span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircleSolid className="w-3.5 h-3.5 text-sky-500" />
                <ExclamationCircleIcon className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[9px] text-gray-600 font-medium">Важливий лід</span>
              </div>

              <div>
                <p className="text-[9px] text-gray-400 mb-0.5">Сума <span className="text-red-400">*</span></p>
                <p className="font-black text-gray-900 text-base">1000₴</p>
              </div>

              <div className="border-t border-gray-100 pt-2">
                <p className="text-[9px] font-semibold text-gray-500 mb-1">Загальна заборгованість</p>
                <div className="flex items-center gap-1 bg-gray-50 rounded-lg px-2 py-1.5 border border-gray-100">
                  <span className="text-[10px] font-bold text-gray-800">1000₴</span>
                  <PencilSquareIcon className="w-2.5 h-2.5 text-gray-300 ml-auto" />
                </div>
              </div>
            </div>

            {/* Right — comments / tasks */}
            <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
              {/* Tabs */}
              <div className="flex items-center gap-0 px-3 pt-2 bg-white border-b border-gray-100">
                {[
                  { label: "Коментар", icon: <ChatBubbleLeftEllipsisIcon className="w-3 h-3" />, active: true },
                  { label: "Завдання", icon: <CheckCircleIcon className="w-3 h-3" />, active: false },
                  { label: "СМС", icon: <EnvelopeIcon className="w-3 h-3" />, active: false },
                  { label: "Лист", icon: <EnvelopeIcon className="w-3 h-3" />, active: false },
                ].map((tab) => (
                  <div key={tab.label} className={`flex items-center gap-1 px-2.5 py-1.5 cursor-pointer border-b-2 ${tab.active ? "border-sky-500 text-sky-600" : "border-transparent text-gray-400"}`}>
                    {tab.icon}
                    <span className="text-[9px] font-semibold">{tab.label}</span>
                  </div>
                ))}
              </div>

              {/* Comment area */}
              <div className="px-3 py-2">
                <div className="bg-white rounded-xl border border-gray-200 p-2.5">
                  <p className="text-[10px] text-gray-300">Введіть коментар...</p>
                  <div className="flex justify-end mt-3">
                    <button className="bg-sky-500 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg">
                      Додати коментар
                    </button>
                  </div>
                </div>
              </div>

              {/* Task card */}
              <div className="px-3 pb-2">
                <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 mb-2">Завдання</span>
                <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] text-gray-400">Завдання</span>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">В процесі</span>
                    </div>
                    <span className="text-[8px] text-gray-400">10.10.2025, 10:54</span>
                  </div>
                  <p className="font-bold text-gray-800 text-[10px] leading-snug">
                    Передзвонити клієнту до 10 жовтня 2025
                  </p>
                  <div className="flex items-center gap-3 text-[8px] text-gray-400">
                    <span className="flex items-center gap-0.5">
                      📅 <span className="text-red-500 font-semibold">Просрочено</span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      👤 Іван Петренко
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <CheckCircleIcon className="w-3 h-3 text-gray-300" />
                    <PaperClipIcon className="w-3 h-3 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
      style={{ background: "linear-gradient(145deg, #0C2D48 0%, #1A5276 60%, #1A8EC4 100%)" }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #29ABE2, transparent)" }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 z-10">
        <button className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl">
          <Play size={28} className="text-white fill-white ml-1" />
        </button>
        <p className="text-white/80 text-sm font-medium tracking-wide">{label}</p>
      </div>
      <div className="absolute top-4 left-4 flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
      </div>
      <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5">
        <span className="text-white/80 text-xs font-medium">3:24 хв</span>
      </div>
    </div>
  );
}

export default function Features() {
  const [activeTab, setActiveTab] = useState("crm");
  const content = tabContent[activeTab];

  return (
    <section id="features" className="py-24" style={{ background: "#FAFAFF" }}>
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
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

        {/* Tab navigation */}
        <div className="flex overflow-x-auto gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 mb-10 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex-1 min-w-fit justify-center ${
                activeTab === tab.id
                  ? "bg-sky-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span className={activeTab === tab.id ? "text-white" : "text-gray-400"}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Kanban mockup (CRM) or Video placeholder (others) */}
          <div>
            {activeTab === "crm" ? (
              <LeadDetailMockup />
            ) : (
              <VideoPlaceholder label={`Демо: ${tabs.find((t) => t.id === activeTab)?.label}`} />
            )}
          </div>

          {/* Right: Features list */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h3>
              <p className="text-gray-500 leading-relaxed">{content.description}</p>
            </div>

            <ul className="space-y-3">
              {content.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-sky-500 font-bold" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-6 py-3 text-sm transition-all duration-200 shadow-md hover:shadow-lg mt-2"
            >
              Спробувати безкоштовно
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
