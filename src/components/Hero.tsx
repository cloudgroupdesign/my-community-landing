"use client";

import { useEffect, useRef, useState } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/20/solid";
import { useLang } from "@/lib/lang";
import { i18n } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const t = i18n[lang].hero;

  const H1_LINES = t.h1Lines as unknown as string[][];
  const WORD_COUNT = H1_LINES.flat().length;
  const H1_ANIM_DURATION = WORD_COUNT * 120 + 800;

  const mockupRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const start = () => {
      setStage(1);
      setTimeout(() => setStage(2), H1_ANIM_DURATION * 0.5);
      setTimeout(() => setStage(3), H1_ANIM_DURATION * 0.8);
    };
    window.addEventListener("scroll-restored", start, { once: true });
    const fallback = setTimeout(start, 300);
    return () => {
      window.removeEventListener("scroll-restored", start);
      clearTimeout(fallback);
    };
  }, [H1_ANIM_DURATION]);

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;
    let targetScroll = 1;

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

  const stageClass = [
    stage >= 1 ? "hero-stage-1" : "",
    stage >= 2 ? "hero-stage-2" : "",
    stage >= 3 ? "hero-stage-3" : "",
  ].filter(Boolean).join(" ");

  return (
    <section ref={sectionRef} className={`bg-white ${stageClass}`} style={{ paddingTop: 80 }}>
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8 text-center" style={{ paddingTop: 64, paddingBottom: 72 }}>

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
                      style={{ animationDelay: `${0.1 * (globalIndex + 1)}s` }}
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

        <div style={{
          opacity: stage >= 2 ? 1 : 0,
          transform: stage >= 2 ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <p className="text-t1 max-w-2xl mx-auto mb-12" style={{ color: "#4B5563" }}>
            {t.subtitle}
          </p>
        </div>

        <div style={{
          opacity: stage >= 3 ? 1 : 0,
          transform: stage >= 3 ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 whitespace-nowrap">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 text-white text-btn-l rounded-xl px-8 py-4 transition-all duration-200 hover:opacity-90"
              style={{ background: "#29ABE2" }}
            >
              {t.bookDemo}
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 text-btn-l rounded-xl px-8 py-4 border border-gray-200 transition-all duration-200 hover:bg-gray-50"
              style={{ color: "#141414" }}
            >
              <PlayCircleIcon className="w-5 h-5 text-gray-400" />
              {t.watchDemo}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm" style={{ color: "#6B7280" }}>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold" style={{ color: "#141414" }}>4.9</span>
              <span>· {t.reviews}</span>
            </div>
            <span className="hidden sm:block text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: "#141414" }}>500+</span>
              <span>{t.companiesTrust}</span>
            </div>
            <span className="hidden sm:block text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: "#141414" }}>10+</span>
              <span>{t.teamExp}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 lg:px-8" style={{
        paddingBottom: 96,
        isolation: "isolate",
        opacity: stage >= 3 ? 1 : 0,
        transform: stage >= 3 ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
        <div
          ref={mockupRef}
          style={{
            position: "relative",
            transformOrigin: "center top",
            transform: "perspective(1200px) rotateX(24deg) scale(0.88)",
            transition: "none",
            isolation: "isolate",
          }}
        >
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

          <div
            style={{
              position: "relative",
              borderRadius: 16,
              padding: 2,
              overflow: "hidden",
            }}
          >
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
