"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CodeBracketIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

/* ─── Integration cards data ─────────────────────────────── */

const row1 = [
  {
    logo: <Image src="/google-calendar.png" alt="Google Calendar" width={36} height={36} className="object-contain" />,
    name: "Google Calendar",
    description: "Синхронізація зустрічей та подій команди в реальному часі.",
  },
  {
    logo: <Image src="/zoom.png" alt="Zoom" width={36} height={36} className="object-contain" />,
    name: "Zoom",
    description: "Запускайте відеодзвінки прямо з картки клієнта або угоди.",
  },
  {
    logo: <Image src="/amazon.png" alt="Amazon" width={36} height={36} className="object-contain" />,
    name: "Amazon",
    description: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету.",
  },
  {
    logo: (
      <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: "#E0F2FE" }}>
        <CodeBracketIcon className="w-5 h-5" style={{ color: "#29ABE2" }} />
      </div>
    ),
    name: "Nova Poshta API",
    description: "Автоматичне створення ТТН та відстеження доставки Новою Поштою.",
  },
  {
    logo: <Image src="/rozetka.png" alt="Rozetka" width={36} height={36} className="object-contain" />,
    name: "Rozetka",
    description: "Обробляйте замовлення з найбільшого українського маркетплейсу.",
  },
  {
    logo: (
      <svg viewBox="0 0 36 36" className="w-9 h-9"><rect width="36" height="36" rx="8" fill="#0088CC"/><path d="M18 8C12.477 8 8 12.239 8 17.469c0 2.944 1.406 5.57 3.608 7.316L10.5 28l3.428-1.056A10.3 10.3 0 0 0 18 27.938c5.523 0 10-4.239 10-9.469S23.523 8 18 8Z" fill="white"/></svg>
    ),
    name: "Telegram Bot",
    description: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram.",
  },
];

const row2 = [
  {
    logo: <Image src="/ebay.png" alt="eBay" width={36} height={36} className="object-contain" />,
    name: "eBay",
    description: "Синхронізація лістингів та автоматична обробка замовлень eBay.",
  },
  {
    logo: (
      <svg viewBox="0 0 36 36" className="w-9 h-9"><rect width="36" height="36" rx="8" fill="#1877F2"/><path d="M22.5 18h-3v10h-4V18h-2v-3.5h2v-2c0-2.8 1.2-4.5 4.5-4.5H22v3.5h-1.5c-1 0-1.5.4-1.5 1.5v1.5H22l-.5 3.5Z" fill="white"/></svg>
    ),
    name: "Facebook / Meta",
    description: "Збирайте ліди з Facebook Leads Ads прямо у воронку продажів.",
  },
  {
    logo: (
      <svg viewBox="0 0 36 36" className="w-9 h-9"><rect width="36" height="36" rx="8" fill="#fff" stroke="#E5E7EB"/><text x="18" y="24" textAnchor="middle" fontSize="14" fontWeight="800" fill="#4285F4" fontFamily="Arial">G</text></svg>
    ),
    name: "Google Drive",
    description: "Зберігайте документи, договори та файли клієнтів у хмарі Google.",
  },
  {
    logo: (
      <svg viewBox="0 0 36 36" className="w-9 h-9"><rect width="36" height="36" rx="8" fill="#25D366"/><path d="M18 7C11.925 7 7 11.925 7 18c0 1.9.494 3.684 1.356 5.234L7 29l5.938-1.328A10.94 10.94 0 0 0 18 29c6.075 0 11-4.925 11-11S24.075 7 18 7Z" fill="white"/></svg>
    ),
    name: "WhatsApp",
    description: "Надсилайте повідомлення клієнтам у WhatsApp прямо з CRM.",
  },
  {
    logo: (
      <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: "#FFF3E0" }}>
        <CodeBracketIcon className="w-5 h-5 text-orange-500" />
      </div>
    ),
    name: "Monobank",
    description: "Автоматична звірка платежів та виставлення рахунків через API.",
  },
  {
    logo: (
      <svg viewBox="0 0 36 36" className="w-9 h-9"><rect width="36" height="36" rx="8" fill="#E60023"/><path d="M18 7C11.925 7 7 11.925 7 18c0 4.648 2.862 8.64 6.975 10.26-.096-.882-.183-2.235.038-3.196.2-.872 1.337-5.666 1.337-5.666s-.341-.682-.341-1.69c0-1.584.919-2.769 2.062-2.769.972 0 1.443.73 1.443 1.604 0 .977-.623 2.442-.945 3.8-.268 1.134.57 2.058 1.687 2.058 2.025 0 3.585-2.134 3.585-5.215 0-2.727-1.96-4.632-4.758-4.632-3.24 0-5.143 2.43-5.143 4.944 0 .979.377 2.028.847 2.602a.34.34 0 0 1 .079.326c-.086.36-.278 1.134-.316 1.292-.05.208-.168.252-.387.152-1.5-.698-2.438-2.894-2.438-4.657 0-3.788 2.752-7.27 7.938-7.27 4.165 0 7.4 2.967 7.4 6.93 0 4.134-2.605 7.456-6.22 7.456-1.215 0-2.358-.632-2.748-1.376l-.747 2.787c-.271 1.042-1.001 2.348-1.49 3.143A11 11 0 0 0 18 29c6.075 0 11-4.925 11-11S24.075 7 18 7Z" fill="white"/></svg>
    ),
    name: "Pinterest",
    description: "Просувайте товари та залучайте покупців через Pinterest Shopping.",
  },
];

/* ─── Marquee card ───────────────────────────────────────── */

function IntegrationCard({ logo, name, description }: { logo: React.ReactNode; name: string; description: string }) {
  return (
    <div className="flex-shrink-0 flex items-start gap-4 bg-white border border-gray-100 rounded-2xl mx-2 shadow-sm" style={{ width: 300, padding: 24 }}>
      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 border border-gray-100 overflow-hidden p-1">
        {logo}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 text-sm leading-tight mb-1.5">{name}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Component ──────────────────────────────────────────── */

export default function Integrations() {
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Pause marquee animations when section is not visible (saves GPU)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const paused = !entry.isIntersecting;
        row1Ref.current?.style.setProperty("animation-play-state", paused ? "paused" : "running");
        row2Ref.current?.style.setProperty("animation-play-state", paused ? "paused" : "running");
      },
      { rootMargin: "200px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="integrations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 mb-12">
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
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", contain: "layout style" }}>
        <div ref={row1Ref} className="flex" style={{ animation: "marqueeLeft 40s linear infinite", willChange: "transform" }}>
          {row1Doubled.map((item, i) => (
            <IntegrationCard key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative mb-12" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", contain: "layout style" }}>
        <div ref={row2Ref} className="flex" style={{ animation: "marqueeRight 40s linear infinite", willChange: "transform" }}>
          {row2Doubled.map((item, i) => (
            <IntegrationCard key={i} {...item} />
          ))}
        </div>
      </div>

      {/* CTA */}
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
      <p className="text-center text-xs text-gray-400 max-w-2xl mx-auto px-6">
        * Перелік підтримуваних інтеграцій постійно розширюється. Назви та логотипи є власністю відповідних компаній та використовуються лише для ілюстрації сумісності.
      </p>
    </section>
  );
}
