import Icon from "@/components/ui/icon";

const MarketProblem = () => {
  return (
    <section className="pitch-section bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="pitch-heading text-center">Проблема рынка</h2>

        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-10 rounded-3xl mb-16 shadow-2xl">
          <div className="flex items-center gap-6">
            <Icon name="AlertTriangle" size={64} className="flex-shrink-0" />
            <div>
              <p className="text-2xl leading-relaxed font-medium">
                На рынке нет единой платформы для надёжного выбора строительных
                бригад, закупки материалов и логистики в одном месте
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "UserX",
              title: "Недоверие",
              desc: "Клиенты не знают, кому можно доверить строительство",
              stat: "70%",
            },
            {
              icon: "DollarSign",
              title: "Переплаты",
              desc: "Отсутствие прозрачного ценообразования",
              stat: "+40%",
            },
            {
              icon: "Clock",
              title: "Задержки",
              desc: "Срывы сроков из-за плохой логистики",
              stat: "60%",
            },
            {
              icon: "AlertCircle",
              title: "Мошенники",
              desc: "Высокий уровень недобросовестных исполнителей",
              stat: "30%",
            },
          ].map((problem) => (
            <div
              key={problem.title}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={problem.icon as any}
                  className="text-red-500"
                  size={40}
                />
              </div>
              <div className="text-3xl font-bold text-red-500 mb-3">
                {problem.stat}
              </div>
              <h3 className="font-bold text-xl mb-3 text-construction-graphite">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketProblem;
