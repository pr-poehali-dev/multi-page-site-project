import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Мы всегда рады помочь вам
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
            
            <div className="space-y-6 mb-12">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Телефон</h3>
                    <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a href="mailto:info@techstore.ru" className="text-muted-foreground hover:text-secondary transition-colors">
                      info@techstore.ru
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Тверская, д. 1
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Вс: 09:00 - 21:00
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl hover:scale-110 transition-transform">
                <Icon name="Facebook" size={24} className="text-primary" />
              </a>
              <a href="#" className="p-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl hover:scale-110 transition-transform">
                <Icon name="Instagram" size={24} className="text-secondary" />
              </a>
              <a href="#" className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl hover:scale-110 transition-transform">
                <Icon name="Twitter" size={24} className="text-accent" />
              </a>
            </div>
          </div>

          <Card className="p-8 border-2">
            <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  required
                  className="border-2 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ivan@example.com"
                  required
                  className="border-2 focus:border-secondary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Расскажите, чем мы можем вам помочь..."
                  rows={6}
                  required
                  className="border-2 focus:border-accent transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-lg py-6"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Вернуться к покупкам</h2>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary via-accent to-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Icon name="Home" size={20} />
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
