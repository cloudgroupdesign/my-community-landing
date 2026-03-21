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
    let rafId: number | null = null;
    let ticking = false;
    // Cached values — never read inside scroll handler
    let targetScroll = 1; // scrollY at which mockup center hits viewport center

    const measureTarget = () => {
      if (!mockupRef.current) return;
      const mockupOffsetTop =
        mockupRef.current.getBoundingClientRect().top +
        window.scrollY +
        mockupRef.current.offsetHeight / 2;
      targetScroll = Math.max(1, mockupOffsetTop - window.innerHeight / 2);
    };

    const update = () => {
      ticking = false;
      if (!mockupRef.current) return;
      // Progress from 0 (page top) → 1 (mockup centered) using scrollY only
      const progress = Math.min(1, Math.max(0, window.scrollY / targetScroll));
      const rotateX = 24 * (1 - progress);
      const scale   = 0.88 + 0.12 * progress;
      mockupRef.current.style.transform =
        `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => { measureTarget(); update(); };

    measureTarget();

    // On mount: if page is already scrolled (reload/navigate), smoothly
    // ease the mockup from its initial tilt to the correct position
    // then switch to instant updates so scroll feels snappy
    if (window.scrollY > 0 && mockupRef.current) {
      mockupRef.current.style.transition =
        "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      update();
      const tid = setTimeout(() => {
        if (mockupRef.current) mockupRef.current.style.transition = "none";
      }, 750);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
      return () => {
        clearTimeout(tid);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    // Page loaded at top — no correction needed, go straight to instant mode
    if (mockupRef.current) mockupRef.current.style.transition = "none";
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="bg-white" style={{ paddingTop: 80 }}>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 text-center" style={{ paddingTop: 40, paddingBottom: 48 }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200">
          <span className="text-base leading-none">🇺🇦</span>
          Українська ERP/CRM система для бізнесу
        </div>

        {/* H1 — word-by-word animation */}
        <h1
          className="mb-8"
          style={{
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
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
            transition: "none",
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
              transform: "scale(1.08) translateZ(0) translateY(16px)",
              zIndex: -1,
              contain: "layout style paint",
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
