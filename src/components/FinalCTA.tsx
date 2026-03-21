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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200">
          <span className="text-base leading-none">🇺🇦</span>
          Підтримуємо український бізнес
        </div>

        {/* Headline */}
        <h2 className="text-h2 text-gray-900 mb-6">
          Ми запрошуємо<br />український бізнес
        </h2>

        <p className="text-t1 text-gray-500 max-w-xl mx-auto mb-10">
          Приєднуйтесь до 500+ компаній, які вже управляють бізнесом ефективно з My Community
        </p>

        {/* Bullets */}
        <div className="flex flex-col items-center gap-4 mb-10 max-w-md mx-auto text-left">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#29ABE2" }}>
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600 text-sm leading-relaxed">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Mission quote */}
        <div className="border border-gray-200 rounded-2xl px-8 py-6 mb-12 max-w-xl mx-auto text-left bg-gray-50">
          <p className="text-gray-600 text-sm leading-relaxed italic">
            &ldquo;Наша місія — дати українському бізнесу інструмент, який допоможе рости, незважаючи на жодні виклики.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 text-xs font-bold">РК</span>
            </div>
            <p className="text-gray-500 text-sm">Засновник My Community</p>
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
                className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition-all"
              />
              <input
                type="email"
                placeholder="Email або телефон"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition-all"
              />
              <button
                type="submit"
                className="flex-shrink-0 text-white font-bold rounded-xl px-7 py-3.5 text-sm hover:opacity-90 transition-all duration-200 inline-flex items-center gap-2 group"
                style={{ background: "#29ABE2" }}
              >
                Залишити заявку
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-gray-400 text-xs">
              Натискаючи кнопку, ви погоджуєтесь з умовами обробки персональних даних
            </p>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-2xl px-8 py-8 max-w-md mx-auto bg-gray-50">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#29ABE2" }}>
              <CheckIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-2">Заявку отримано!</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Наш менеджер зв&apos;яжеться з вами найближчим часом для узгодження деталей демо.
            </p>
          </div>
        )}

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <a href="https://t.me/mycommunity" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm transition-colors">
            <Send size={15} />
            Telegram
          </a>
          <span className="text-gray-300">|</span>
          <a href="tel:+380"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm transition-colors">
            <PhoneIcon className="w-4 h-4" />
            +38 (0XX) XXX-XX-XX
          </a>
        </div>
      </div>
    </section>
  );
}
