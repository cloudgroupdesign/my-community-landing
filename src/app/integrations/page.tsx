"use client";

import { useState } from "react";
import Image from "next/image";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Data ───────────────────────────────────────────────── */

type Integration = {
  category: string;
  logo: React.ReactNode;
  name: string;
  description: string;
};

const ALL_INTEGRATIONS: Integration[] = [
  {
    category: "Продуктивність",
    logo: <Image src="/google-calendar.png" alt="Google Calendar" width={48} height={48} className="object-contain" />,
    name: "Google Calendar",
    description: "Синхронізація зустрічей та подій команди в реальному часі.",
  },
  {
    category: "Відеодзвінки",
    logo: <Image src="/zoom.png" alt="Zoom" width={48} height={48} className="object-contain" />,
    name: "Zoom",
    description: "Запускайте відеодзвінки прямо з картки клієнта або угоди.",
  },
  {
    category: "Маркетплейси",
    logo: <Image src="/amazon.png" alt="Amazon" width={48} height={48} className="object-contain" />,
    name: "Amazon",
    description: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету.",
  },
  {
    category: "Доставка",
    logo: <CodeBracketIcon className="w-12 h-12" style={{ color: "#29ABE2" }} />,
    name: "Nova Poshta API",
    description: "Автоматичне створення ТТН та відстеження доставки Новою Поштою.",
  },
  {
    category: "Маркетплейси",
    logo: <Image src="/rozetka.png" alt="Rozetka" width={48} height={48} className="object-contain" />,
    name: "Rozetka",
    description: "Обробляйте замовлення з найбільшого українського маркетплейсу.",
  },
  {
    category: "Месенджери",
    logo: (
      <svg viewBox="0 0 36 36" className="w-12 h-12"><rect width="36" height="36" rx="8" fill="#0088CC"/><path d="M18 8C12.477 8 8 12.239 8 17.469c0 2.944 1.406 5.57 3.608 7.316L10.5 28l3.428-1.056A10.3 10.3 0 0 0 18 27.938c5.523 0 10-4.239 10-9.469S23.523 8 18 8Z" fill="white"/></svg>
    ),
    name: "Telegram Bot",
    description: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram.",
  },
  {
    category: "Маркетплейси",
    logo: <Image src="/ebay.png" alt="eBay" width={48} height={48} className="object-contain" />,
    name: "eBay",
    description: "Синхронізація лістингів та автоматична обробка замовлень eBay.",
  },
  {
    category: "Соцмережі",
    logo: (
      <svg viewBox="0 0 36 36" className="w-12 h-12"><rect width="36" height="36" rx="8" fill="#1877F2"/><path d="M22.5 18h-3v10h-4V18h-2v-3.5h2v-2c0-2.8 1.2-4.5 4.5-4.5H22v3.5h-1.5c-1 0-1.5.4-1.5 1.5v1.5H22l-.5 3.5Z" fill="white"/></svg>
    ),
    name: "Facebook / Meta",
    description: "Збирайте ліди з Facebook Leads Ads прямо у воронку продажів.",
  },
  {
    category: "Продуктивність",
    logo: (
      <svg viewBox="0 0 36 36" className="w-12 h-12"><rect width="36" height="36" rx="8" fill="#fff" stroke="#E5E7EB"/><text x="18" y="24" textAnchor="middle" fontSize="14" fontWeight="800" fill="#4285F4" fontFamily="Arial">G</text></svg>
    ),
    name: "Google Drive",
    description: "Зберігайте документи, договори та файли клієнтів у хмарі Google.",
  },
  {
    category: "Месенджери",
    logo: (
      <svg viewBox="0 0 36 36" className="w-12 h-12"><rect width="36" height="36" rx="8" fill="#25D366"/><path d="M18 7C11.925 7 7 11.925 7 18c0 1.9.494 3.684 1.356 5.234L7 29l5.938-1.328A10.94 10.94 0 0 0 18 29c6.075 0 11-4.925 11-11S24.075 7 18 7Z" fill="white"/></svg>
    ),
    name: "WhatsApp",
    description: "Надсилайте повідомлення клієнтам у WhatsApp прямо з CRM.",
  },
  {
    category: "Платежі",
    logo: <CodeBracketIcon className="w-12 h-12 text-orange-400" />,
    name: "Monobank",
    description: "Автоматична звірка платежів та виставлення рахунків через API.",
  },
  {
    category: "Соцмережі",
    logo: (
      <svg viewBox="0 0 36 36" className="w-12 h-12"><rect width="36" height="36" rx="8" fill="#E60023"/><path d="M18 7C11.925 7 7 11.925 7 18c0 4.648 2.862 8.64 6.975 10.26-.096-.882-.183-2.235.038-3.196.2-.872 1.337-5.666 1.337-5.666s-.341-.682-.341-1.69c0-1.584.919-2.769 2.062-2.769.972 0 1.443.73 1.443 1.604 0 .977-.623 2.442-.945 3.8-.268 1.134.57 2.058 1.687 2.058 2.025 0 3.585-2.134 3.585-5.215 0-2.727-1.96-4.632-4.758-4.632-3.24 0-5.143 2.43-5.143 4.944 0 .979.377 2.028.847 2.602a.34.34 0 0 1 .079.326c-.086.36-.278 1.134-.316 1.292-.05.208-.168.252-.387.152-1.5-.698-2.438-2.894-2.438-4.657 0-3.788 2.752-7.27 7.938-7.27 4.165 0 7.4 2.967 7.4 6.93 0 4.134-2.605 7.456-6.22 7.456-1.215 0-2.358-.632-2.748-1.376l-.747 2.787c-.271 1.042-1.001 2.348-1.49 3.143A11 11 0 0 0 18 29c6.075 0 11-4.925 11-11S24.075 7 18 7Z" fill="white"/></svg>
    ),
    name: "Pinterest",
    description: "Просувайте товари та залучайте покупців через Pinterest Shopping.",
  },
];

