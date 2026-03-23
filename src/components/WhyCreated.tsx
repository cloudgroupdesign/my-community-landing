"use client";

import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

export default function WhyCreated() {
  const { lang } = useLang();
  const t = i18n[lang].whyCreated;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-5">{t.eyebrow}</p>
          <h2 className="text-h2 text-gray-900 mb-6">{t.title}</h2>
          <p className="text-t2 text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problems.map((p, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden bg-white">
              <div className="w-full" style={{ height: "200px", background: "#F3F4F6" }} />
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-t2 text-gray-500 text-center max-w-3xl mx-auto mt-12">{t.closing}</p>

      </div>
    </section>
  );
}
