import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/delivery', label: 'Доставка', icon: 'Truck' },
    { path: '/contacts', label: 'Контакты', icon: 'Phone' },
    { path: '/reviews', label: 'Отзывы', icon: 'Star' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            TechStore
          </Link>
          
          <div className="flex gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 transition-all duration-200 hover:scale-105 ${
                    isActive 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={link.icon as any} size={18} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
