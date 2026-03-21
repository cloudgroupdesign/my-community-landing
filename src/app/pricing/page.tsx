"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function openDemoModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  }
}

const modules = [
  {
    id: "crm",
    name: "CRM та продажі",
    description: "Воронка продажів, картки клієнтів, аналітика угод та автоматизація follow-up.",
    monthlyPrice: 49,
    setupPrice: 299,
    isBase: true,
    features: [
      "Воронка продажів drag-and-drop",
      "Картки клієнтів з історією",
      "Автоматичні нагадування",
      "Аналітика та KPI",
      "Інтеграція з телефонією",
    ],
  },
  {
    id: "production",
    name: "Виробництво",
    description: "Управління виробничими процесами, замовленнями та контроль якості.",
    monthlyPrice: 129,
    setupPrice: 500,
    isBase: false,
    features: [
      "Планування виробництва",
      "Контроль замовлень",
      "Облік матеріалів",
      "Звітність по виробництву",
      "Інтеграція зі складом",
    ],
  },
  {
    id: "projects",
    name: "Проєкти та задачі",
    description: "Канбан-дошки, терміни, виконавці та повний контроль над проєктами.",
    monthlyPrice: 29,
    setupPrice: 299,
    isBase: false,
    features: [
      "Канбан та список задач",
      "Терміни та пріоритети",
      "Команди та виконавці",
      "Коментарі та файли",
      "Звіти по задачах",
    ],
  },
  {
    id: "warehouse",
    name: "Склад",
    description: "Облік залишків, рух товарів, інвентаризація та складська аналітика.",
    monthlyPrice: 49,
    setupPrice: 299,
    isBase: false,
    features: [
      "Облік залишків",
      "Прихід та витрата",
      "Інвентаризація",
      "Штрих-коди та артикули",
      "Складська аналітика",
    ],
  },
  {
    id: "hr",
    name: "HR процеси",
    description: "Штатний розклад, відпустки, заробітна плата та управління командою.",
    monthlyPrice: 29,
    setupPrice: 299,
    isBase: false,
    features: [
      "Штатний розклад",
      "Облік відпусток та лікарняних",
      "Нарахування зарплати",
      "Онбординг нових співробітників",
      "HR аналітика",
    ],
  },
];

const BUNDLE_MONTHLY_BASE = modules.reduce((s, m) => s + m.monthlyPrice, 0); // 285
const BUNDLE_MONTHLY = Math.round(BUNDLE_MONTHLY_BASE * 1.2); // 342
const BUNDLE_SETUP = modules.reduce((s, m) => s + m.setupPrice, 0); // 1696

export default function PricingPage() {
  return (
    <>
    <Navbar />
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
          Ціни та тарифи
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Обирайте лише потрібні модулі або підключіть усе одразу. Платіть за те, що реально використовуєте.
        </p>
      </section>

      {/* Module cards */}
      <section className="max-w-[1100px] mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-7"
            >
              {mod.isBase && (
                <span className="absolute top-5 right-5 text-[11px] font-bold px-2.5 py-1 rounded-full border border-gray-200 text-gray-500 bg-gray-50">
                  Базовий модуль
                </span>
              )}

              <h2 className="text-lg font-bold text-gray-900 mb-2 pr-28">{mod.name}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{mod.description}</p>

              {/* Price */}
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-gray-900">${mod.monthlyPrice}</span>
                <span className="text-gray-400 text-sm font-medium ml-1">/міс</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Налаштування —{" "}
                <span className="font-semibold text-gray-600">${mod.setupPrice}</span>{" "}
                одноразово
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {mod.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "#29ABE2" }}
                    >
                      <CheckIcon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openDemoModal}
                className="w-full text-center text-sm font-semibold rounded-xl px-6 py-3 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Підключити
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle card */}
      <section className="max-w-[1100px] mx-auto px-6 pb-6">
        <div
          className="rounded-2xl border border-gray-200 p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start"
          style={{ background: "#F8FEFF" }}
        >
          {/* Left */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-4"
              style={{ background: "#E0F5FD", color: "#29ABE2" }}
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              Повний пакет — усі модулі
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              CRM + Виробництво + Проєкти + Склад + HR
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Усі модулі в одній системі. Ідеально для бізнесу, який хоче повний контроль — від продажів до виробництва та команди.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modules.map((m) => (
                <li key={m.id} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#29ABE2" }}
                  >
                    <CheckIcon className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{m.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — price block */}
          <div className="sm:w-64 flex-shrink-0 flex flex-col gap-5">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Щомісячно</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">${BUNDLE_MONTHLY}</span>
                <span className="text-gray-400 text-sm mb-1">/міс</span>
              </div>
              <p className="text-xs text-gray-400">
                База ${BUNDLE_MONTHLY_BASE} + 20% за повний пакет
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Налаштування</p>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-extrabold text-gray-900">${BUNDLE_SETUP.toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Одноразово, усі модулі</p>
            </div>

            <button
              onClick={openDemoModal}
              className="w-full text-center text-white text-sm font-semibold rounded-xl px-6 py-3.5 transition-all duration-200"
              style={{ background: "#29ABE2" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1A8EC4")}
              onMouseLeave={e => (e.currentTarget.style.background = "#29ABE2")}
            >
              Підключити повний пакет
            </button>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">💡 Вартість налаштування оплачується одноразово</span>{" "}
            — мінімальний поріг від $300 за кожен модуль.
          </p>
          <p className="text-sm text-gray-400 sm:ml-auto whitespace-nowrap">
            Ціни вказані у USD · виставляємо рахунок у гривні
          </p>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
