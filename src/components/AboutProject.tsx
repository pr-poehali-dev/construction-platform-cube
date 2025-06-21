import Icon from "@/components/ui/icon";

const AboutProject = () => {
  return (
    <section className="pitch-section bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="pitch-heading text-center">О проекте</h2>

        <div className="bg-gradient-to-r from-construction-blue to-construction-blue-light p-10 rounded-3xl text-white mb-16 shadow-2xl">
          <p className="text-2xl leading-relaxed text-center font-medium">
            <strong>Куб</strong> — строительный маркетплейс, объединяющий
            бригады, магазины, производителей и создающий единую логистическую
            сеть по всей стране
          </p>
        </div>

        {/* Value Chain Infographic */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-construction-graphite mb-12 text-center">
            Цепочка создания стоимости
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            {[
              {
                icon: "Users",
                label: "Бригады",
                color: "bg-construction-blue",
              },
              {
                icon: "Store",
                label: "Магазины",
                color: "bg-construction-blue-light",
              },
              {
                icon: "Factory",
                label: "Производители",
                color: "bg-construction-graphite",
              },
              {
                icon: "Warehouse",
                label: "Склады",
                color: "bg-construction-graphite-light",
              },
              {
                icon: "Home",
                label: "Заказчик",
                color: "bg-construction-accent",
              },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center">
                <div
                  className={`${item.color} p-6 rounded-2xl text-white text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <Icon
                    name={item.icon as any}
                    className="mx-auto mb-3"
                    size={40}
                  />
                  <div className="font-bold text-lg">{item.label}</div>
                </div>
                {index < 4 && (
                  <Icon
                    name="ArrowRight"
                    className="mx-4 text-construction-graphite hidden md:block"
                    size={32}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-construction-graphite mb-8">
              Аналогичные по масштабу платформы:
            </h3>

            <div className="space-y-6">
              {[
                { name: "Ozon", desc: "E-commerce маркетплейс" },
                { name: "Wildberries", desc: "Крупнейший ритейлер" },
                { name: "Avito", desc: "Объявления и услуги" },
              ].map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <Icon
                    name="Building2"
                    className="text-construction-blue"
                    size={40}
                  />
                  <div>
                    <div className="text-xl font-bold text-construction-graphite">
                      {platform.name}
                    </div>
                    <div className="text-gray-600">{platform.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-construction-accent/10 p-10 rounded-3xl">
              <Icon
                name="ArrowRight"
                className="mx-auto mb-6 text-construction-accent"
                size={64}
              />
              <h4 className="text-2xl font-bold text-construction-graphite mb-4">
                Но в строительной нише
              </h4>
              <p className="text-xl text-construction-graphite leading-relaxed">
                Потенциал рынка строительства в России превышает
                <span className="font-bold text-construction-accent">
                  {" "}
                  7 трлн рублей
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
