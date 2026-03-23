"use client";

import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

const problemIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.655m5.896-3.896 3.818-.73 1.768 1.768-.73 3.818-3.818.73-1.768-1.768.73-3.818Z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  ),
];

export default function Story() {
  const { lang } = useLang();
  const t = i18n[lang].story;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-6">
          <h2
            className="text-gray-900 font-bold leading-tight mb-6"
            style={{ fontSize: "48px", letterSpacing: "-0.02em" }}
          >
            {t.title}
          </h2>
          <p className="text-t2 text-gray-500 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-3 mt-14 mb-10 divide-x divide-gray-200 -mx-8">
          {t.problems.map((p, i) => (
            <div key={p.label} className="px-8 flex flex-col items-center text-center">
              <div className="text-gray-700 mb-4">{problemIcons[i]}</div>
              <p className="text-t2 font-semibold text-gray-900">{p.label}</p>
            </div>
          ))}
        </div>

        <p className="text-t2 text-gray-500 text-center max-w-3xl mx-auto mb-12">{t.answer}</p>

        <div className="relative w-full">
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center relative"
            style={{ height: "536px", background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 40%, #fde8d8 100%)" }}
          >
            <div className="text-center text-blue-300/70">
              <svg className="w-14 h-14 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm font-semibold">{t.photoLabel}</p>
              <p className="text-xs mt-1 opacity-70">{t.photoNames}</p>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-5 py-2.5 text-center whitespace-nowrap">
                <p className="text-xs font-semibold text-gray-700">{t.teamLabel}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
