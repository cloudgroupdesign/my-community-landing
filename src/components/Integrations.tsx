"use client";

import { CodeBracketIcon } from "@heroicons/react/24/outline";

/* ─── Inline SVG brand logos ─────────────────────────────── */

function GoogleCalendarLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect width="64" height="64" rx="14" fill="#2D8CFF"/>
      <path d="M10 22a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V22Z" fill="white"/>
      <path d="M42 29l10-7v20l-10-7V29Z" fill="white"/>
    </svg>
  );
}

function AmazonLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect width="64" height="64" rx="14" fill="#F9F9F9" stroke="#E5E7EB" strokeWidth="1.5"/>
      <text x="32" y="34" textAnchor="middle" fontSize="28" fontWeight="900" fill="#1a1a1a" fontFamily="Arial, sans-serif">a</text>
      <path d="M14 44 Q32 52 50 44" stroke="#F7941D" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M46 41 L50 44 L47 47" stroke="#F7941D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function EbayLogo() {
  return (
    <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-7">
      <text x="0" y="34" fontSize="38" fontWeight="900" fill="#E53238" fontFamily="Arial, sans-serif">e</text>
      <text x="18" y="34" fontSize="38" fontWeight="900" fill="#0064D2" fontFamily="Arial, sans-serif">b</text>
      <text x="38" y="34" fontSize="38" fontWeight="900" fill="#F5AF02" fontFamily="Arial, sans-serif">a</text>
      <text x="57" y="34" fontSize="38" fontWeight="900" fill="#86B817" fontFamily="Arial, sans-serif">y</text>
    </svg>
  );
}

function RozetkaLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="32" cy="32" r="30" fill="#8DC63F"/>
      <circle cx="32" cy="32" r="30" stroke="#5A8E1E" strokeWidth="2"/>
      {/* Smiling face */}
      <circle cx="24" cy="28" r="4" fill="#1a1a1a"/>
      <circle cx="40" cy="28" r="4" fill="#1a1a1a"/>
      {/* Wide smile */}
      <path d="M16 36 Q32 52 48 36" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      {/* Wink eyebrow */}
      <path d="M36 21 Q40 18 44 21" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M20 21 Q24 18 28 21" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function RestApiLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-10 h-10">
      <CodeBracketIcon className="w-7 h-7" style={{ color: "#29ABE2" }} />
    </div>
  );
}

/* ─── Integrations data ──────────────────────────────────── */

const integrations = [
  {
    logo: <GoogleCalendarLogo />,
    name: "Google Calendar",
    subtitle: "Синхронізація подій",
  },
  {
    logo: <ZoomLogo />,
    name: "Zoom",
    subtitle: "Відеозустрічі",
  },
  {
    logo: <AmazonLogo />,
    name: "Amazon",
    subtitle: "Маркетплейс",
  },
  {
    logo: <EbayLogo />,
    name: "eBay",
    subtitle: "Торговельна площадка",
  },
  {
    logo: <RozetkaLogo />,
    name: "Rozetka",
    subtitle: "Інтернет-магазин",
  },
  {
    logo: <RestApiLogo />,
    name: "REST API",
    subtitle: "Власні інтеграції",
    isApi: true,
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#29ABE2" }}>
            Екосистема
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Інтеграції</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            My Community легко підключається до сервісів, які ви вже використовуєте
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {integrations.map((integration, i) => (
            <div key={i} className="group flex flex-col items-center gap-3 cursor-pointer">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:-translate-y-1 bg-white border ${
                  integration.isApi ? "border-sky-200" : "border-gray-100"
                }`}
                style={
                  integration.isApi
                    ? { background: "#E0F2FE", boxShadow: "0 0 0 3px rgba(41,171,226,0.12)" }
                    : {}
                }
              >
                {integration.logo}
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800">{integration.name}</p>
                <p className="text-xs text-gray-400">{integration.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* API promo banner */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl px-8 py-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#E0F2FE", border: "1px solid #BAE6FD" }}
              >
                <CodeBracketIcon className="w-6 h-6" style={{ color: "#29ABE2" }} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-0.5">Підключіть власну систему</p>
                <p className="text-gray-500 text-sm">
                  Відкритий REST API дозволяє інтегрувати будь-який сервіс або власну розробку
                </p>
              </div>
            </div>
            <a
              href="#cta"
              className="flex-shrink-0 bg-white font-semibold text-sm rounded-full px-6 py-3 transition-all hover:shadow-md whitespace-nowrap"
              style={{ border: "1px solid #BAE6FD", color: "#0369A1" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#29ABE2")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#BAE6FD")}
            >
              Документація API
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 max-w-2xl mx-auto">
          * Перелік підтримуваних інтеграцій постійно розширюється. Назви та логотипи є власністю відповідних компаній та використовуються лише для ілюстрації сумісності.
        </p>
      </div>
    </section>
  );
}
