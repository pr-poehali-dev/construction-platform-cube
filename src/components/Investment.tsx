import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Investment = () => {
  return (
    <section className="py-20 bg-construction-graphite text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Инвестиционный запрос
          </h2>

          <div className="bg-gradient-to-r from-construction-gold to-construction-gold-light p-12 rounded-2xl text-construction-graphite mb-12 shadow-2xl">
            <div className="text-6xl font-bold mb-4">100 млн ₽</div>
            <div className="text-xl font-semibold">
              Необходимая сумма инвестиций
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Icon
                name="Calendar"
                className="mx-auto mb-4 text-construction-gold"
                size={40}
              />
              <h3 className="text-lg font-bold mb-2">Срок окупаемости</h3>
              <p className="text-2xl font-bold text-construction-gold">
                3-5 лет
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Icon
                name="PieChart"
                className="mx-auto mb-4 text-construction-gold"
                size={40}
              />
              <h3 className="text-lg font-bold mb-2">Условия</h3>
              <p className="text-lg">Долевое участие</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Icon
                name="TrendingUp"
                className="mx-auto mb-4 text-construction-gold"
                size={40}
              />
              <h3 className="text-lg font-bold mb-2">ROI</h3>
              <p className="text-2xl font-bold text-construction-gold">
                300-500%
              </p>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Почему стоит инвестировать:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <Icon
                  name="Star"
                  className="text-construction-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="font-bold mb-2">Уникальный проект</h4>
                  <p className="text-gray-300">
                    Без прямых конкурентов на российском рынке
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <Icon
                  name="Globe"
                  className="text-construction-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="font-bold mb-2">Масштабирование</h4>
                  <p className="text-gray-300">
                    Потенциал развития по всей стране
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <Icon
                  name="DollarSign"
                  className="text-construction-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="font-bold mb-2">Высокая маржинальность</h4>
                  <p className="text-gray-300">
                    Выручка 500-700 млн ₽ в течение 4-5 лет
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <Icon
                  name="Rocket"
                  className="text-construction-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="font-bold mb-2">Новый "Ozon"</h4>
                  <p className="text-gray-300">
                    Возможность построить лидера в строительной сфере
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              className="bg-construction-gold hover:bg-construction-gold-light text-construction-graphite font-bold px-12 py-4 text-xl rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="HandHeart" className="mr-3" size={28} />
              Стать инвестором
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
