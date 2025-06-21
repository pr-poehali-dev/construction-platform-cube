import Icon from "@/components/ui/icon";

const Team = () => {
  return (
    <section className="pitch-section bg-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="pitch-heading">Команда</h2>

        <div className="bg-gradient-to-r from-construction-blue to-construction-blue-light p-10 rounded-3xl text-white mb-16 shadow-2xl">
          <Icon
            name="Users"
            className="mx-auto mb-6 text-construction-accent"
            size={80}
          />
          <h3 className="text-3xl font-bold mb-6">
            Команда из 20+ топ-специалистов
          </h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Мы формируем сильную команду из профессионалов: разработчики,
            дизайнеры, верификаторы, маркетологи, логисты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: "Code",
              title: "IT-разработка",
              desc: "Fullstack разработчики с опытом создания масштабируемых платформ",
              count: "8+",
            },
            {
              icon: "Truck",
              title: "Логистика",
              desc: "Эксперты по построению распределительных сетей и доставке",
              count: "4+",
            },
            {
              icon: "Building2",
              title: "Строительство",
              desc: "Профессионалы строительной отрасли с глубоким знанием рынка",
              count: "5+",
            },
            {
              icon: "Megaphone",
              title: "Маркетинг",
              desc: "Специалисты по развитию и продвижению digital-продуктов",
              count: "3+",
            },
          ].map((role) => (
            <div
              key={role.title}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="bg-construction-blue/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={role.icon as any}
                  className="text-construction-blue"
                  size={40}
                />
              </div>
              <div className="text-3xl font-bold text-construction-accent mb-3">
                {role.count}
              </div>
              <h3 className="font-bold text-xl mb-4 text-construction-graphite">
                {role.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-construction-accent/10 p-10 rounded-3xl">
          <Icon
            name="Target"
            className="mx-auto mb-6 text-construction-accent"
            size={64}
          />
          <h3 className="text-3xl font-bold text-construction-graphite mb-6">
            Готовность к масштабированию
          </h3>
          <p className="text-xl text-construction-graphite leading-relaxed max-w-4xl mx-auto">
            Команда готова масштабировать проект на всю страну и выйти на
            международные рынки строительных технологий
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
