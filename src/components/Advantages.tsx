const featureItems = [
  "Перевага 1",
  "Перевага 2",
  "Перевага 3",
  "Перевага 4",
  "Перевага 5",
  "Перевага 6",
];

const smallCards = [
  { label: "Картка 1", sub: "Короткий опис" },
  { label: "Картка 2", sub: "Короткий опис" },
  { label: "Картка 3", sub: "Короткий опис" },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#29ABE2" }}>
            Переваги
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">Чим My Community відрізняється</h2>
          <p className="text-t1 text-gray-500 max-w-2xl mx-auto">
            Не просто ще один SaaS — а рішення, яке розуміє ваш бізнес
          </p>
        </div>

        <div className="flex flex-col gap-4">

          {/* Hero bento card */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 flex flex-col md:flex-row min-h-[460px]">

            {/* Visual placeholder */}
            <div className="relative flex-1 min-h-[220px] md:min-h-0 bg-gray-200 flex flex-col justify-end p-8">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                My Community
              </p>
              <p className="text-base font-bold text-gray-800 leading-snug max-w-[220px]">
                Заголовок головної картки
              </p>
            </div>

            {/* Feature list */}
            <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col divide-y divide-gray-200 border-t md:border-t-0 md:border-l border-gray-200">
              {featureItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                  <span className="text-gray-400 text-lg leading-none">{i === 0 ? "×" : "+"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 small cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {smallCards.map((card, i) => (
              <div key={i} className="rounded-3xl overflow-hidden bg-gray-100 flex flex-col min-h-[340px]">
                {/* Visual placeholder */}
                <div className="flex-1 bg-gray-200" />
                {/* Label */}
                <div className="px-6 py-5">
                  <p className="text-sm font-bold text-gray-900">{card.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
