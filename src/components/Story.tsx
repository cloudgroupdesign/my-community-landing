export default function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Про нас
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">
            Чому створено My Community
          </h2>
          <p className="text-t1 text-gray-500 max-w-2xl mx-auto">
            Створена підприємцями для підприємців
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — founders photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 flex items-center justify-center">
            {/* TODO: replace with actual photo of Денис, Сергій, Влада, Аня */}
            <div className="text-center text-gray-400">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Фото власників</p>
              <p className="text-xs mt-1">Денис, Сергій, Влада, Аня</p>
            </div>
          </div>

          {/* Right — story text */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Розробники My Community — власники консалтингової компанії Maybutne Consulting, які більше 10 років працювали з реальними бізнесами та впроваджували різні CRM, ERP і системи управління.
            </p>

            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
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
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Саме тому було створено My Community — систему, де всі процеси логічні, легкі в управлінні та швидко адаптовані під реальний бізнес.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
