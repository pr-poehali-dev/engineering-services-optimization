import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  const engineeringServices = [
    {
      title: "Прокладка наружных тепловых сетей",
      description: "Процесс укладки трубопроводов, которые используются для транспортировки тепловой энергии от источника (например, котельной) к потребителям (зданиям, сооружениям и т. д.).",
      icon: "Zap"
    },
    {
      title: "Технология алмазного бурения",
      description: "Подходит для таких прочных материалов, как бетон, монолит, кирпич и других материалов.",
      icon: "Drill"
    },
    {
      title: "Проектирование и монтаж внутренних инженерных систем",
      description: "Процесс разработки и установки различных инженерных систем внутри зданий, сооружений или помещений.",
      icon: "Building"
    },
    {
      title: "Техника и спецтранспорт",
      description: "Предоставляем услуги использования бортового полуприцепа, кран-борт, автовышка.",
      icon: "Truck"
    }
  ];

  const productionServices = [
    {
      title: "Изготовление воздуховодов",
      description: "Квадратного/ круглого сечения и фасонных части к ним",
      icon: "Wind"
    },
    {
      title: "Вентиляционные системы",
      description: "Изготовление вентиляционных зонтов, дефлекторов, оголовков вентиляционных шахт",
      icon: "Fan"
    },
    {
      title: "Водосточные системы",
      description: "Изготовление водосточных систем, отливов, фасонных частей, по чертежам Заказчика",
      icon: "Droplets"
    },
    {
      title: "Узлы ввода тепловых сетей",
      description: "Изготовление узлов ввода, скользящих опор, элементов неподвижных опор тепловых сетей",
      icon: "Settings"
    },
    {
      title: "Стальные ёмкости",
      description: "Изготовление стальных ёмкостей, жироуловителей, грязевиков, трубных регистров",
      icon: "Container"
    },
    {
      title: "Тепловые пункты",
      description: "Укрупнённая сборка узлов тепловых пунктов, а также изготовление блочных тепловых пунктов по заданию Заказчика",
      icon: "Thermometer"
    },
    {
      title: "Водомерные узлы",
      description: "Изготовление водомерных узлов, насосных станций, по техническому заданию Заказчика",
      icon: "Gauge"
    },
    {
      title: "Каркасы и стойки",
      description: "Изготовление каркасов, стоек",
      icon: "Frame"
    },
    {
      title: "Детали из металла",
      description: "Изготовление деталей из металла по заявке Заказчика",
      icon: "Wrench"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Cog" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ТехСервис</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/9f0f8b79-257d-46b9-9f86-f185349171f7.jpg" 
            alt="Engineering blueprint" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Профессиональные
              <span className="block text-primary">Инженерные Услуги</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Полный цикл инженерного обеспечения и производства для промышленных объектов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Инженерное обеспечение
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для инженерных систем любой сложности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Button variant="ghost" className="mt-4 text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    Подробнее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Услуги производственной базы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Собственное производство металлоконструкций и инженерного оборудования
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/img/280df5ac-03fd-4f55-8369-96674eec6e8b.jpg" 
              alt="Manufacturing facility" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать ваш проект?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной консультации и расчета стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (XXX) XXX-XX-XX
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Mail" className="mr-2" size={20} />
              info@techservice.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cog" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ТехСервис</h3>
              </div>
              <p className="text-gray-400">
                Профессиональные инженерные услуги и производство металлоконструкций
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Инженерное обеспечение</li>
                <li>Производственная база</li>
                <li>Проектирование</li>
                <li>Монтаж систем</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>info@techservice.ru</li>
                <li>г. Москва, ул. Промышленная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 8:00 - 18:00</li>
                <li>Сб: 9:00 - 15:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТехСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}