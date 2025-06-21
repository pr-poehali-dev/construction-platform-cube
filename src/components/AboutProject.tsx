import Icon from "@/components/ui/icon";

const AboutProject = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-graphite mb-8">
            О проекте
          </h2>

          <div className="bg-gradient-to-r from-construction-green to-construction-green-light p-8 rounded-2xl text-white mb-12 shadow-2xl">
            <p className="text-xl leading-relaxed">
              <strong>"Куб"</strong> — первая в России строительная платформа,
              охватывающая все регионы, с собственным маркетплейсом,
              верификацией строительных бригад и уникальной логистической
              моделью через распределительные склады.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-construction-graphite mb-6">
                Прямой аналог в масштабности:
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Icon
                    name="Store"
                    className="text-construction-gold"
                    size={32}
                  />
                  <span className="text-lg font-semibold">Ozon</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Icon
                    name="ShoppingBag"
                    className="text-construction-gold"
                    size={32}
                  />
                  <span className="text-lg font-semibold">Wildberries</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Icon
                    name="Search"
                    className="text-construction-gold"
                    size={32}
                  />
                  <span className="text-lg font-semibold">Avito</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-construction-gold/10 p-8 rounded-2xl">
                <Icon
                  name="ArrowRight"
                  className="mx-auto mb-4 text-construction-gold"
                  size={48}
                />
                <h4 className="text-xl font-bold text-construction-graphite mb-2">
                  Но в строительной нише
                </h4>
                <p className="text-construction-graphite">
                  Потенциал рынка строительства в России превышает 7 трлн рублей
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