const CATEGORIES = ["Всі", ...Array.from(new Set(ALL_INTEGRATIONS.map(i => i.category))).sort()];

/* ─── Grid card ──────────────────────────────────────────── */

function GridCard({ logo, name, description, category }: Integration) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-all duration-200 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100 rounded-md px-2.5 py-1">
          {category}
        </span>
      </div>
      <div>{logo}</div>
      <div>
        <p className="font-semibold text-gray-900 text-base mb-1.5">{name}</p>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("Всі");

  const filtered = activeCategory === "Всі"
    ? ALL_INTEGRATIONS
    : ALL_INTEGRATIONS.filter(i => i.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-white pt-32 pb-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 bg-gray-100">
            <CodeBracketIcon className="w-6 h-6 text-gray-500" />
          </div>
          <h1 className="text-h2 text-gray-900 mb-5">
            Підключіться до улюблених сервісів
          </h1>
          <p className="text-t1 text-gray-500 mb-10 max-w-xl mx-auto">
            My Community інтегрується з інструментами, які ви вже використовуєте — без зайвих налаштувань і технічних знань.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
            className="inline-flex items-center justify-center text-white font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200 hover:opacity-90"
            style={{ background: "#29ABE2" }}
          >
            Записатися на демо-перегляд
          </button>
        </div>
      </section>

      {/* ── Catalog ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-[1080px] mx-auto flex gap-10 items-start">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:flex flex-col gap-1 w-48 flex-shrink-0 sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 px-3">
              Категорії
            </p>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-white text-gray-900 border border-gray-100"
                    : "text-gray-500 hover:text-gray-800 hover:bg-white/60"
                }`}
              >
                {cat === "Всі" ? "Всі інтеграції" : cat}
              </button>
            ))}
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Mobile category tabs */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150 ${
                    activeCategory === cat
                      ? "bg-white text-gray-900 border border-gray-100"
                      : "text-gray-500 bg-gray-100 hover:text-gray-800"
                  }`}
                >
                  {cat === "Всі" ? "Всі" : cat}
                </button>
              ))}
            </div>

            {/* Category label */}
            <p className="text-sm font-semibold text-gray-400 mb-6">
              {activeCategory === "Всі" ? "Всі інтеграції" : activeCategory}
              <span className="ml-2 text-gray-300">· {filtered.length}</span>
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((item, i) => (
                <GridCard key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
