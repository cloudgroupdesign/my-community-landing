import { Shuffle, UserX, BarChart2, Cpu, Link, Zap } from "lucide-react";

const problems = [
  {
    icon: <Shuffle size={28} className="text-sky-500" />,
    title: "Хаос у процесах",
    description:
      "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
  {
    icon: <UserX size={28} className="text-rose-500" />,
    title: "Втрата клієнтів",
    description:
      "Без CRM угоди зникають між переписками. Клієнти йдуть до конкурентів, бо ніхто не встиг зреагувати вчасно.",
  },
  {
    icon: <BarChart2 size={28} className="text-amber-500" />,
    title: "Відсутність аналітики",
    description:
      "Рішення приймаються на відчуттях, а не на даних. Немає чіткого розуміння, що працює, а що тягне бізнес вниз.",
  },
  {
    icon: <Cpu size={28} className="text-blue-500" />,
    title: "Перевантаження операційкою",
    description:
      "Рутинні задачі з'їдають час команди: ручні звіти, нагадування вручну, копіювання даних між системами.",
  },
  {
    icon: <Link size={28} className="text-emerald-500" />,
    title: "Залежність від сервісів",
    description:
      "CRM тут, задачі там, комунікація в третьому місці. Інтеграції ламаються, дані не синхронізуються, команда плутається.",
  },
  {
    icon: <Zap size={28} className="text-violet-500" />,
    title: "Відсутність автоматизації",
    description:
      "Без автоматизації команда щодня повторює одні й ті самі кроки вручну. Бізнес не росте — він просто виживає.",
  },
];

export default function PainPoints() {
  const row1 = problems.slice(0, 3);
  const row2 = problems.slice(3, 6);

  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — left-aligned */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Болі бізнесу
          </p>
          <h2
            className="text-gray-900 font-bold leading-tight"
            style={{ fontSize: "clamp(28px, 3.2vw, 44px)", letterSpacing: "-0.02em" }}
          >
            Які задачі вирішує система
          </h2>
        </div>

        {/* Grid — 2 rows × 3 cols with dividers */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {[row1, row2].map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 ${rowIdx === 0 ? "border-b border-gray-200" : ""}`}
            >
              {row.map((item, i) => (
                <div key={i} className="flex flex-col">
                  {/* Visual placeholder */}
                  <div className="h-48 bg-gray-50 flex items-center justify-center border-b border-gray-200">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-7">
                    <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
