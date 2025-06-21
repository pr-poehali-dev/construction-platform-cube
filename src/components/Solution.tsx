import Icon from "@/components/ui/icon";

const Solution = () => {
  return (
    <section className="py-20 bg-construction-green text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Наше решение
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
              <Icon
                name="ShieldCheck"
                className="mx-auto mb-6 text-construction-gold"
                size={56}
              />
              <h3 className="text-xl font-bold mb-4">Верификация бригад</h3>
              <p className="text-gray-100 leading-relaxed">
                Тщательная проверка всех строительных бригад, их квалификации и
                репутации
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
              <Icon
                name="Store"
                className="mx-auto mb-6 text-construction-gold"
                size={56}
              />
              <h3 className="text-xl font-bold mb-4">Маркетплейс товаров</h3>
              <p className="text-gray-100 leading-relaxed">
                Удобная платформа для покупки строительных товаров и
                инструментов
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
              <Icon
                name="Zap"
                className="mx-auto mb-6 text-construction-gold"
                size={56}
              />
              <h3 className="text-xl font-bold mb-4">API интеграция</h3>
              <p className="text-gray-100 leading-relaxed">
                Прямая интеграция с магазинами и производителями через API
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
              <Icon
                name="Warehouse"
                className="mx-auto mb-6 text-construction-gold"
                size={56}
              />
              <h3 className="text-xl font-bold mb-4">
                Распределительные склады
              </h3>
              <p className="text-gray-100 leading-relaxed">
                Централизованные склады по всей стране для быстрой доставки
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
              <Icon
                name="Truck"
                className="mx-auto mb-6 text-construction-gold"
                size={56}
              />
              <h3 className="text-xl font-bold mb-4">Единая логистика</h3>
              <p className="text-gray-100 leading-relaxed">
                Централизованная система доставки и управления заказами
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
              <Icon
                name="Star"
                className="mx-auto mb-6 text-construction-gold"
                size={56}
              />
              <h3 className="text-xl font-bold mb-4">Система рейтингов</h3>
              <p className="text-gray-100 leading-relaxed">
                Честная система отзывов и рейтингов для всех участников
                платформы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
