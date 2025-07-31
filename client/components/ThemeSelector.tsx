import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../types/theme';
import { ChevronDown } from 'lucide-react';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-card text-card-foreground border border-border rounded-lg hover:bg-muted transition-colors theme-transition"
      >
        <span className="text-sm font-medium">{themes[currentTheme].name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform theme-transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-20 min-w-[200px] overflow-hidden">
            {availableThemes.map((themeKey) => {
              const theme = themes[themeKey];
              return (
                <button
                  key={themeKey}
                  onClick={() => {
                    setTheme(themeKey);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-muted transition-colors theme-transition border-b border-border last:border-b-0 ${
                    currentTheme === themeKey ? 'bg-muted text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">{theme.name}</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {theme.type === 'minimalist' && 'Clean & minimal design'}
                      {theme.type === 'dark-sidebar' && 'Dark theme with sidebar'}
                      {theme.type === 'colorful-grid' && 'Vibrant grid layout'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
