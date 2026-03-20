"use client";

import { Send, Instagram, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0F0E1A" }} className="text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand col */}
          <div className="space-y-5">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="My Community"
                width={160}
                height={40}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Сучасна ERP/CRM платформа для українського бізнесу. Автоматизуйте процеси та ростіть ефективніше.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-base">🇺🇦</span>
              <span className="text-gray-500 text-xs">Зроблено в Україні</span>
            </div>
          </div>

          {/* Links col */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-white font-semibold text-sm mb-4">Продукт</p>
              <ul className="space-y-3">
                {["Можливості", "Інтеграції", "Ціни", "Безпека"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">Компанія</p>
              <ul className="space-y-3">
                {["Про нас", "Блог", "Кар'єра", "Контакти"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact col */}
          <div className="space-y-5">
            <p className="text-white font-semibold text-sm">Контакти</p>

            {/* Social links */}
            <div className="space-y-3">
              <a
                href="https://t.me/mycommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#29A9EB]/20 border border-white/10 flex items-center justify-center transition-all">
                  <Send size={15} className="text-gray-400 group-hover:text-[#29A9EB] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">Telegram</p>
                  <p className="text-xs text-gray-500">@mycommunity</p>
                </div>
              </a>

              <a
                href="https://instagram.com/mycommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-pink-500/20 border border-white/10 flex items-center justify-center transition-all">
                  <Instagram size={15} className="text-gray-400 group-hover:text-pink-400 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">Instagram</p>
                  <p className="text-xs text-gray-500">@mycommunity.ua</p>
                </div>
              </a>

              <a href="tel:+380" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-sky-500/20 border border-white/10 flex items-center justify-center transition-all">
                  <Phone size={15} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">Телефон</p>
                  <p className="text-xs text-gray-500">+38 (0XX) XXX-XX-XX</p>
                </div>
              </a>
            </div>

            {/* CTA mini */}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm rounded-full px-5 py-2.5 transition-all mt-2"
            >
              Замовити демо
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} My Community. Усі права захищено.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
