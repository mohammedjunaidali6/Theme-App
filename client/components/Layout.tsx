import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeSelector } from './ThemeSelector';
import { Home, Info, Mail, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { themeConfig } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  // Sidebar component for dark-sidebar theme
  const Sidebar = () => (
    <div className="sidebar">
      <div className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-8">ThemeApp</h2>
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors theme-transition ${
                  isActiveRoute(item.href)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );

  // Header component
  const Header = () => (
    <header 
      className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-40"
      style={{ height: themeConfig.layout.headerHeight }}
    >
      <div className={themeConfig.spacing.container}>
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg text-foreground">ThemeApp</span>
            </Link>

            {/* Desktop Navigation (hidden for dark-sidebar theme) */}
            {themeConfig.layout.type !== 'sidebar' && (
              <nav className="hidden md:flex items-center gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors theme-transition ${
                      isActiveRoute(item.href)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            <ThemeSelector />
            
            {/* Mobile menu button */}
            {themeConfig.layout.type !== 'sidebar' && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {themeConfig.layout.type !== 'sidebar' && isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors theme-transition ${
                    isActiveRoute(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  // Layout container based on theme
  const LayoutContainer = () => {
    if (themeConfig.layout.type === 'sidebar') {
      return (
        <div className="layout-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      );
    }

    return (
      <div className={`layout-container ${themeConfig.layout.type === 'grid' ? 'grid-pattern' : ''}`}>
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    );
  };

  return <LayoutContainer />;
};
