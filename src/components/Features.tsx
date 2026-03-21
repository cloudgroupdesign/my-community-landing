"use client";

import { useState } from "react";
import { Check, Play, Users, MessageSquare, CheckSquare, Layers, DollarSign } from "lucide-react";

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


function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative rounded-2xl aspect-video flex items-center justify-center bg-gray-50 border border-gray-200"
    >
      <div className="flex flex-col items-center gap-4">
        <button className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center transition-colors hover:bg-gray-100">
          <Play size={22} className="text-gray-700 fill-gray-700 ml-1" />
        </button>
        <p className="text-gray-400 text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}

export default function Features() {
  const [activeTab, setActiveTab] = useState("crm");
  const content = tabContent[activeTab];

  return (
    <section id="features" className="py-24 bg-white">
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
        <div className="flex overflow-x-auto gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex-1 min-w-fit justify-center ${
                activeTab === tab.id
                  ? "bg-sky-500 text-white"
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
            <VideoPlaceholder label={`Демо: ${tabs.find((t) => t.id === activeTab)?.label}`} />
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
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-all duration-200 mt-2"
            >
              Спробувати безкоштовно
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
