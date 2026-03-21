import { Send, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import DemoButton from "@/components/DemoButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* Main footer */}
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand col */}
          <div className="space-y-5">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="My Community"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Сучасна ERP/CRM платформа для українського бізнесу. Автоматизуйте процеси та ростіть ефективніше.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-base">🇺🇦</span>
              <span className="text-gray-400 text-xs">Зроблено в Україні</span>
            </div>
          </div>

          {/* Links col */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-900 font-semibold text-sm mb-4">Продукт</p>
              <ul className="space-y-3">
                {[
                  { label: "Можливості", href: "#features" },
                  { label: "Ціни", href: "/pricing" },
                  { label: "Відгуки", href: "/reviews" },
                  { label: "Інтеграції", href: "/integrations" },
                  { label: "Безпека", href: "#" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm mb-4">Компанія</p>
              <ul className="space-y-3">
                {["Про нас", "Блог", "Кар'єра", "Контакти"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact col */}
          <div className="space-y-5">
            <p className="text-gray-900 font-semibold text-sm">Контакти</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Send size={15} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">Telegram</p>
                  <p className="text-xs text-gray-400">@mycommunity</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Instagram size={15} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">Instagram</p>
                  <p className="text-xs text-gray-400">@mycommunity.ua</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Phone size={15} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">Телефон</p>
                  <p className="text-xs text-gray-400">+38 (0XX) XXX-XX-XX</p>
                </div>
              </div>
            </div>

            <DemoButton
              className="inline-flex items-center gap-2 text-white font-semibold text-sm rounded-lg px-5 py-2.5 transition-all mt-2 hover:opacity-90"
              style={{ background: "#29ABE2" }}
            >
              Замовити демо
            </DemoButton>
          </div>
        </div>
      </div>

      {/* Bottom bar — border only within 1080px content width */}
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="border-t border-gray-100 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {currentYear} My Community. Усі права захищено.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
