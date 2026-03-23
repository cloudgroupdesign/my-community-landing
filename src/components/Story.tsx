const problems = [
  {
    label: "Складні інтерфейси",
    text: "Системи, які потребують місяців навчання та постійної підтримки",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    label: "Дуже дорогі системи",
    text: "Захмарні ціни та приховані витрати, які з'їдають бюджет",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    label: "Розрізнені інструменти",
    text: "CRM тут, задачі там — дані не синхронізуються, команда плутається",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
];

export default function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — centered */}
        <div className="text-center mb-6">
          <h2
            className="text-gray-900 font-bold leading-tight mb-6"
            style={{ fontSize: "48px", letterSpacing: "-0.02em" }}
          >
            Чому створено My Community
          </h2>
          <p className="text-t2 text-gray-500 max-w-3xl mx-auto">
            Розробники My Community — власники консалтингової компанії Maybutne Consulting, які більше 10 років працювали з реальними бізнесами та впроваджували різні CRM, ERP і системи управління.
          </p>
        </div>

        {/* Problem columns */}
        <div className="grid grid-cols-3 mt-14 mb-10 divide-x divide-gray-200 -mx-8">
          {problems.map((p) => (
            <div key={p.label} className="px-8 flex flex-col items-center text-center">
              <div className="text-gray-700 mb-4">{p.icon}</div>
              <p className="text-t2 font-semibold text-gray-900">{p.label}</p>
            </div>
          ))}
        </div>

        {/* Answer — centered */}
        <p className="text-t2 text-gray-500 text-center max-w-3xl mx-auto mb-12">
          Саме тому було створено My Community — систему, де всі процеси логічні, легкі в управлінні та швидко адаптовані під реальний бізнес.
        </p>

        {/* Photo — full content width */}
        <div className="relative w-full">
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center relative"
            style={{ height: "536px", background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 40%, #fde8d8 100%)" }}
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

      </div>
    </section>
  );
}
