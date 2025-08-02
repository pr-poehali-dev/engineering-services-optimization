import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Services() {
  const engineeringServices = [
    {
      title: "Прокладка наружных тепловых сетей",
      description: "Это процесс укладки трубопроводов, которые используются для транспортировки тепловой энергии от источника (например, котельной) к потребителям (зданиям, сооружениям и т. д.).",
      icon: "Zap",
      features: [
        "Проектирование тепловых сетей",
        "Укладка трубопроводов различного диаметра",
        "Монтаж компенсаторов и запорной арматуры",
        "Теплоизоляция и гидроизоляция",
        "Испытания и пуско-наладочные работы"
      ]
    },
    {
      title: "Технология алмазного бурения",
      description: "Подходит для таких прочных материалов, как бетон, монолит, кирпич и других материалов.",
      icon: "Drill",
      features: [
        "Бурение отверстий любого диаметра",
        "Работа с железобетонными конструкциями",
        "Минимальная вибрация и шум",
        "Высокая точность выполнения работ",
        "Возможность работы в стесненных условиях"
      ]
    },
    {
      title: "Проектирование и монтаж внутренних инженерных систем",
      description: "Относится к процессу разработки и установки различных инженерных систем внутри зданий, сооружений или помещений.",
      icon: "Building",
      features: [
        "Системы отопления и вентиляции",
        "Водоснабжение и водоотведение",
        "Электрические системы",
        "Системы кондиционирования",
        "Автоматизация и диспетчеризация"
      ]
    },
    {
      title: "Техника и спецтранспорт",
      description: "Мы предоставляем услуги использования бортового полуприцепа, кран-борт, автовышка.",
      icon: "Truck",
      features: [
        "Бортовой полуприцеп до 20 тонн",
        "Кран-борт грузоподъемностью до 10 тонн",
        "Автовышка высотой до 22 метров",
        "Опытные водители-операторы",
        "Работа по городу и области"
      ]
    }
  ];

  const productionServices = [
    {
      title: "Изготовление воздуховодов",
      description: "Квадратного/круглого сечения и фасонных части к ним",
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
              <a href="/" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="/services" className="text-primary font-medium">Услуги</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полный спектр инженерных услуг и производственных решений для промышленных объектов
            </p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engineeringServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2 leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Включает в себя:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="ghost" className="mt-6 text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Получить консультацию
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                      Узнать подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Возможности нашего производства
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Factory" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Собственная производственная база</h3>
                      <p className="text-gray-300 text-sm">Современное оборудование и квалифицированные специалисты</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Сжатые сроки изготовления</h3>
                      <p className="text-gray-300 text-sm">Оптимизированные процессы производства</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Контроль качества</h3>
                      <p className="text-gray-300 text-sm">Строгое соблюдение ГОСТ и технических требований</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Доставка и монтаж</h3>
                      <p className="text-gray-300 text-sm">Полный цикл от производства до установки</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/img/280df5ac-03fd-4f55-8369-96674eec6e8b.jpg" 
                  alt="Production facility" 
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужна консультация по услугам?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Наши специалисты помогут выбрать оптимальное решение для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
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