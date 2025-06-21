import Icon from "@/components/ui/icon";

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-graphite mb-12">
            Команда
          </h2>

          <div className="bg-gradient-to-r from-construction-green to-construction-green-light p-8 rounded-2xl text-white mb-12 shadow-2xl">
            <Icon
              name="Users"
              className="mx-auto mb-6 text-construction-gold"
              size={64}
            />
            <h3 className="text-2xl font-bold mb-4">
              Команда топ-специалистов
            </h3>
            <p className="text-xl leading-relaxed">
              Команда формируется из топ-специалистов в IT, логистике,
              строительной отрасли и маркетинге.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <Icon
                name="Code"
                className="mx-auto mb-4 text-construction-green"
                size={48}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                IT-разработка
              </h3>
              <p className="text-sm text-gray-600">
                Опытные разработчики с экспертизой в создании масштабируемых
                платформ
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <Icon
                name="Truck"
                className="mx-auto mb-4 text-construction-green"
                size={48}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                Логистика
              </h3>
              <p className="text-sm text-gray-600">
                Специалисты по построению распределительных сетей и оптимизации
                доставки
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <Icon
                name="Building"
                className="mx-auto mb-4 text-construction-green"
                size={48}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                Строительство
              </h3>
              <p className="text-sm text-gray-600">
                Эксперты строительной отрасли с глубоким пониманием рынка
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <Icon
                name="Megaphone"
                className="mx-auto mb-4 text-construction-green"
                size={48}
              />
              <h3 className="font-bold text-lg mb-2 text-construction-graphite">
                Маркетинг
              </h3>
              <p className="text-sm text-gray-600">
                Профессионалы по развитию и продвижению digital-продуктов
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-construction-gold/10 rounded-2xl">
            <Icon
              name="Target"
              className="mx-auto mb-4 text-construction-gold"
              size={56}
            />
            <h3 className="text-2xl font-bold text-construction-graphite mb-4">
              Готовность к масштабированию
            </h3>
            <p className="text-lg text-construction-graphite">
              Команда готова масштабировать проект на всю страну и выйти на
              международные рынки строительных технологий
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
