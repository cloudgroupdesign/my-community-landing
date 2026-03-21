import { ArrowRight, Shuffle, UserX, BarChart2, Cpu, Link } from "lucide-react";
import { SparklesIcon } from "@heroicons/react/24/solid";

const problems = [
  {
    icon: <Shuffle size={22} className="text-sky-500" />,
    title: "Хаос у процесах",
    description:
      "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
  {
    icon: <UserX size={22} className="text-rose-500" />,
    title: "Втрата клієнтів",
    description:
      "Без CRM угоди зникають між переписками. Клієнти йдуть до конкурентів, бо ніхто не встиг зреагувати вчасно.",
  },
  {
    icon: <BarChart2 size={22} className="text-amber-500" />,
    title: "Відсутність аналітики",
    description:
      "Рішення приймаються на відчуттях, а не на даних. Немає чіткого розуміння, що працює, а що тягне бізнес вниз.",
  },
  {
    icon: <Cpu size={22} className="text-blue-500" />,
    title: "Перевантаження операційкою",
    description:
      "Рутинні задачі з'їдають час команди: ручні звіти, нагадування вручну, копіювання даних між системами.",
  },
  {
    icon: <Link size={22} className="text-emerald-500" />,
    title: "Залежність від сервісів",
    description:
      "CRM тут, задачі там, комунікація в третьому місці. Інтеграції ламаються, дані не синхронізуються, команда плутається.",
  },
];

export default function PainPoints() {
  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Болі бізнесу
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">
            Які задачі вирішує система
          </h2>
          <p className="text-t1 text-gray-500 max-w-2xl mx-auto">
            Кожна з цих проблем коштує вам грошей та часу. My Community закриває їх усі в одній платформі.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {problems.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-sky-200 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-sky-50 flex items-center justify-center mb-5 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-h5 text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}

          {/* Solution card */}
          <div className="rounded-2xl p-6 flex flex-col justify-between bg-gray-950">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-5">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-h5 text-white mb-2">Одна система — всі рішення</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                My Community замінює десятки інструментів і повертає вам контроль над бізнесом.
              </p>
            </div>
            <a
              href="#cta"
              className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm rounded-lg px-5 py-2.5 hover:opacity-90 transition-colors w-fit"
              style={{ background: "#29ABE2" }}
            >
              Спробувати
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200 group"
          >
            Переглянути всі можливості
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
