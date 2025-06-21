import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Investment = () => {
  return (
    <section className="pitch-section bg-construction-graphite text-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Инвестиционные условия
        </h2>

        <div className="bg-gradient-to-r from-construction-accent to-construction-accent-light p-12 rounded-3xl text-construction-graphite-dark mb-16 shadow-2xl">
          <div className="text-7xl font-bold mb-4">100 млн ₽</div>
          <div className="text-2xl font-semibold">
            Запрашиваемая сумма инвестиций
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: "Calendar", title: "Срок окупаемости", value: "3-5 лет" },
            {
              icon: "PieChart",
              title: "Формат участия",
              value: "Доля в проекте",
            },
            { icon: "Banknote", title: "Минимальный чек", value: "5 млн ₽" },
            { icon: "Handshake", title: "Условия входа", value: "Гибкие" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <Icon
                name={item.icon as any}
                className="mx-auto mb-4 text-construction-accent"
                size={48}
              />
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-2xl font-bold text-construction-accent">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="text-left mb-16">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Распределение бюджета
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Разработка",
                percent: "30%",
                amount: "30 млн ₽",
                icon: "Code",
              },
              {
                category: "Команда",
                percent: "25%",
                amount: "25 млн ₽",
                icon: "Users",
              },
              {
                category: "Маркетинг",
                percent: "20%",
                amount: "20 млн ₽",
                icon: "Megaphone",
              },
              {
                category: "Логистика",
                percent: "15%",
                amount: "15 млн ₽",
                icon: "Truck",
              },
              {
                category: "Операционные",
                percent: "7%",
                amount: "7 млн ₽",
                icon: "Settings",
              },
              {
                category: "Резерв",
                percent: "3%",
                amount: "3 млн ₽",
                icon: "Shield",
              },
            ].map((budget) => (
              <div
                key={budget.category}
                className="bg-white/5 p-6 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Icon
                    name={budget.icon as any}
                    className="text-construction-accent"
                    size={24}
                  />
                  <h4 className="font-bold text-lg">{budget.category}</h4>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-construction-accent">
                    {budget.percent}
                  </span>
                  <span className="text-gray-300">{budget.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 p-10 rounded-3xl mb-12">
          <h3 className="text-2xl font-bold mb-8">
            Почему стоит инвестировать:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: "Star",
                title: "Уникальный проект",
                desc: "Без прямых конкурентов на российском рынке",
              },
              {
                icon: "Globe",
                title: "Масштабирование",
                desc: "Потенциал развития по всей стране",
              },
              {
                icon: "TrendingUp",
                title: "Высокая доходность",
                desc: "ROI 300-500% за 4-5 лет",
              },
              {
                icon: "Rocket",
                title: "Новый лидер",
                desc: "Возможность построить 'Ozon' в строительстве",
              },
            ].map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-xl"
              >
                <Icon
                  name={reason.icon as any}
                  className="text-construction-accent flex-shrink-0 mt-1"
                  size={28}
                />
                <div>
                  <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                  <p className="text-gray-300">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          size="lg"
          className="bg-construction-accent hover:bg-construction-accent-light text-construction-graphite-dark font-bold px-12 py-6 text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <Icon name="HandHeart" className="mr-4" size={32} />
          Стать инвестором
        </Button>
      </div>
    </section>
  );
};

export default Investment;
