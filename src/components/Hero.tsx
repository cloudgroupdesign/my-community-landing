"use client";

import { ArrowRight, Star, Users, TrendingUp, BarChart3, Bell } from "lucide-react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 30%, #ffffff 70%)" }}
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #29ABE2 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F7941D 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm" style={{ border: "1px solid #BAE6FD" }}>
              <span className="text-base leading-none">🇺🇦</span>
              <span className="text-sm font-medium" style={{ color: "#0369A1" }}>Українська ERP/CRM система</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
                My{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #29ABE2, #0EA5E9)" }}>
                    Community
                  </span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 rounded-full opacity-20 -z-0"
                    style={{ background: "#29ABE2" }} />
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 leading-snug">
                Єдина система управління бізнесом для українських підприємців
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-lg">
                My Community — це сучасна українська ERP/CRM-система, яка об&apos;єднує продажі, комунікації, задачі, команди, виробництво, фінанси та аналітику в одному зручному просторі.
              </p>
            </div>

            {/* Highlighted box */}
            <div className="bg-white rounded-xl px-5 py-4 shadow-sm flex items-center gap-3" style={{ borderLeft: "4px solid #29ABE2" }}>
              <SparklesIcon className="w-5 h-5 flex-shrink-0" style={{ color: "#29ABE2" }} />
              <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                Без хаосу. Без десятків сервісів. Без складних налаштувань.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-full px-8 py-4 text-base transition-all duration-200 shadow-lg group"
                style={{ background: "#29ABE2" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1A8EC4"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(41,171,226,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#29ABE2"; e.currentTarget.style.boxShadow = ""; }}
              >
                Записатися на демо-перегляд системи
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-sky-300 text-gray-700 font-semibold rounded-full px-8 py-4 text-base transition-all duration-200 hover:shadow-md"
              >
                Дізнатись більше
              </a>
            </div>

            {/* Social proof badges */}
            <div className="flex items-center gap-5 pt-2">
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
                <Users size={15} style={{ color: "#29ABE2" }} />
                <span className="text-sm font-semibold text-gray-700">500+ компаній</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
                <Star size={15} className="text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-gray-700">4.9 / 5</span>
              </div>
            </div>
          </div>

          {/* Right column — Dashboard mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating notification badge top-left */}
            <div className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 items-center gap-3 hidden lg:flex">
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                <TrendingUp size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 leading-none">Сьогодні</p>
                <p className="text-sm font-bold text-gray-900 leading-tight mt-0.5">+34 нових клієнти</p>
              </div>
            </div>

            {/* Main dashboard card */}
            <div
              className="relative w-full max-w-[560px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #0C2D48 0%, #1A5276 100%)",
                transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
                boxShadow: "0 40px 80px rgba(41,171,226,0.3), 0 20px 40px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                    <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                  </div>
                  <span className="text-white/60 text-xs font-medium ml-2">My Community — Dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bell size={13} className="text-white/40" />
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#29ABE2" }}>
                    <span className="text-white text-xs font-bold">О</span>
                  </div>
                </div>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="w-14 bg-white/5 py-4 flex flex-col items-center gap-3 border-r border-white/10">
                  {[
                    { label: "Д", active: true },
                    { label: "К", active: false },
                    { label: "З", active: false },
                    { label: "П", active: false },
                    { label: "А", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                        item.active ? "text-white shadow-lg" : "text-white/40"
                      }`}
                      style={item.active ? { background: "#29ABE2", boxShadow: "0 4px 12px rgba(41,171,226,0.5)" } : {}}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 space-y-4">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/50 text-xs">Огляд бізнесу</p>
                      <p className="text-white font-bold text-sm">Панель керування</p>
                    </div>
                    <div className="rounded-lg px-3 py-1.5" style={{ background: "rgba(41,171,226,0.2)", border: "1px solid rgba(41,171,226,0.4)" }}>
                      <span className="text-xs font-medium" style={{ color: "#7DD3F0" }}>Березень 2025</span>
                    </div>
                  </div>

                  {/* Stat cards grid */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { label: "Дохід", value: "₴2.4М", trend: "+18%", color: "rgba(41,171,226,0.3)" },
                      { label: "Клієнти", value: "1,284", trend: "+34", color: "rgba(247,148,29,0.3)" },
                      { label: "Угоди", value: "89", trend: "+12%", color: "rgba(16,185,129,0.3)" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-3 border border-white/10"
                        style={{ background: stat.color }}
                      >
                        <p className="text-white/50 text-[10px] leading-none mb-2">{stat.label}</p>
                        <p className="text-white font-bold text-base leading-none">{stat.value}</p>
                        <p className="text-emerald-300 text-[10px] font-medium mt-1.5">{stat.trend}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-white/70 text-xs font-medium">Динаміка продажів</p>
                      <BarChart3 size={12} className="text-white/30" />
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div
                            className="rounded-t-sm"
                            style={{
                              height: `${h}%`,
                              background: i === 11
                                ? "linear-gradient(to top, #29ABE2, #7DD3F0)"
                                : "rgba(255,255,255,0.12)",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {["Бер", "Кві", "Тра", "Чер"].map((m) => (
                        <span key={m} className="text-white/30 text-[9px]">{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="space-y-1.5">
                    {[
                      { name: "Іваненко А.", action: "Нова угода", amount: "₴45,000", color: "#29ABE2" },
                      { name: "ТОВ «Синтекс»", action: "Оплата", amount: "₴120,000", color: "#10B981" },
                      { name: "Петренко М.", action: "Завдання", amount: "Дедлайн завтра", color: "#F7941D" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                        <span className="text-white/80 text-xs flex-1 truncate">{item.name}</span>
                        <span className="text-white/40 text-[10px]">{item.action}</span>
                        <span className="text-white/70 text-xs font-medium">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge bottom-right */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 items-center gap-3 hidden lg:flex">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#E0F2FE" }}>
                <BarChart3 size={16} style={{ color: "#29ABE2" }} />
              </div>
              <div>
                <p className="text-xs text-gray-500 leading-none">Конверсія</p>
                <p className="text-sm font-bold text-gray-900 leading-tight mt-0.5">+23% цього місяця</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
