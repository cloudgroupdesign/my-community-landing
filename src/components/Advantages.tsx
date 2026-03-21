import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Розроблена в Україні та для України",
    description: "Врахована специфіка українського законодавства, ринку та бізнес-процесів. Інтерфейс повністю українською мовою. Підтримка від команди, яка розуміє ваш контекст.",
    tag: "Локальний продукт",
    tagBg: "#DBEAFE",
    tagColor: "#1D4ED8",
  },
  {
    title: "Все в одній системі — жодних зайвих інструментів",
    description: "CRM, задачі, комунікації, HR, фінанси та аналітика — в єдиній платформі. Забудьте про дані, розкидані по 10+ сервісах. Одна підписка замість п'яти.",
    tag: "Все в одному",
    tagBg: "#E0F2FE",
    tagColor: "#0369A1",
  },
  {
    title: "Просто для команди — потужно для бізнесу",
    description: "Інтуїтивний інтерфейс, який команда освоює за години, а не тижні. При цьому — глибокий функціонал для складних процесів і автоматизацій будь-якого масштабу.",
    tag: "Простота",
    tagBg: "#D1FAE5",
    tagColor: "#065F46",
  },
  {
    title: "Гнучкість та масштабованість",
    description: "Починайте з малого і масштабуйтесь без болю. Система адаптується під будь-яку галузь: від інтернет-магазину до виробничого підприємства.",
    tag: "Масштабованість",
    tagBg: "#FEF3C7",
    tagColor: "#92400E",
  },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#29ABE2" }}>
            Переваги
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">Чим My Community відрізняється</h2>
          <p className="text-t1 text-gray-500 max-w-2xl mx-auto">Не просто ще один SaaS — а рішення, яке розуміє ваш бізнес</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-0">
          {advantages.map((item, i) => (
            <div key={i}>
              <div className="flex gap-6 py-8 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors" style={{ background: "#E0F2FE", border: "1px solid #BAE6FD" }}>
                    <CheckCircle2 size={20} style={{ color: "#29ABE2" }} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg leading-snug flex-1">{item.title}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 mt-0.5"
                      style={{ background: item.tagBg, color: item.tagColor }}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
              {i < advantages.length - 1 && <div className="border-t border-gray-100" />}
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Компаній використовують" },
            { value: "10+", label: "Галузей бізнесу" },
            { value: "4.9", label: "Середня оцінка клієнтів" },
            { value: "99.9%", label: "Uptime платформи" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-3xl font-black mb-1" style={{ color: "#29ABE2" }}>{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
