const cards = [
  {
    id: "ua",
    tag: "Локальний продукт",
    tagColor: "#1D4ED8",
    tagBg: "#DBEAFE",
    title: "Розроблена в Україні та для України",
    description:
      "Врахована специфіка українського законодавства, ринку та бізнес-процесів. Інтерфейс повністю українською мовою. Підтримка від команди, яка розуміє ваш контекст.",
    variant: "light" as const,
    // placeholder "pins"
    pins: ["🇺🇦 Українська мова", "📋 Укр. законодавство", "🤝 Локальна підтримка"],
  },
  {
    id: "all",
    tag: "Все в одному",
    tagColor: "#ffffff",
    tagBg: "rgba(255,255,255,0.15)",
    title: "Все в одній системі — жодних зайвих інструментів",
    description:
      "CRM, задачі, комунікації, HR, фінанси та аналітика — в єдиній платформі. Забудьте про дані, розкидані по 10+ сервісах.",
    variant: "dark" as const,
    pins: ["CRM", "HR", "Фінанси", "Аналітика", "Задачі", "Комунікації"],
  },
  {
    id: "simple",
    tag: "Простота",
    tagColor: "#ffffff",
    tagBg: "rgba(255,255,255,0.15)",
    title: "Просто для команди — потужно для бізнесу",
    description:
      "Інтуїтивний інтерфейс, який команда освоює за години, а не тижні. При цьому — глибокий функціонал для складних процесів.",
    variant: "dark" as const,
    pins: ["⚡ Онбординг за години", "🔧 Глибокий функціонал", "📊 Автоматизації"],
  },
  {
    id: "scale",
    tag: "Масштабованість",
    tagColor: "#92400E",
    tagBg: "#FEF3C7",
    title: "Гнучкість та масштабованість",
    description:
      "Починайте з малого і масштабуйтесь без болю. Система адаптується під будь-яку галузь: від інтернет-магазину до виробничого підприємства.",
    variant: "light" as const,
    pins: ["🏪 Інтернет-магазин", "🏭 Виробництво", "🏢 Підприємство"],
  },
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

        {/* Bento grid — row 1: wide left + narrow right | row 2: narrow left + wide right */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          {/* Card 1 — top-left, wide (3/5) */}
          <div className="md:col-span-3 rounded-3xl p-8 bg-gray-50 border border-gray-100 flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                style={{ background: cards[0].tagBg, color: cards[0].tagColor }}>
                {cards[0].tag}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{cards[0].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cards[0].description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {cards[0].pins.map((pin) => (
                <span key={pin} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600">
                  {pin}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 — top-right, narrow (2/5) — dark */}
          <div className="md:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[300px]"
            style={{ background: "#111114" }}>
            <div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                style={{ background: cards[1].tagBg, color: cards[1].tagColor }}>
                {cards[1].tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">{cards[1].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cards[1].description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {cards[1].pins.map((pin) => (
                <span key={pin} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-gray-300">
                  {pin}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 — bottom-left, narrow (2/5) — dark */}
          <div className="md:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[280px]"
            style={{ background: "#1A1D23" }}>
            <div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                style={{ background: cards[2].tagBg, color: cards[2].tagColor }}>
                {cards[2].tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">{cards[2].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cards[2].description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {cards[2].pins.map((pin) => (
                <span key={pin} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-gray-300">
                  {pin}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4 — bottom-right, wide (3/5) */}
          <div className="md:col-span-3 rounded-3xl p-8 bg-gray-50 border border-gray-100 flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                style={{ background: cards[3].tagBg, color: cards[3].tagColor }}>
                {cards[3].tag}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{cards[3].title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cards[3].description}</p>
            </div>
            {/* Stats as visual element */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { value: "500+", label: "компаній" },
                { value: "10+", label: "галузей" },
                { value: "4.9★", label: "рейтинг" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-gray-200 rounded-2xl p-4 text-center">
                  <p className="text-xl font-black" style={{ color: "#29ABE2" }}>{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
