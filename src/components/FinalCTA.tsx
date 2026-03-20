"use client";

import { useState } from "react";
import { Check, ArrowRight, Send } from "lucide-react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const bullets = [
  "Безкоштовна демо-презентація — побачите систему в дії за 30 хвилин",
  "Персональна консультація — підберемо рішення під ваш бізнес",
  "Безболісний старт — допоможемо з онбордингом та налаштуванням",
];

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="cta"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0C2D48 0%, #1A5276 40%, #1A8EC4 80%, #29ABE2 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7DD3F0, transparent)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #BAE6FD, transparent)", transform: "translate(-30%, 30%)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="text-base">🇺🇦</span>
          <span className="text-white/90 text-sm font-medium">Підтримуємо український бізнес</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Ми запрошуємо{" "}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #BAE6FD, #E0F2FE)" }}>
            український бізнес
          </span>
        </h2>

        <p className="text-sky-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Приєднуйтесь до 500+ компаній, які вже управляють бізнесом ефективно з My Community
        </p>

        {/* Bullets */}
        <div className="flex flex-col items-start sm:items-center gap-4 mb-10 max-w-xl mx-auto">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3 text-left">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center mt-0.5">
                <Check size={12} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-white/90 text-sm leading-relaxed">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Mission box */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 mb-12 max-w-2xl mx-auto">
          <p className="text-white/90 text-base leading-relaxed italic">
            &ldquo;Наша місія — дати українському бізнесу інструмент, який допоможе рости, незважаючи на жодні виклики. My Community — це не просто система, це ваш надійний партнер у розвитку.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-8 h-8 rounded-full bg-sky-400/40 flex items-center justify-center">
              <span className="text-white text-xs font-bold">РК</span>
            </div>
            <p className="text-white/70 text-sm font-medium">Засновник My Community</p>
          </div>
        </div>

        {/* Form */}
        {!submitted ? (
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
              <input
                type="text"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-white/15 border border-white/25 rounded-full px-5 py-3.5 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
              />
              <input
                type="email"
                placeholder="Email або телефон"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/15 border border-white/25 rounded-full px-5 py-3.5 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-white text-sky-600 font-bold rounded-full px-7 py-3.5 text-sm hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
              >
                Залишити заявку
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-white/40 text-xs">
              Натискаючи кнопку, ви погоджуєтесь з умовами обробки персональних даних
            </p>
          </div>
        ) : (
          <div className="bg-white/15 border border-white/25 rounded-2xl px-8 py-8 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-white" strokeWidth={3} />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Заявку отримано!</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Наш менеджер зв&apos;яжеться з вами найближчим часом для узгодження деталей демо.
            </p>
          </div>
        )}

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="https://t.me/mycommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
          >
            <Send size={15} />
            Telegram
          </a>
          <span className="text-white/20">|</span>
          <a
            href="tel:+380"
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            +38 (0XX) XXX-XX-XX
          </a>
        </div>
      </div>
    </section>
  );
}
