"use client";

import Image from "next/image";
import { CodeBracketIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

/* ─── Data ───────────────────────────────────────────────── */

const integrations = [
  {
    logo: <Image src="/google-calendar.png" alt="Google Calendar" width={40} height={40} className="object-contain" />,
    name: "Google Calendar",
    description: "Автоматична синхронізація зустрічей, задач та подій команди в реальному часі.",
  },
  {
    logo: <Image src="/zoom.png" alt="Zoom" width={40} height={40} className="object-contain" />,
    name: "Zoom",
    description: "Запускайте відеодзвінки прямо з картки клієнта, угоди або завдання.",
  },
  {
    logo: <Image src="/amazon.png" alt="Amazon" width={40} height={40} className="object-contain" />,
    name: "Amazon",
    description: "Управляйте замовленнями та товарами Amazon Marketplace з єдиного кабінету.",
  },
  {
    logo: <Image src="/ebay.png" alt="eBay" width={40} height={40} className="object-contain" />,
    name: "eBay",
    description: "Синхронізація лістингів, залишків та автоматична обробка замовлень eBay.",
  },
  {
    logo: <Image src="/rozetka.png" alt="Rozetka" width={40} height={40} className="object-contain" />,
    name: "Rozetka",
    description: "Автоматична обробка замовлень з найбільшого українського маркетплейсу.",
  },
  {
    logo: (
      <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: "#E0F2FE" }}>
        <CodeBracketIcon className="w-5 h-5" style={{ color: "#29ABE2" }} />
      </div>
    ),
    name: "REST API",
    description: "Підключіть будь-який сервіс або власну розробку через відкритий REST API.",
    isApi: true,
  },
];

/* ─── Component ──────────────────────────────────────────── */

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#29ABE2" }}>
            Екосистема
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">Підключіться до улюблених сервісів</h2>
          <p className="text-t2 text-gray-500 max-w-2xl mx-auto">
            My Community інтегрується з інструментами, які ви вже використовуєте — без зайвих налаштувань
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl p-6 border border-gray-100 bg-white transition-all duration-200 hover:shadow-md hover:border-gray-200 cursor-default group"
              style={item.isApi ? { borderColor: "#BAE6FD", background: "#F0F9FF" } : {}}
            >
              {/* Logo */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-gray-100 overflow-hidden p-1"
                style={item.isApi ? { background: "#E0F2FE", borderColor: "#BAE6FD" } : {}}
              >
                {item.logo}
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold text-gray-900 mb-1">{item.name}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center mb-8">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-sm border border-gray-200 text-gray-700 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
          >
            Дивитись всі інтеграції
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 max-w-2xl mx-auto">
          * Перелік підтримуваних інтеграцій постійно розширюється. Назви та логотипи є власністю відповідних компаній та використовуються лише для ілюстрації сумісності.
        </p>
      </div>
    </section>
  );
}
