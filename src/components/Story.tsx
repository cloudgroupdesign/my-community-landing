const stats = [
  { value: "10+", label: "років досвіду в бізнесі" },
  { value: "200+", label: "реалізованих проєктів" },
  { value: "4", label: "засновники-практики" },
];

export default function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — centered */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Наша місія
          </p>
          <h2
            className="text-gray-900 font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.02em" }}
          >
            Чому створено My Community
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Розробники My Community — власники консалтингової компанії Maybutne Consulting, які більше 10 років працювали з реальними бізнесами та впроваджували різні CRM, ERP і системи управління.
          </p>
          <p className="text-gray-500 leading-relaxed">
            На практиці ми бачили: перевантажені та дуже дорогі системи, складні інтерфейси, рішення, не адаптовані під реальні бізнес-процеси, розрізнені інструменти та ручну операційну роботу. Саме тому було створено My Community — систему, де всі процеси логічні, легкі в управлінні та швидко адаптовані під реальний бізнес.
          </p>
        </div>

        {/* Photo placeholder — centered, large */}
        <div className="relative mx-auto max-w-2xl mb-16">
          <div
            className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative"
            style={{ background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 40%, #fde8d8 100%)" }}
          >
            {/* TODO: replace with actual team photo (Денис, Сергій, Влада, Аня) */}
            <div className="text-center text-blue-300/70">
              <svg className="w-14 h-14 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm font-semibold">Фото власників</p>
              <p className="text-xs mt-1 opacity-70">Денис, Сергій, Влада, Аня</p>
            </div>

            {/* Bottom overlay label */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-5 py-2.5 text-center whitespace-nowrap">
                <p className="text-xs font-semibold text-gray-700">Команда Maybutne Consulting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-b border-gray-200 py-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-6">
              <p
                className="font-black text-gray-900 mb-1"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
