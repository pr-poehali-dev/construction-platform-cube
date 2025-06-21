import Icon from "@/components/ui/icon";

const BusinessModel = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-graphite mb-12 text-center">
            Бизнес-модель
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-construction-green to-construction-green-light p-8 rounded-2xl text-white text-center shadow-xl">
              <Icon
                name="CreditCard"
                className="mx-auto mb-4 text-construction-gold"
                size={48}
              />
              <h3 className="text-xl font-bold mb-4">Подписка</h3>
              <p className="text-gray-100 mb-4">
                Ежемесячная подписка для бригад, магазинов и производителей
              </p>
              <div className="text-construction-gold font-bold text-lg">
                от 5,000 ₽/мес
              </div>
            </div>

            <div className="bg-gradient-to-br from-construction-gold to-construction-gold-light p-8 rounded-2xl text-construction-graphite text-center shadow-xl">
              <Icon
                name="Percent"
                className="mx-auto mb-4 text-construction-graphite"
                size={48}
              />
              <h3 className="text-xl font-bold mb-4">Комиссия</h3>
              <p className="mb-4">Комиссия с каждой продажи на маркетплейсе</p>
              <div className="font-bold text-lg">3-7% с продаж</div>
            </div>

            <div className="bg-gradient-to-br from-construction-graphite to-construction-graphite-light p-8 rounded-2xl text-white text-center shadow-xl">
              <Icon
                name="Target"
                className="mx-auto mb-4 text-construction-gold"
                size={48}
              />
              <h3 className="text-xl font-bold mb-4">Реклама</h3>
              <p className="text-gray-100 mb-4">
                Аукционная реклама - тендеры каждые 6 месяцев
              </p>
              <div className="text-construction-gold font-bold text-lg">
                от 10,000 ₽
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-construction-green/10 to-construction-gold/10 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-construction-graphite mb-4">
                  Прогнозируемая выручка
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">1-й год:</span>
                    <span className="text-xl font-bold text-construction-green">
                      50-80 млн ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">3-й год:</span>
                    <span className="text-xl font-bold text-construction-green">
                      200-300 млн ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">5-й год:</span>
                    <span className="text-2xl font-bold text-construction-gold">
                      500-700 млн ₽
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-construction-gold p-6 rounded-xl text-construction-graphite">
                  <Icon name="TrendingUp" className="mx-auto mb-3" size={48} />
                  <div className="text-3xl font-bold mb-2">4-5 лет</div>
                  <div className="font-semibold">срок окупаемости</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
