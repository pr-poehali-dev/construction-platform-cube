import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pitch-section bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="pitch-heading">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и мы предоставим детальный pitch deck с финансовыми
            прогнозами и планами развития
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Label
                  htmlFor="name"
                  className="text-lg font-semibold text-construction-graphite mb-3 block"
                >
                  Имя *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-construction-blue text-lg"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-lg font-semibold text-construction-graphite mb-3 block"
                >
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-construction-blue text-lg"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-lg font-semibold text-construction-graphite mb-3 block"
              >
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-construction-blue text-lg"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-lg font-semibold text-construction-graphite mb-3 block"
              >
                Сообщение
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-construction-blue min-h-[140px] text-lg"
                placeholder="Расскажите о ваших инвестиционных планах и интересах..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-construction-blue hover:bg-construction-blue-light text-white font-bold py-6 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Send" className="mr-3" size={24} />
                Стать инвестором
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-construction-accent text-construction-accent hover:bg-construction-accent hover:text-white font-bold py-6 px-8 rounded-xl text-xl"
              >
                <Icon name="Download" className="mr-3" size={24} />
                Запросить Pitch Deck
              </Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-6">
              Или свяжитесь с нами напрямую для обсуждения инвестиционных
              возможностей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-3 text-construction-graphite">
                <Icon name="Mail" size={20} />
                <span>invest@kub-platform.ru</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-construction-graphite">
                <Icon name="Phone" size={20} />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
