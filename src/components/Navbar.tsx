"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function openDemoModal() {
  window.dispatchEvent(new CustomEvent("open-demo-modal"));
}

const pages = [
  { label: "Інтеграції", href: "/integrations" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo → home */}
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

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-semibold text-gray-700 transition-colors px-4 py-2.5"
              onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}
            >
              Увійти
            </a>
            <button
              onClick={openDemoModal}
              className="text-white text-sm font-semibold rounded-lg px-6 py-2.5 transition-all duration-200"
              style={{ background: "#29ABE2" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1A8EC4")}
              onMouseLeave={e => (e.currentTarget.style.background = "#29ABE2")}
            >
              Записатись на демо
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {pages.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block text-sm font-medium text-gray-700 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); openDemoModal(); }}
            className="block w-full text-center text-white text-sm font-semibold rounded-lg px-5 py-2.5 transition-colors mt-2"
            style={{ background: "#29ABE2" }}
          >
            Записатись на демо
          </button>
        </div>
      )}
    </nav>
  );
}
