import Icon from "@/components/ui/icon";

const Solution = () => {
  return (
    <section className="pitch-section investment-gradient text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Наше решение
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "ShieldCheck",
              title: "Верификация бригад",
              desc: "Тщательная проверка всех строительных бригад, их квалификации и репутации",
            },
            {
              icon: "Star",
              title: "Рейтинг и отзывы",
              desc: "Честная система отзывов и рейтингов для всех участников платформы",
            },
            {
              icon: "Store",
              title: "Единый маркетплейс",
              desc: "Удобная платформа для покупки строительных товаров с API интеграцией",
            },
            {
              icon: "Network",
              title: "Логистическая сеть",
              desc: "Собственная сеть распределительных складов по всей стране",
            },
            {
              icon: "Target",
              title: "Система тендеров",
              desc: "Аукционная реклама и тендеры на крупные заказы каждые 6 месяцев",
            },
            {
              icon: "Zap",
              title: "API интеграция",
              desc: "Прямая интеграция с магазинами и производителями через API",
            },
          ].map((solution) => (
            <div
              key={solution.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-construction-accent/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={solution.icon as any}
                  className="text-construction-accent"
                  size={40}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-200 leading-relaxed">{solution.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
