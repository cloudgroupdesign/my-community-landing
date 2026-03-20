"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="My Community"
              width={180}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 transition-colors" style={{ ["--hover-color" as string]: "#29ABE2" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}>
              Можливості
            </a>
            <a href="#for-who" className="text-sm font-medium text-gray-600 transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}>
              Для кого
            </a>
            <a href="#integrations" className="text-sm font-medium text-gray-600 transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}>
              Інтеграції
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="text-sm font-semibold text-gray-700 transition-colors px-4 py-2"
              onMouseEnter={e => (e.currentTarget.style.color = "#29ABE2")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}
            >
              Увійти
            </a>
            <a
              href="#cta"
              className="text-white text-sm font-semibold rounded-full px-5 py-2 transition-all duration-200 shadow-sm hover:shadow-md"
              style={{ background: "#29ABE2" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1A8EC4")}
              onMouseLeave={e => (e.currentTarget.style.background = "#29ABE2")}
            >
              Демо-перегляд
            </a>
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
          <a href="#features" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Можливості</a>
          <a href="#for-who" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Для кого</a>
          <a href="#integrations" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Інтеграції</a>
          <a
            href="#cta"
            className="block w-full text-center text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-colors mt-2"
            style={{ background: "#29ABE2" }}
            onClick={() => setMobileOpen(false)}
          >
            Демо-перегляд
          </a>
        </div>
      )}
    </nav>
  );
}
