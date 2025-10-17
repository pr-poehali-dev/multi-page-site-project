import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Delivery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            Доставка
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Мы доставим ваш заказ быстро и надёжно
          </p>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl">
                <Icon name="Truck" size={32} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-bold">Курьерская доставка</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span>Доставка по Москве и МО — 1-2 дня</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span>Доставка по России — 3-7 дней</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span>Бесплатная доставка при заказе от 5000 ₽</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span>Стоимость доставки от 300 ₽</span>
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl">
                <Icon name="Store" size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Самовывоз</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Готовность заказа — в течение 1 часа</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Самовывоз абсолютно бесплатный</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Пункты выдачи в 50+ городах России</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Проверка товара перед получением</span>
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent/30">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="Package" size={32} className="text-accent" />
            Как происходит доставка?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Оформление заказа</h3>
              <p className="text-sm text-muted-foreground">Выберите товары и оформите заказ онлайн</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Подтверждение</h3>
              <p className="text-sm text-muted-foreground">Мы свяжемся с вами для уточнения деталей</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Сборка и отправка</h3>
              <p className="text-sm text-muted-foreground">Упаковываем товар и передаём курьеру</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Получение</h3>
              <p className="text-sm text-muted-foreground">Курьер привезёт заказ по указанному адресу</p>
            </div>
          </div>
        </Card>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-muted-foreground mb-8">Свяжитесь с нами, и мы поможем вам с выбором и доставкой</p>
          <Link 
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Icon name="Phone" size={20} />
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
