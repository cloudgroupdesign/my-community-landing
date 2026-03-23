"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

const row1Logos = [
  <Image key="gcal" src="/google-calendar.png" alt="Google Calendar" width={48} height={48} className="object-contain" />,
  <Image key="zoom" src="/zoom.png" alt="Zoom" width={48} height={48} className="object-contain" />,
  <Image key="amazon" src="/amazon.png" alt="Amazon" width={48} height={48} className="object-contain" />,
  <CodeBracketIcon key="np" className="w-11 h-11" style={{ color: "#29ABE2" }} />,
  <Image key="rozetka" src="/rozetka.png" alt="Rozetka" width={48} height={48} className="object-contain" />,
  <svg key="tg" viewBox="0 0 36 36" className="w-11 h-11"><rect width="36" height="36" rx="8" fill="#0088CC"/><path d="M18 8C12.477 8 8 12.239 8 17.469c0 2.944 1.406 5.57 3.608 7.316L10.5 28l3.428-1.056A10.3 10.3 0 0 0 18 27.938c5.523 0 10-4.239 10-9.469S23.523 8 18 8Z" fill="white"/></svg>,
];

const row2Logos = [
  <Image key="ebay" src="/ebay.png" alt="eBay" width={48} height={48} className="object-contain" />,
  <svg key="fb" viewBox="0 0 36 36" className="w-11 h-11"><rect width="36" height="36" rx="8" fill="#1877F2"/><path d="M22.5 18h-3v10h-4V18h-2v-3.5h2v-2c0-2.8 1.2-4.5 4.5-4.5H22v3.5h-1.5c-1 0-1.5.4-1.5 1.5v1.5H22l-.5 3.5Z" fill="white"/></svg>,
  <svg key="gdrive" viewBox="0 0 36 36" className="w-11 h-11"><rect width="36" height="36" rx="8" fill="#fff" stroke="#E5E7EB"/><text x="18" y="24" textAnchor="middle" fontSize="14" fontWeight="800" fill="#4285F4" fontFamily="Arial">G</text></svg>,
  <svg key="wa" viewBox="0 0 36 36" className="w-11 h-11"><rect width="36" height="36" rx="8" fill="#25D366"/><path d="M18 7C11.925 7 7 11.925 7 18c0 1.9.494 3.684 1.356 5.234L7 29l5.938-1.328A10.94 10.94 0 0 0 18 29c6.075 0 11-4.925 11-11S24.075 7 18 7Z" fill="white"/></svg>,
  <CodeBracketIcon key="mono" className="w-11 h-11 text-orange-400" />,
  <svg key="pin" viewBox="0 0 36 36" className="w-11 h-11"><rect width="36" height="36" rx="8" fill="#E60023"/><path d="M18 7C11.925 7 7 11.925 7 18c0 4.648 2.862 8.64 6.975 10.26-.096-.882-.183-2.235.038-3.196.2-.872 1.337-5.666 1.337-5.666s-.341-.682-.341-1.69c0-1.584.919-2.769 2.062-2.769.972 0 1.443.73 1.443 1.604 0 .977-.623 2.442-.945 3.8-.268 1.134.57 2.058 1.687 2.058 2.025 0 3.585-2.134 3.585-5.215 0-2.727-1.96-4.632-4.758-4.632-3.24 0-5.143 2.43-5.143 4.944 0 .979.377 2.028.847 2.602a.34.34 0 0 1 .079.326c-.086.36-.278 1.134-.316 1.292-.05.208-.168.252-.387.152-1.5-.698-2.438-2.894-2.438-4.657 0-3.788 2.752-7.27 7.938-7.27 4.165 0 7.4 2.967 7.4 6.93 0 4.134-2.605 7.456-6.22 7.456-1.215 0-2.358-.632-2.748-1.376l-.747 2.787c-.271 1.042-1.001 2.348-1.49 3.143A11 11 0 0 0 18 29c6.075 0 11-4.925 11-11S24.075 7 18 7Z" fill="white"/></svg>,
];

function IntegrationCard({ logo, name, description }: { logo: React.ReactNode; name: string; description: string }) {
  return (
    <div className="flex-shrink-0 flex items-start gap-4 bg-white border border-gray-100 rounded-2xl mx-2" style={{ width: 370, padding: "22px 28px" }}>
      <div className="flex-shrink-0 mt-0.5">{logo}</div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 leading-tight mb-1.5" style={{ fontSize: 15 }}>{name}</p>
        <p className="text-gray-400 leading-relaxed" style={{ fontSize: 13 }}>{description}</p>
      </div>
    </div>
  );
}

export default function Integrations() {
  const { lang } = useLang();
  const t = i18n[lang].integrations;

  const row1 = t.row1.map((item, i) => ({ ...item, logo: row1Logos[i] }));
  const row2 = t.row2.map((item, i) => ({ ...item, logo: row2Logos[i] }));
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let paused = false;
    let x1 = 0;
    let x2 = 0;
    let setW1 = 0;
    let setW2 = 0;
    const SPEED = 1;

    const measure = () => {
      if (row1Ref.current) setW1 = row1Ref.current.scrollWidth / 2;
      if (row2Ref.current) { setW2 = row2Ref.current.scrollWidth / 2; x2 = -setW2; }
    };

    const tick = () => {
      if (!paused) {
        if (row1Ref.current && setW1 > 0) {
          x1 -= SPEED;
          if (x1 <= -setW1) x1 += setW1;
          row1Ref.current.style.transform = `translate3d(${x1}px,0,0)`;
        }
        if (row2Ref.current && setW2 > 0) {
          x2 += SPEED;
          if (x2 >= 0) x2 -= setW2;
          row2Ref.current.style.transform = `translate3d(${x2}px,0,0)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    measure();
    rafId = requestAnimationFrame(tick);

    const observer = new IntersectionObserver(
      ([entry]) => { paused = !entry.isIntersecting; },
      { rootMargin: "200px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={sectionRef} id="integrations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center mb-16">
          <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-5">{t.eyebrow}</p>
          <h2 className="text-h2 text-gray-900 mb-6">{t.title}</h2>
          <p className="text-t2 text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      <div className="relative py-2" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div ref={row1Ref} className="flex" style={{ willChange: "transform" }}>
          {row1Doubled.map((item, i) => (
            <IntegrationCard key={i} logo={item.logo} name={item.name} description={item.desc} />
          ))}
        </div>
      </div>

      <div className="relative py-2 mb-12" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div ref={row2Ref} className="flex" style={{ willChange: "transform" }}>
          {row2Doubled.map((item, i) => (
            <IntegrationCard key={i} logo={item.logo} name={item.name} description={item.desc} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <a
          href="/integrations"
          className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
          style={{ background: "#111114" }}
        >
          {t.viewAll}
        </a>
      </div>

      <p className="text-center text-xs text-gray-400 max-w-2xl mx-auto px-6">{t.disclaimer}</p>
    </section>
  );
}
