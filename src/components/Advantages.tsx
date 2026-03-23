"use client";

import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

export default function Advantages() {
  const { lang } = useLang();
  const t = i18n[lang].advantages;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-5">{t.eyebrow}</p>
          <h2 className="text-h2 text-gray-900 mb-6">{t.title}</h2>
          <p className="text-t2 text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="flex flex-col gap-4">

          <div className="rounded-xl overflow-hidden bg-gray-100 flex flex-col md:flex-row min-h-[460px]">
            <div className="relative flex-1 min-h-[220px] md:min-h-0 bg-gray-200 flex flex-col justify-end p-8">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">My Community</p>
              <p className="text-base font-bold text-gray-800 leading-snug max-w-[220px]">{t.mainCardLabel}</p>
            </div>
            <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col divide-y divide-gray-200 border-t md:border-t-0 md:border-l border-gray-200">
              {t.features.map((item, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                  <span className="text-gray-400 text-lg leading-none">{i === 0 ? "×" : "+"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.cards.map((card, i) => (
              <div key={i} className="rounded-lg overflow-hidden bg-gray-100 flex flex-col min-h-[340px]">
                <div className="flex-1 bg-gray-200" />
                <div className="px-6 py-5">
                  <p className="text-sm font-bold text-gray-900">{card.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
