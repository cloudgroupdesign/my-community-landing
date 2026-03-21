import { Users, Award, Globe, Zap } from "lucide-react";
import {
  ServerStackIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const painPoints = [
  {
    icon: <ServerStackIcon className="w-5 h-5 text-sky-500" />,
    title: "Перевантажені системи",
    description:
      "Складні корпоративні ERP надто громіздкі для малого та середнього бізнесу. Довго впроваджуються і погано підходять під реальні потреби.",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-5 h-5 text-sky-500" />,
    title: "Складні інтерфейси",
    description:
      "Більшість систем потребують тривалого навчання та постійної технічної підтримки. Команда витрачає час на систему замість клієнтів.",
  },
  {
    icon: <GlobeAltIcon className="w-5 h-5 text-sky-500" />,
    title: "Не адаптовані рішення",
    description:
      "Іноземні сервіси не враховують специфіку українського ринку: мову, законодавство, платіжні системи та бізнес-процеси.",
  },
  {
    icon: <CpuChipIcon className="w-5 h-5 text-sky-500" />,
    title: "Ручна операційка",
    description:
      "Без автоматизації команди витрачають години на рутинні завдання: звіти, нагадування, розподіл задач та комунікацію з клієнтами.",
  },
];

export default function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Наша місія
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">
            Чому створено My Community
          </h2>
          <p className="text-t1 text-gray-500 max-w-2xl mx-auto">
            Ми пройшли той самий шлях, що й наші клієнти — і знаємо, де болить
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — founders image placeholder */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-end p-8"
              style={{ background: "#111827" }}
            >
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Floating stat cards */}
              <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                <p className="text-white/70 text-xs">Досвід</p>
                <p className="text-white font-bold text-xl">10+ років</p>
              </div>

              <div className="absolute top-6 left-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                <p className="text-white/70 text-xs">Проєктів</p>
                <p className="text-white font-bold text-xl">200+</p>
              </div>

              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-white/20" />
                <div className="w-52 h-52 rounded-full border border-white/10 absolute" />
                <div className="w-72 h-72 rounded-full border border-white/5 absolute" />
              </div>

              {/* Avatar group */}
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                {[
                  { initials: "РК", color: "from-sky-400 to-sky-600" },
                  { initials: "АМ", color: "from-sky-300 to-sky-500" },
                  { initials: "ОС", color: "from-cyan-400 to-cyan-600" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-full bg-gray-700 border-2 border-white/20 flex items-center justify-center"
                    style={{ marginTop: i === 1 ? -24 : 0 }}
                  >
                    <span className="text-white font-bold text-sm">{avatar.initials}</span>
                  </div>
                ))}
              </div>

              {/* Bottom label */}
              <div className="relative z-10 w-full">
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center">
                  <p className="text-white font-semibold text-base">Команда засновників</p>
                  <p className="text-white/60 text-xs mt-1">Підприємці та розробники з 10+ роками досвіду</p>
                </div>
              </div>
            </div>

            {/* Trust badges below image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: <Users size={16} />, label: "500+ клієнтів" },
                { icon: <Award size={16} />, label: "10+ галузей" },
                { icon: <Globe size={16} />, label: "Вся Україна" },
              ].map((badge, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl px-3 py-3 flex items-center gap-2">
                  <span className="text-sky-500">{badge.icon}</span>
                  <span className="text-xs font-semibold text-gray-700">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — story text + pain points */}
          <div className="space-y-8">
            <div>
              <h3 className="text-h3 text-gray-900 mb-4">
                Створена підприємцями для підприємців
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Наша команда пройшла шлях від стартапу до масштабованого бізнесу. Ми на власному досвіді відчули, як складно управляти компанією, коли дані розкидані по десятках сервісів, а команда витрачає години на ручну роботу.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Після 10+ років у бізнесі та 200+ реалізованих проєктів ми зрозуміли: українському бізнесу потрібна своя система — проста, потужна та адаптована під реальні умови.
              </p>
            </div>

            {/* Pain points */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Zap size={18} className="text-sky-500" />
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Проблеми, які ми вирішуємо
                </p>
              </div>
              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                      {point.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-sm">{point.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
