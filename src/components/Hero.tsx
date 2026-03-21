"use client";

import { useEffect, useRef } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/20/solid";

const H1_LINES = [
  ["Єдина", "система"],
  ["управління", "бізнесом"],
  ["для", "підприємців"],
];

export default function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mockupRef.current) return;
      const rect = mockupRef.current.getBoundingClientRect();
      const mockupCenterY = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = mockupCenterY - viewportCenter;

      // Animation only triggers in the last 280px before center
      const triggerZone = 280;
      let progress: number;
      if (distance > triggerZone) {
        progress = 0; // still fully tilted
      } else if (distance <= 0) {
        progress = 1; // fully flat (past center)
      } else {
        progress = 1 - distance / triggerZone;
      }

      const rotateX = 24 * (1 - progress);
      const scale = 0.88 + 0.12 * progress;
      mockupRef.current.style.transform =
        `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white" style={{ paddingTop: 80 }}>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 text-center" style={{ paddingTop: 40, paddingBottom: 48 }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-12 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200">
          <span className="text-base leading-none">🇺🇦</span>
          Українська ERP/CRM система для бізнесу
        </div>

        {/* H1 — word-by-word animation */}
        <h1
          className="mb-8"
          style={{
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#141414",
          }}
        >
          {H1_LINES.map((line, li) => (
            <span key={li} style={{ display: "block" }}>
              {line.map((word, wi) => {
                const globalIndex = H1_LINES.slice(0, li).reduce((a, l) => a + l.length, 0) + wi;
                return (
                  <span key={wi} className="hero-word-outer">
                    <span
                      className="hero-word-inner"
                      style={{ animationDelay: `${0.12 * globalIndex}s` }}
                    >
                      {word}
                    </span>
                    {wi < line.length - 1 ? "\u00A0" : ""}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="text-t1 max-w-2xl mx-auto mb-12"
          style={{ color: "#4B5563" }}
        >
          My Community об&apos;єднує продажі, комунікації, задачі, команди, виробництво,
          фінанси та аналітику в одному зручному просторі.
          Без хаосу. Без десятків сервісів.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 whitespace-nowrap">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 text-white text-btn-l rounded-xl px-8 py-4 transition-all duration-200 hover:opacity-90"
            style={{ background: "#29ABE2" }}
          >
            Записатися на демо-перегляд
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 text-btn-l rounded-xl px-8 py-4 border border-gray-200 transition-all duration-200 hover:bg-gray-50"
            style={{ color: "#141414" }}
          >
            <PlayCircleIcon className="w-5 h-5 text-gray-400" />
            Переглянути демо
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm" style={{ color: "#6B7280" }}>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold" style={{ color: "#141414" }}>4.9</span>
            <span>· 200+ відгуків</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold" style={{ color: "#141414" }}>500+</span>
            <span>компаній довіряють</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold" style={{ color: "#141414" }}>10+</span>
            <span>років досвіду команди</span>
          </div>
        </div>
      </div>

      {/* ── Mockup with scroll-driven 3D tilt ── */}
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8" style={{ paddingBottom: 96, isolation: "isolate" }}>
        <div
          ref={mockupRef}
          style={{
            position: "relative",
            transformOrigin: "center top",
            transform: "perspective(1200px) rotateX(24deg) scale(0.88)",
            transition: "transform 0.05s linear",
            willChange: "transform",
            isolation: "isolate",
          }}
        >
          {/* Animated glow layer — blurred rotating gradient behind the mockup */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 18,
              overflow: "hidden",
              filter: "blur(48px)",
              opacity: 0.16,
              transform: "scale(1.08) translateY(16px)",
              zIndex: -1,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "200%",
                height: "200%",
                top: "-50%",
                left: "-50%",
                background: "conic-gradient(from 0deg, #29ABE2, #F7941D, #E84C3D, #8DC63F, #20A99D, #29ABE2)",
                animation: "gradientSpin 5s linear infinite",
              }}
            />
          </div>

          {/* Animated gradient border */}
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              padding: 2,
              overflow: "hidden",
            }}
          >
            {/* Rotating conic gradient — clipped to 2px border by overflow:hidden */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: "200%",
                height: "200%",
                top: "-50%",
                left: "-50%",
                background: "conic-gradient(from 0deg, #29ABE2, #F7941D, #E84C3D, #8DC63F, #20A99D, #29ABE2)",
                animation: "gradientSpin 5s linear infinite",
              }}
            />
            {/* Placeholder for video/gif — 588px */}
            <div
              style={{
                position: "relative",
                borderRadius: 14,
                background: "#F8FAFC",
                height: 588,
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
