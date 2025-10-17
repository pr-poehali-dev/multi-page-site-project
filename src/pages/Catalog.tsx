import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Беспроводные наушники Premium',
    description: 'Наушники с активным шумоподавлением, 30 часов автономной работы, премиальное качество звука',
    price: '12 990 ₽',
    image: 'https://cdn.poehali.dev/projects/3b325c6e-bb5a-44f5-8784-0972cb93d8ab/files/847d318c-0a5e-4ac9-a9ae-13b1b588dbb1.jpg',
    gradient: 'from-primary/20 to-secondary/20'
  },
  {
    id: 2,
    name: 'Умные часы SportPro',
    description: 'Отслеживание активности, пульсометр, GPS, водонепроницаемые, 14 дней работы без подзарядки',
    price: '18 500 ₽',
    image: 'https://cdn.poehali.dev/projects/3b325c6e-bb5a-44f5-8784-0972cb93d8ab/files/dbe1c11c-1338-49b3-8210-49958928dc8c.jpg',
    gradient: 'from-secondary/20 to-accent/20'
  },
  {
    id: 3,
    name: 'Портативная колонка Bass',
    description: 'Мощный звук 360°, защита от воды IPX7, 20 часов музыки, RGB подсветка с синхронизацией',
    price: '7 990 ₽',
    image: 'https://cdn.poehali.dev/projects/3b325c6e-bb5a-44f5-8784-0972cb93d8ab/files/ff6e684b-0785-4a9e-94a0-7f6df2b05e4f.jpg',
    gradient: 'from-accent/20 to-primary/20'
  },
  {
    id: 4,
    name: 'Игровая мышь RGB Elite',
    description: 'Эргономичный дизайн, 16000 DPI сенсор, программируемые кнопки, настраиваемая RGB подсветка',
    price: '4 590 ₽',
    image: 'https://cdn.poehali.dev/projects/3b325c6e-bb5a-44f5-8784-0972cb93d8ab/files/847d318c-0a5e-4ac9-a9ae-13b1b588dbb1.jpg',
    gradient: 'from-primary/20 to-accent/20'
  },
  {
    id: 5,
    name: 'Веб-камера 4K Pro',
    description: 'Разрешение 4K, автофокус, шумоподавление микрофона, идеально для стриминга и видеозвонков',
    price: '9 290 ₽',
    image: 'https://cdn.poehali.dev/projects/3b325c6e-bb5a-44f5-8784-0972cb93d8ab/files/dbe1c11c-1338-49b3-8210-49958928dc8c.jpg',
    gradient: 'from-secondary/20 to-primary/20'
  },
  {
    id: 6,
    name: 'Клавиатура Mechanical Pro',
    description: 'Механические переключатели, RGB подсветка на клавишу, алюминиевый корпус, программируемые макросы',
    price: '11 990 ₽',
    image: 'https://cdn.poehali.dev/projects/3b325c6e-bb5a-44f5-8784-0972cb93d8ab/files/ff6e684b-0785-4a9e-94a0-7f6df2b05e4f.jpg',
    gradient: 'from-accent/20 to-secondary/20'
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Каталог товаров
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Откройте для себя мир инновационных гаджетов
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 hover:border-primary/50`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative overflow-hidden bg-gradient-to-br ${product.gradient} p-8`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <Button 
                    className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Официальная гарантия на все товары от 1 года</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Truck" size={48} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим ваш заказ за 1-2 дня по всей России</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="HeadphonesIcon" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Наши эксперты всегда готовы помочь вам</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
