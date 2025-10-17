import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: 'Алексей Петров',
    product: 'Беспроводные наушники Premium',
    rating: 5,
    date: '15.10.2024',
    comment: 'Отличное качество звука, удобные, батарея держит долго. Рекомендую!'
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    product: 'Умные часы SportPro',
    rating: 5,
    date: '12.10.2024',
    comment: 'Очень довольна покупкой! Отслеживание активности работает точно, дизайн стильный.'
  },
  {
    id: 3,
    name: 'Дмитрий Козлов',
    product: 'Портативная колонка Bass',
    rating: 4,
    date: '10.10.2024',
    comment: 'Хорошая колонка за свои деньги. Звук мощный, но на максимальной громкости немного хрипит.'
  },
  {
    id: 4,
    name: 'Елена Волкова',
    product: 'Игровая мышь RGB Elite',
    rating: 5,
    date: '08.10.2024',
    comment: 'Идеальная мышь для игр! Точность на высоте, RGB подсветка настраивается легко.'
  },
  {
    id: 5,
    name: 'Сергей Иванов',
    product: 'Веб-камера 4K Pro',
    rating: 5,
    date: '05.10.2024',
    comment: 'Картинка четкая, автофокус работает отлично. Для стримов — то что нужно!'
  },
  {
    id: 6,
    name: 'Ольга Николаева',
    product: 'Клавиатура Mechanical Pro',
    rating: 4,
    date: '02.10.2024',
    comment: 'Качественная клавиатура, печатать приятно. Единственный минус — немного шумновата.'
  }
];

const Reviews = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={16}
            className={i < rating ? 'text-accent fill-accent' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Отзывы клиентов
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Узнайте, что говорят о нас наши покупатели
          </p>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {averageRating}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(parseFloat(averageRating)))}
            </div>
            <p className="text-muted-foreground">Средняя оценка</p>
          </Card>

          <Card className="p-8 text-center border-2 hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
              {reviews.length}
            </div>
            <Icon name="MessageSquare" size={32} className="mx-auto mb-2 text-secondary" />
            <p className="text-muted-foreground">Всего отзывов</p>
          </Card>

          <Card className="p-8 text-center border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
              98%
            </div>
            <Icon name="ThumbsUp" size={32} className="mx-auto mb-2 text-accent" />
            <p className="text-muted-foreground">Довольных клиентов</p>
          </Card>
        </div>

        <Card className="overflow-hidden border-2">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
                  <TableHead className="font-bold text-foreground">Имя</TableHead>
                  <TableHead className="font-bold text-foreground">Товар</TableHead>
                  <TableHead className="font-bold text-foreground">Оценка</TableHead>
                  <TableHead className="font-bold text-foreground">Дата</TableHead>
                  <TableHead className="font-bold text-foreground">Комментарий</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map((review) => (
                  <TableRow 
                    key={review.id} 
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium">{review.name}</TableCell>
                    <TableCell className="text-muted-foreground">{review.product}</TableCell>
                    <TableCell>{renderStars(review.rating)}</TableCell>
                    <TableCell className="text-muted-foreground">{review.date}</TableCell>
                    <TableCell className="max-w-md">
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="mt-16">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Поделитесь своим мнением!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ваш отзыв поможет другим покупателям сделать правильный выбор
            </p>
            <Link 
              to="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <Icon name="PenSquare" size={20} />
              Оставить отзыв
            </Link>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
          >
            <Icon name="Home" size={20} />
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
