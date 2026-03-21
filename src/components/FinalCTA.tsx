"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Send } from "lucide-react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const bullets = [
  "Безкоштовна демо-презентація — побачите систему в дії за 30 хвилин",
  "Персональна консультація — підберемо рішення під ваш бізнес",
  "Безболісний старт — допоможемо з онбордингом та налаштуванням",
];

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 bg-white">
      <div
        style={{ maxWidth: 560, marginLeft: "auto", marginRight: "auto", paddingLeft: 24, paddingRight: 24 }}
      >
        {/* Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200">
            <span>🇺🇦</span>
            Підтримуємо український бізнес
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-h2 text-gray-900 mb-6" style={{ textAlign: "center" }}>
          Ми запрошуємо<br />український бізнес
        </h2>

        {/* Subtitle */}
        <p className="text-t1 text-gray-500 mb-10" style={{ textAlign: "center" }}>
          Приєднуйтесь до 500+ компаній, які вже управляють бізнесом ефективно з My Community
        </p>

        {/* Bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {bullets.map((bullet, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div
                style={{
                  flexShrink: 0, width: 20, height: 20, borderRadius: "50%",
                  background: "#29ABE2", display: "flex", alignItems: "center",
                  justifyContent: "center", marginTop: 2,
                }}
              >
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600 text-sm leading-relaxed">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Mission quote */}
        <div
          className="rounded-2xl bg-gray-50 border border-gray-200"
          style={{ padding: "24px 32px", marginBottom: 48 }}
        >
          <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
            &ldquo;Наша місія — дати українському бізнесу інструмент, який допоможе рости, незважаючи на жодні виклики.&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32, height: 32, borderRadius: "50%", background: "#E5E7EB",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}
            >
              <span className="text-gray-600 text-xs font-bold">РК</span>
            </div>
            <span className="text-gray-500 text-sm">Засновник My Community</span>
          </div>
        </div>

        {/* Form */}
        {!submitted ? (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 12 }}>
              <input
                type="text"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%", background: "#fff", border: "1px solid #E5E7EB",
                  borderRadius: 12, padding: "14px 20px", fontSize: 14,
                  color: "#111827", outline: "none", boxSizing: "border-box",
                }}
              />
              <input
                type="email"
                placeholder="Email або телефон"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%", background: "#fff", border: "1px solid #E5E7EB",
                  borderRadius: 12, padding: "14px 20px", fontSize: 14,
                  color: "#111827", outline: "none", boxSizing: "border-box",
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%", background: "#29ABE2", color: "#fff",
                  fontWeight: 700, borderRadius: 12, padding: "14px 20px",
                  fontSize: 14, border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                Залишити заявку
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-400 text-xs" style={{ textAlign: "center" }}>
              Натискаючи кнопку, ви погоджуєтесь з умовами обробки персональних даних
            </p>
          </div>
        ) : (
          <div
            className="rounded-2xl bg-gray-50 border border-gray-200"
            style={{ padding: "32px", textAlign: "center" }}
          >
            <div
              style={{
                width: 56, height: 56, borderRadius: "50%", background: "#29ABE2",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <CheckIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-2">Заявку отримано!</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Наш менеджер зв&apos;яжеться з вами найближчим часом для узгодження деталей демо.
            </p>
          </div>
        )}

        {/* Social links */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 40 }}>
          <a
            href="https://t.me/mycommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            <Send size={15} />
            Telegram
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="tel:+380"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            +38 (0XX) XXX-XX-XX
          </a>
        </div>
      </div>
    </section>
  );
}
