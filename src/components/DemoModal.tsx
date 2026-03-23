"use client";

import { useState, useEffect, useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

export default function DemoModal() {
  const { lang } = useLang();
  const t = i18n[lang].finalCTA;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
    setSubmitted(false);
    setName("");
    setEmail("");
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    window.addEventListener("open-demo-modal", openModal);
    return () => window.removeEventListener("open-demo-modal", openModal);
  }, [openModal]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={closeModal}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <XMarkIcon className="w-4 h-4 text-gray-600" />
        </button>

        <div className="px-8 pt-8 pb-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200">
                  <span>🇺🇦</span>
                  {t.badge}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{i18n[lang].nav.bookDemo}</h2>
                <p className="text-sm text-gray-500">{t.subtitle}</p>
              </div>

              <div className="flex flex-col gap-2.5 mb-6">
                {t.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#29ABE2" }}>
                      <CheckIcon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-xs text-gray-500 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition-all"
                />
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-xl px-6 py-3.5 text-sm hover:opacity-90 transition-all duration-200 group"
                  style={{ background: "#29ABE2" }}
                >
                  {t.submit}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-gray-400 text-xs text-center">{t.consent}</p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#29ABE2" }}>
                <CheckIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-2">{t.successTitle}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.successDesc}</p>
              <button onClick={closeModal} className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors">
                {t.close}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
