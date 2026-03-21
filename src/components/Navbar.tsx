"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  UsersIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  ArchiveBoxIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function openDemoModal() {
  window.dispatchEvent(new CustomEvent("open-demo-modal"));
}

const products = [
  {
    icon: UsersIcon,
    color: "#29ABE2",
    bg: "#E0F5FD",
    name: "CRM та продажі",
    description: "Воронка, картки клієнтів, аналітика угод",
    href: "#",
  },
  {
    icon: WrenchScrewdriverIcon,
    color: "#F59E0B",
    bg: "#FEF3C7",
    name: "Виробництво",
    description: "Планування процесів, замовлення, контроль якості",
    href: "#",
  },
  {
    icon: ClipboardDocumentListIcon,
    color: "#8B5CF6",
    bg: "#EDE9FE",
    name: "Проєкти та задачі",
    description: "Канбан-дошки, терміни, виконавці",
    href: "#",
  },
  {
    icon: ArchiveBoxIcon,
    color: "#10B981",
    bg: "#D1FAE5",
    name: "Склад",
    description: "Облік залишків, рух товарів, інвентаризація",
    href: "#",
  },
  {
    icon: UserGroupIcon,
    color: "#EF4444",
    bg: "#FEE2E2",
    name: "HR процеси",
    description: "Штатний розклад, відпустки, зарплата",
    href: "#",
  },
];

const pages = [
  { label: "Ціни", href: "/pricing" },
  { label: "Відгуки", href: "/reviews" },
  { label: "Інтеграції", href: "/integrations" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setProductsOpen(false);
  }, [pathname]);

  const shadow = (scrolled || productsOpen) ? "0 2px 20px rgba(0,0,0,0.08)" : "none";

  return (
    /* Outer wrapper — fixed, holds nav bar + dropdown as siblings */
    <div ref={wrapperRef} className="fixed top-0 left-0 right-0 z-50" style={{ boxShadow: shadow }}>

      {/* ── Nav bar ── */}
      <nav className={`bg-white transition-colors duration-150 ${productsOpen ? "" : "border-b border-gray-100"}`}>
        <div className="w-full px-6">
          <div className="flex items-center h-16">

            {/* Left — Logo */}
            <div className="flex-1 flex items-center">
              <a href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="My Community"
                  width={180}
                  height={44}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </a>
            </div>

            {/* Center — Nav links (desktop) */}
            <div className="flex-1 hidden md:flex items-center justify-center gap-8">

              {/* Продукти dropdown trigger */}
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 text-sm font-medium transition-colors select-none"
                onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
                onMouseLeave={e => (e.currentTarget.style.color = productsOpen ? "#29ABE2" : "")}
                style={{ color: productsOpen ? "#29ABE2" : "" }}
              >
                Продукти
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {/* Page links */}
              {pages.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <a
                    key={href}
                    href={href}
                    className="text-sm font-medium transition-colors"
                    style={{ color: active ? "#29ABE2" : "" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
                    onMouseLeave={e => (e.currentTarget.style.color = active ? "#29ABE2" : "")}
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            {/* Right — CTA (desktop) + burger (mobile) */}
            <div className="flex-1 flex items-center justify-end gap-3">
              <a
                href="#"
                className="hidden md:block text-sm font-semibold text-gray-700 transition-colors px-4 py-2.5"
                onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >
                Увійти
              </a>
              <button
                onClick={openDemoModal}
                className="hidden md:block text-white text-sm font-semibold rounded-lg px-6 py-2.5 transition-all duration-200"
                style={{ background: "#29ABE2" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#1A8EC4")}
                onMouseLeave={e => (e.currentTarget.style.background = "#29ABE2")}
              >
                Записатись на демо
              </button>
              <button
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            <div className="pb-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-2">Продукти</p>
              {products.map(({ name, href, icon: Icon, color, bg }) => (
                <a
                  key={name}
                  href={href}
                  className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon style={{ color, width: 14, height: 14 }} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{name}</span>
                </a>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-2 space-y-1">
              {pages.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm font-medium text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => { setMobileOpen(false); openDemoModal(); }}
                className="block w-full text-center text-white text-sm font-semibold rounded-lg px-5 py-2.5 transition-colors"
                style={{ background: "#29ABE2" }}
              >
                Записатись на демо
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Desktop dropdown panel — sibling of nav, own backdrop-blur context ── */}
      {productsOpen && (
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="max-w-[1100px] mx-auto px-6 py-6">
            <div className="flex gap-10">

              {/* Products — two independent flex columns */}
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-4">Модулі</p>
                <div className="flex gap-2">
                  {[products.filter((_, i) => i % 2 === 0), products.filter((_, i) => i % 2 === 1)].map((col, ci) => (
                    <div key={ci} className="flex-1 flex flex-col gap-1">
                      {col.map(({ icon: Icon, color, bg, name, description, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50/80 transition-colors group"
                          onClick={() => setProductsOpen(false)}
                        >
                          <div
                            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                            style={{ background: bg }}
                          >
                            <Icon style={{ color, width: 18, height: 18 }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 leading-tight">{name}</p>
                            <p className="text-xs text-gray-400 mt-0.5 leading-snug">{description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-gray-100 self-stretch" />

              {/* Highlight card */}
              <div className="w-56 flex-shrink-0">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-4">Повний пакет</p>
                <div className="rounded-xl border border-gray-200 p-4 bg-white/60">
                  <p className="text-sm font-bold text-gray-900 mb-1">Усі модулі разом</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    CRM, Виробництво, Проєкти, Склад та HR в одній системі
                  </p>
                  <button
                    onClick={() => { setProductsOpen(false); openDemoModal(); }}
                    className="w-full text-center text-white text-xs font-semibold rounded-lg px-4 py-2 transition-all"
                    style={{ background: "#29ABE2" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#1A8EC4")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#29ABE2")}
                  >
                    Записатись на демо
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
