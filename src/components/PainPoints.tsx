"use client";

import { Shuffle, UserX, BarChart2, Cpu, Link, Zap } from "lucide-react";
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

const problemIcons = [
  <Shuffle key="shuffle" size={28} className="text-sky-500" />,
  <UserX key="userx" size={28} className="text-rose-500" />,
  <BarChart2 key="bar" size={28} className="text-amber-500" />,
  <Cpu key="cpu" size={28} className="text-blue-500" />,
  <Link key="link" size={28} className="text-emerald-500" />,
  <Zap key="zap" size={28} className="text-violet-500" />,
];

export default function PainPoints() {
  const { lang } = useLang();
  const t = i18n[lang].painPoints;

  const row1 = t.problems.slice(0, 3);
  const row2 = t.problems.slice(3, 6);

  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-5">{t.eyebrow}</p>
          <h2
            className="text-gray-900 font-bold leading-tight"
            style={{ fontSize: "46px", letterSpacing: "-0.02em" }}
          >
            {t.title}
          </h2>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {[row1, row2].map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 ${rowIdx === 0 ? "border-b border-gray-200" : ""}`}
            >
              {row.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="h-48 bg-gray-50 flex items-center justify-center border-b border-gray-200">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                      {problemIcons[rowIdx * 3 + i]}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
