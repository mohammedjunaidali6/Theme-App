export type ThemeType = 'minimalist' | 'dark-sidebar' | 'colorful-grid';

export interface ThemeConfig {
  name: string;
  type: ThemeType;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    muted: string;
    mutedForeground: string;
    border: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  spacing: {
    container: string;
    section: string;
    card: string;
  };
  layout: {
    type: 'standard' | 'sidebar' | 'grid';
    headerHeight: string;
    sidebarWidth: string;
  };
  borderRadius: string;
  animations: {
    duration: string;
    easing: string;
  };
}

export const themes: Record<ThemeType, ThemeConfig> = {
  minimalist: {
    name: 'Minimalist',
    type: 'minimalist',
    colors: {
      primary: '0 0% 9%',
      secondary: '0 0% 96%',
      accent: '0 0% 15%',
      background: '0 0% 100%',
      foreground: '0 0% 9%',
      card: '0 0% 100%',
      cardForeground: '0 0% 9%',
      muted: '0 0% 96%',
      mutedForeground: '0 0% 45%',
      border: '0 0% 90%',
    },
    fonts: {
      body: "'Inter', system-ui, sans-serif",
      heading: "'Inter', system-ui, sans-serif",
    },
    spacing: {
      container: 'max-w-6xl mx-auto px-4',
      section: 'py-16',
      card: 'p-6',
    },
    layout: {
      type: 'standard',
      headerHeight: '4rem',
      sidebarWidth: '0',
    },
    borderRadius: '0.5rem',
    animations: {
      duration: '200ms',
      easing: 'ease-out',
    },
  },
  'dark-sidebar': {
    name: 'Dark Sidebar',
    type: 'dark-sidebar',
    colors: {
      primary: '210 40% 98%',
      secondary: '217.2 32.6% 17.5%',
      accent: '224.3 76.3% 48%',
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '217.2 32.6% 17.5%',
      cardForeground: '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      mutedForeground: '215 20.2% 65.1%',
      border: '217.2 32.6% 17.5%',
    },
    fonts: {
      body: "'Roboto', system-ui, sans-serif",
      heading: "'Roboto Slab', serif",
    },
    spacing: {
      container: 'max-w-7xl mx-auto px-6',
      section: 'py-20',
      card: 'p-8',
    },
    layout: {
      type: 'sidebar',
      headerHeight: '4.5rem',
      sidebarWidth: '16rem',
    },
    borderRadius: '0.75rem',
    animations: {
      duration: '300ms',
      easing: 'ease-in-out',
    },
  },
  'colorful-grid': {
    name: 'Colorful Grid',
    type: 'colorful-grid',
    colors: {
      primary: '262.1 83.3% 57.8%',
      secondary: '270 95.2% 95.1%',
      accent: '321.8 88% 60.4%',
      background: '270 20% 98%',
      foreground: '224 71.4% 4.1%',
      card: '0 0% 100%',
      cardForeground: '224 71.4% 4.1%',
      muted: '270 4.8% 94.9%',
      mutedForeground: '215.4 16.3% 46.9%',
      border: '270 7.9% 85.9%',
    },
    fonts: {
      body: "'Poppins', system-ui, sans-serif",
      heading: "'Poppins', system-ui, sans-serif",
    },
    spacing: {
      container: 'max-w-8xl mx-auto px-8',
      section: 'py-24',
      card: 'p-6',
    },
    layout: {
      type: 'grid',
      headerHeight: '5rem',
      sidebarWidth: '0',
    },
    borderRadius: '1rem',
    animations: {
      duration: '400ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};
