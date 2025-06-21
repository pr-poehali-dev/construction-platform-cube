import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen investment-gradient flex items-center justify-center text-white overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-construction-accent rotate-45 rounded-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rotate-45 rounded-lg"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-construction-accent-light rotate-12 rounded-lg"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Куб — строим новую экосистему
            <span className="block text-construction-accent mt-4">
              строительного рынка
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Инвестируйте в первую федеральную платформу, которая объединяет
            бригады, магазины, производителей и логистику
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-construction-accent hover:bg-construction-accent-light text-construction-graphite font-bold px-10 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="TrendingUp" className="mr-3" size={28} />
              Стать инвестором
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-construction-blue font-bold px-10 py-6 text-xl rounded-2xl"
            >
              <Icon name="Download" className="mr-3" size={28} />
              Pitch Deck
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <Icon
                name="Building2"
                className="mx-auto mb-4 text-construction-accent"
                size={48}
              />
              <h3 className="font-bold text-xl mb-3">Маркетплейс</h3>
              <p className="text-gray-200">
                Объединяем строительные товары и услуги
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <Icon
                name="ShieldCheck"
                className="mx-auto mb-4 text-construction-accent"
                size={48}
              />
              <h3 className="font-bold text-xl mb-3">Верификация</h3>
              <p className="text-gray-200">Проверенные строительные бригады</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <Icon
                name="Truck"
                className="mx-auto mb-4 text-construction-accent"
                size={48}
              />
              <h3 className="font-bold text-xl mb-3">Логистика</h3>
              <p className="text-gray-200">Единая сеть складов по стране</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
