import Icon from "@/components/ui/icon";

const BusinessModel = () => {
  return (
    <section className="pitch-section bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="pitch-heading text-center">Бизнес-модель</h2>

        <div className="text-center mb-16">
          <p className="text-xl text-construction-graphite max-w-4xl mx-auto leading-relaxed">
            Финансовая модель построена на устойчивых каналах дохода с
            возможностью масштабирования по всей стране
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: "CreditCard",
              title: "Подписка",
              desc: "Ежемесячная подписка для участников",
              revenue: "от 5,000 ₽/мес",
              color: "from-construction-blue to-construction-blue-light",
            },
            {
              icon: "Percent",
              title: "Комиссия",
              desc: "Процент с каждой продажи",
              revenue: "3-7% с продаж",
              color:
                "from-construction-graphite to-construction-graphite-light",
            },
            {
              icon: "Target",
              title: "Реклама",
              desc: "Аукционная реклама и тендеры",
              revenue: "от 10,000 ₽",
              color: "from-construction-accent to-construction-accent-light",
            },
            {
              icon: "Truck",
              title: "Логистика",
              desc: "Собственные склады и доставка",
              revenue: "Будущий канал",
              color: "from-gray-600 to-gray-700",
            },
          ].map((model) => (
            <div
              key={model.title}
              className={`bg-gradient-to-br ${model.color} p-8 rounded-2xl text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              <Icon
                name={model.icon as any}
                className="mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-bold mb-4">{model.title}</h3>
              <p className="mb-4 opacity-90">{model.desc}</p>
              <div className="font-bold text-lg bg-white/20 rounded-lg py-2 px-4">
                {model.revenue}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-construction-blue/10 to-construction-accent/10 p-10 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-construction-graphite mb-8">
                Финансовый прогноз
              </h3>
              <div className="space-y-6">
                {[
                  {
                    year: "1-й год",
                    revenue: "50-80 млн ₽",
                    color: "text-construction-blue",
                  },
                  {
                    year: "3-й год",
                    revenue: "200-300 млн ₽",
                    color: "text-construction-graphite",
                  },
                  {
                    year: "5-й год",
                    revenue: "500-700 млн ₽",
                    color: "text-construction-accent",
                  },
                ].map((forecast) => (
                  <div
                    key={forecast.year}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm"
                  >
                    <span className="font-bold text-lg">{forecast.year}:</span>
                    <span className={`text-2xl font-bold ${forecast.color}`}>
                      {forecast.revenue}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-construction-accent p-10 rounded-2xl text-construction-graphite-dark">
                <Icon name="TrendingUp" className="mx-auto mb-4" size={64} />
                <div className="text-4xl font-bold mb-3">3-5 лет</div>
                <div className="text-xl font-semibold">срок окупаемости</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
