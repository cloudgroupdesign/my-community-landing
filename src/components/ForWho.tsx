"use client";

import { ArrowRight } from "lucide-react";
import {
  BriefcaseIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

const audienceIcons = [
  <BriefcaseIcon key="b" className="w-7 h-7" style={{ color: "#29ABE2" }} />,
  <UserGroupIcon key="u" className="w-7 h-7" style={{ color: "#29ABE2" }} />,
  <BuildingStorefrontIcon key="s" className="w-7 h-7" style={{ color: "#29ABE2" }} />,
  <RocketLaunchIcon key="r" className="w-7 h-7" style={{ color: "#29ABE2" }} />,
];

export default function ForWho() {
  const { lang } = useLang();
  const t = i18n[lang].forWho;

  return (
    <section id="for-who" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-5">{t.eyebrow}</p>
          <h2 className="text-h2 text-gray-900 mb-6">{t.title}</h2>
          <p className="text-t2 text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {t.audiences.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 hover:border-sky-200 transition-colors duration-300 p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "#E0F2FE", border: "1px solid #BAE6FD" }}
                >
                  {audienceIcons[i]}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-bold text-gray-900 text-xl">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ color: "#0369A1", background: "#E0F2FE", border: "1px solid #BAE6FD" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-base mb-6 max-w-xl mx-auto">{t.notSure}</p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-white font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200 hover:opacity-90 group"
            style={{ background: "#29ABE2" }}
          >
            {t.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
