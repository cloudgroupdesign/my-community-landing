"use client";

import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

export default function WhoWeAre() {
  const { lang } = useLang();
  const t = i18n[lang].whoWeAre;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-5">{t.eyebrow}</p>
            <h2 className="text-h2 text-gray-900 mb-6">{t.title}</h2>
            <p className="text-t2 text-gray-500 leading-relaxed mb-4">{t.p1}</p>
            <p className="text-t2 text-gray-500 leading-relaxed">{t.p2}</p>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center relative"
              style={{ height: "420px", background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 40%, #fde8d8 100%)" }}
            >
              <div className="text-center text-blue-300/70">
                <svg className="w-14 h-14 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm font-semibold">{t.photoLabel}</p>
                <p className="text-xs mt-1 opacity-70">{t.photoNames}</p>
              </div>
              <div className="absolute bottom-5 left-5">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl px-5 py-2.5">
                  <p className="text-xs font-semibold text-gray-700">{t.teamLabel}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
