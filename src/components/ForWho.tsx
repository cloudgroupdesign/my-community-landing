import { ArrowRight } from "lucide-react";
import {
  BriefcaseIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const audiences = [
  {
    icon: <BriefcaseIcon className="w-7 h-7" style={{ color: "#29ABE2" }} />,
    title: "Власники бізнесу",
    description: "Отримайте повний контроль над компанією: фінанси, команда, клієнти та процеси в одному вікні. Приймайте рішення на основі даних, а не відчуттів.",
    tags: ["Аналітика", "Контроль", "Ріст"],
  },
  {
    icon: <UserGroupIcon className="w-7 h-7" style={{ color: "#29ABE2" }} />,
    title: "Компанії з командами",
    description: "Координуйте роботу відділів без хаосу. Чіткі задачі, зрозумілі відповідальності та прозора комунікація всередині однієї системи.",
    tags: ["Задачі", "Команда", "Комунікація"],
  },
  {
    icon: <BuildingStorefrontIcon className="w-7 h-7" style={{ color: "#29ABE2" }} />,
    title: "Бізнес продажів та виробництва",
    description: "Від першого контакту з клієнтом до відвантаження замовлення — повний цикл в одній платформі. Склад, виробництво та продажі синхронізовані.",
    tags: ["Склад", "Замовлення", "Виробництво"],
  },
  {
    icon: <RocketLaunchIcon className="w-7 h-7" style={{ color: "#29ABE2" }} />,
    title: "Підприємці, що ростуть",
    description: "Почніть з базових функцій і масштабуйтесь без болю. Система росте разом з вашим бізнесом — без переїзду на нові платформи.",
    tags: ["Старт", "Масштаб", "Гнучкість"],
  },
];

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#29ABE2" }}>
            Аудиторія
          </p>
          <h2 className="text-h2 text-gray-900 mb-4">Для кого My Community</h2>
          <p className="text-t1 text-gray-500 max-w-2xl mx-auto">
            Система працює для різних типів бізнесу — від малого підприємства до середнього виробництва
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 hover:border-sky-200 transition-colors duration-300 p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "#E0F2FE", border: "1px solid #BAE6FD" }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-bold text-gray-900 text-xl">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ color: "#0369A1", background: "#E0F2FE", border: "1px solid #BAE6FD" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-base mb-6 max-w-xl mx-auto">
            Не впевнені, чи підходить My Community для вашого бізнесу? Наші спеціалісти допоможуть підібрати оптимальне рішення.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-white font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200 hover:opacity-90 group"
            style={{ background: "#29ABE2" }}
          >
            Отримати демо-презентацію
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
