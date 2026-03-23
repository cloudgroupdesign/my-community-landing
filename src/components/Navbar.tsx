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
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

const productIcons = [UsersIcon, WrenchScrewdriverIcon, ClipboardDocumentListIcon, ArchiveBoxIcon, UserGroupIcon];
const productColors = ["#29ABE2", "#F59E0B", "#8B5CF6", "#10B981", "#EF4444"];
const productBgs = ["#E0F5FD", "#FEF3C7", "#EDE9FE", "#D1FAE5", "#FEE2E2"];

function openDemoModal() {
  window.dispatchEvent(new CustomEvent("open-demo-modal"));
}

export default function Navbar() {
  const { lang } = useLang();
  const t = i18n[lang].nav;

  const products = t.items.map((item, i) => ({
    icon: productIcons[i],
    color: productColors[i],
    bg: productBgs[i],
    name: item.name,
    description: item.description,
    href: "#",
  }));

  const pages = [
    { label: t.pricing, href: "/pricing" },
    { label: t.reviews, href: "/reviews" },
    { label: t.integrations, href: "/integrations" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
  }, [pathname]);

  const shadow = (scrolled || productsOpen) ? "0 2px 20px rgba(0,0,0,0.08)" : "none";

  return (
    <div ref={wrapperRef} className="fixed top-0 left-0 right-0 z-50" style={{ boxShadow: shadow }}>

      <nav className={`bg-white transition-colors duration-150 ${productsOpen ? "" : "border-b border-gray-100"}`}>
        <div className="w-full px-6">
          <div className="flex items-center h-16">

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

            <div className="flex-1 hidden md:flex items-center justify-center gap-8">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 text-sm font-medium transition-colors select-none"
                onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
                onMouseLeave={e => (e.currentTarget.style.color = productsOpen ? "#29ABE2" : "")}
                style={{ color: productsOpen ? "#29ABE2" : "" }}
              >
                {t.products}
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

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

            <div className="flex-1 flex items-center justify-end gap-3">
              <a
                href="#"
                className="hidden md:block text-sm font-semibold text-gray-700 transition-colors px-4 py-2.5"
                onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >
                {t.signIn}
              </a>
              <button
                onClick={openDemoModal}
                className="hidden md:block text-white text-sm font-semibold rounded-lg px-6 py-2.5 transition-all duration-200"
                style={{ background: "#29ABE2" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#1A8EC4")}
                onMouseLeave={e => (e.currentTarget.style.background = "#29ABE2")}
              >
                {t.bookDemo}
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

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            <div className="pb-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 py-2">{t.productsMobileLabel}</p>
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
                {t.bookDemo}
              </button>
            </div>
          </div>
        )}
      </nav>

      {productsOpen && (
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="max-w-[1100px] mx-auto px-6 py-6">
            <div className="flex gap-10">

              <div className="flex-1">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-4">{t.modules}</p>
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

              <div className="w-px bg-gray-100 self-stretch" />

              <div className="w-56 flex-shrink-0">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-4">{t.fullPackage}</p>
                <div className="rounded-xl border border-gray-200 p-4 bg-white/60">
                  <p className="text-sm font-bold text-gray-900 mb-1">{t.allModules}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{t.allModulesDesc}</p>
                  <button
                    onClick={() => { setProductsOpen(false); openDemoModal(); }}
                    className="w-full text-center text-white text-xs font-semibold rounded-lg px-4 py-2 transition-all"
                    style={{ background: "#29ABE2" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#1A8EC4")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#29ABE2")}
                  >
                    {t.bookDemo}
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
