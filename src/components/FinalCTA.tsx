"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Send } from "lucide-react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

export default function FinalCTA() {
  const { lang } = useLang();
  const t = i18n[lang].finalCTA;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="pt-24 pb-[96px] bg-white">
      <div style={{ maxWidth: 560, marginLeft: "auto", marginRight: "auto", paddingLeft: 24, paddingRight: 24 }}>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200">
            <span>🇺🇦</span>
            {t.badge}
          </span>
        </div>

        <h2 className="text-h2 text-gray-900 mb-6" style={{ textAlign: "center" }}>
          {t.title.split("\n").map((line, i) => (
            <span key={i}>{line}{i < t.title.split("\n").length - 1 && <br />}</span>
          ))}
        </h2>

        <p className="text-t2 text-gray-500 mb-10" style={{ textAlign: "center" }}>{t.subtitle}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {t.bullets.map((bullet, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flexShrink: 0, width: 20, height: 20, borderRadius: "50%", background: "#29ABE2", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600 text-sm leading-relaxed">{bullet}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gray-50 border border-gray-200" style={{ padding: "24px 32px", marginBottom: 48 }}>
          <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span className="text-gray-600 text-xs font-bold">РК</span>
            </div>
            <span className="text-gray-500 text-sm">{t.founder}</span>
          </div>
        </div>

        {!submitted ? (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 12 }}>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "14px 20px", fontSize: 14, color: "#111827", outline: "none", boxSizing: "border-box" }}
              />
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "14px 20px", fontSize: 14, color: "#111827", outline: "none", boxSizing: "border-box" }}
              />
              <button
                onClick={handleSubmit}
                style={{ width: "100%", background: "#29ABE2", color: "#fff", fontWeight: 700, borderRadius: 12, padding: "14px 20px", fontSize: 14, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              >
                {t.submit}
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-400 text-xs" style={{ textAlign: "center" }}>{t.consent}</p>
          </div>
        ) : (
          <div className="rounded-2xl bg-gray-50 border border-gray-200" style={{ padding: "32px", textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#29ABE2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <CheckIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-2">{t.successTitle}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t.successDesc}</p>
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 40 }}>
          <span className="flex items-center gap-2 text-gray-400 text-sm">
            <Send size={15} />
            Telegram
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-2 text-gray-400 text-sm">
            <PhoneIcon className="w-4 h-4" />
            +38 (0XX) XXX-XX-XX
          </span>
        </div>
      </div>
    </section>
  );
}
