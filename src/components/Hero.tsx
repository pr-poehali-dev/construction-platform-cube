import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-construction-green via-construction-green-light to-construction-graphite flex items-center justify-center text-white overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-construction-gold rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rotate-12 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-construction-gold-light rotate-45 rounded-lg"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Куб — строительная платформа
            <span className="text-construction-gold block mt-2">
              нового поколения
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-medium">
            Объединяем рынок. Строим будущее.
          </p>

          <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Всероссийская платформа для объединения строительных бригад,
            магазинов, производителей и клиентов в одном месте.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-construction-gold hover:bg-construction-gold-light text-construction-graphite font-bold px-8 py-4 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="TrendingUp" className="mr-2" size={24} />
              Инвестировать в проект
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-construction-green font-bold px-8 py-4 text-lg rounded-xl"
            >
              <Icon name="FileText" className="mr-2" size={24} />
              Скачать презентацию
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Icon
                name="Building"
                className="mx-auto mb-3 text-construction-gold"
                size={32}
              />
              <h3 className="font-bold text-lg mb-2">Маркетплейс</h3>
              <p className="text-sm text-gray-200">
                Строительные товары и услуги
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Icon
                name="Shield"
                className="mx-auto mb-3 text-construction-gold"
                size={32}
              />
              <h3 className="font-bold text-lg mb-2">Верификация</h3>
              <p className="text-sm text-gray-200">
                Проверенные строительные бригады
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Icon
                name="Truck"
                className="mx-auto mb-3 text-construction-gold"
                size={32}
              />
              <h3 className="font-bold text-lg mb-2">Логистика</h3>
              <p className="text-sm text-gray-200">Распределительные склады</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
