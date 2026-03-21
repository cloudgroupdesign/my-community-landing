"use client";

import { CodeBracketIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

/* ─── Inline SVG brand logos ─────────────────────────────── */

function GoogleCalendarLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect x="8" y="8" width="48" height="48" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="8" y="8" width="48" height="13" rx="6" fill="#4285F4"/>
      <rect x="8" y="15" width="48" height="6" fill="#4285F4"/>
      <text x="32" y="44" textAnchor="middle" fontSize="20" fontWeight="700" fill="#4285F4" fontFamily="Arial">31</text>
      <line x1="8" y1="27" x2="56" y2="27" stroke="#E5E7EB" strokeWidth="1.5"/>
    </svg>
  );
}

function ZoomLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect width="64" height="64" rx="14" fill="#2D8CFF"/>
      <path d="M10 22a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V22Z" fill="white"/>
      <path d="M42 29l10-7v20l-10-7V29Z" fill="white"/>
    </svg>
  );
}

function AmazonLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect width="64" height="64" rx="14" fill="#F9F9F9" stroke="#E5E7EB" strokeWidth="1.5"/>
      <text x="32" y="36" textAnchor="middle" fontSize="30" fontWeight="900" fill="#1a1a1a" fontFamily="Arial, sans-serif">a</text>
      <path d="M14 46 Q32 54 50 46" stroke="#F7941D" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M46 43 L50 46 L47 49" stroke="#F7941D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function EbayLogo() {
  return (
    <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <text x="0" y="40" fontSize="42" fontWeight="900" fill="#E53238" fontFamily="Arial, sans-serif">e</text>
      <text x="20" y="40" fontSize="42" fontWeight="900" fill="#0064D2" fontFamily="Arial, sans-serif">b</text>
      <text x="42" y="40" fontSize="42" fontWeight="900" fill="#F5AF02" fontFamily="Arial, sans-serif">a</text>
      <text x="63" y="40" fontSize="42" fontWeight="900" fill="#86B817" fontFamily="Arial, sans-serif">y</text>
    </svg>
  );
}

function RozetkaLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <circle cx="32" cy="32" r="30" fill="#8DC63F"/>
      <circle cx="32" cy="32" r="30" stroke="#5A8E1E" strokeWidth="2"/>
      <circle cx="24" cy="28" r="4" fill="#1a1a1a"/>
      <circle cx="40" cy="28" r="4" fill="#1a1a1a"/>
      <path d="M16 36 Q32 52 48 36" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <path d="M36 21 Q40 18 44 21" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M20 21 Q24 18 28 21" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function RestApiLogo() {
  return (
    <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: "#E0F2FE" }}>
      <CodeBracketIcon className="w-5 h-5" style={{ color: "#29ABE2" }} />
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────── */

const integrations = [
  {
    logo: <GoogleCalendarLogo />,
    name: "Google Calendar",
    description: "Автоматична синхронізація зустрічей, задач та подій команди в реальному часі.",
  },
  {
    logo: <ZoomLogo />,
    name: "Zoom",
    description: "Запускайте відеодзвінки прямо з картки клієнта, угоди або завдання.",
  },
  {
    logo: <AmazonLogo />,
    name: "Amazon",
    description: "Управляйте замовленнями та товарами Amazon Marketplace з єдиного кабінету.",
  },
  {
    logo: <EbayLogo />,
    name: "eBay",
    description: "Синхронізація лістингів, залишків та автоматична обробка замовлень eBay.",
  },
  {
    logo: <RozetkaLogo />,
    name: "Rozetka",
    description: "Автоматична обробка замовлень з найбільшого українського маркетплейсу.",
  },
  {
    logo: <RestApiLogo />,
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
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 border border-gray-100 overflow-hidden"
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
