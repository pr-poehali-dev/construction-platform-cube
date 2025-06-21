import Icon from "@/components/ui/icon";

const MarketProblem = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-graphite mb-12 text-center">
            Проблема рынка
          </h2>

          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-2xl mb-12 shadow-2xl">
            <div className="flex items-start gap-4">
              <Icon
                name="AlertTriangle"
                size={48}
                className="flex-shrink-0 mt-1"
              />
              <p className="text-xl leading-relaxed">
                Сегодня рынок строительства в России{" "}
                <strong>разрозненный, непрозрачный</strong> и перегружен
                мошенниками и некомпетентными исполнителями.
                <strong>"Куб" решает эту проблему.</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Icon
                name="Users"
                className="mx-auto mb-4 text-red-500"
                size={40}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                Недоверие
              </h3>
              <p className="text-sm text-gray-600">
                Клиенты не знают, кому можно доверить строительство
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Icon
                name="DollarSign"
                className="mx-auto mb-4 text-red-500"
                size={40}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                Переплаты
              </h3>
              <p className="text-sm text-gray-600">
                Отсутствие прозрачного ценообразования
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Icon
                name="Clock"
                className="mx-auto mb-4 text-red-500"
                size={40}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                Задержки
              </h3>
              <p className="text-sm text-gray-600">
                Срывы сроков из-за плохой логистики
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Icon
                name="AlertCircle"
                className="mx-auto mb-4 text-red-500"
                size={40}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                Мошенники
              </h3>
              <p className="text-sm text-gray-600">
                Высокий уровень недобросовестных исполнителей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketProblem;
