export default function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left — text, left-aligned */}
          <div className="flex flex-col justify-between">
            {/* Top: label + heading */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Наша місія
              </p>
              <h2
                className="text-gray-900 font-bold leading-tight"
                style={{ fontSize: "clamp(32px, 3.8vw, 52px)", letterSpacing: "-0.02em" }}
              >
                Чому створено<br />My Community
              </h2>
            </div>

            {/* Bottom: description text */}
            <div className="mt-auto pt-16 space-y-5">
              <p className="text-gray-600 leading-relaxed">
                Розробники My Community — власники консалтингової компанії Maybutne Consulting, які більше 10 років працювали з реальними бізнесами та впроваджували різні CRM, ERP і системи управління.
              </p>

              <div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  На практиці ми бачили:
                </p>
                <ul className="space-y-2">
                  {[
                    "перевантажені та дуже дорогі системи,",
                    "складні інтерфейси,",
                    "рішення, не адаптовані під реальні бізнес-процеси,",
                    "розрізнені інструменти та ручну операційну роботу.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <svg className="mt-0.5 flex-shrink-0 w-4 h-4 text-sky-500" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.12" />
                        <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="0.75" />
                        <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Саме тому було створено My Community — систему, де всі процеси логічні, легкі в управлінні та швидко адаптовані під реальний бізнес.
              </p>
            </div>
          </div>

          {/* Right — photo placeholder card */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col justify-end p-8 relative"
            style={{
              background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 40%, #fde8d8 100%)",
            }}
          >
            {/* TODO: replace background with actual team photo (Денис, Сергій, Влада, Аня) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-blue-300/60">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm font-medium">Фото команди</p>
              </div>
            </div>

            {/* Bottom label overlay */}
            <div className="relative z-10 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-0.5">
                Створена підприємцями для підприємців
              </p>
              <p className="text-sm font-bold text-gray-900">
                Денис, Сергій, Влада, Аня — Maybutne Consulting
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
