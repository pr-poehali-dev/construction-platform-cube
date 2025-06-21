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
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет обработка формы
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-construction-graphite mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку, и мы свяжемся с вами для обсуждения инвестиций
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-construction-graphite mb-2 block"
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
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction-green"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-semibold text-construction-graphite mb-2 block"
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
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction-green"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-construction-graphite mb-2 block"
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
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction-green"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label
                  htmlFor="comment"
                  className="text-sm font-semibold text-construction-graphite mb-2 block"
                >
                  Комментарий
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction-green min-h-[120px]"
                  placeholder="Расскажите о ваших инвестиционных планах..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-construction-green hover:bg-construction-green-light text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Send" className="mr-3" size={24} />
                Стать инвестором
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-construction-gold text-construction-gold hover:bg-construction-gold hover:text-white font-semibold py-3 px-6 rounded-lg"
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать Pitch Deck
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 border-2 border-construction-graphite text-construction-graphite hover:bg-construction-graphite hover:text-white font-semibold py-3 px-6 rounded-lg"
                >
                  <Icon name="FileText" className="mr-2" size={20} />
                  Запросить презентацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
