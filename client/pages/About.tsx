import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Target, Users, Award, Zap, Heart, Globe } from 'lucide-react';

export default function About() {
  const { themeConfig } = useTheme();

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality products that enhance your lifestyle and bring joy to your everyday experiences.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated group of professionals committed to excellence in customer service and product curation.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product goes through rigorous testing to ensure it meets our high standards of quality and reliability.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your products to you as fast as possible, wherever you are.',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: '24/7 customer support to help you with any questions or concerns about your orders.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with a diverse range of products from trusted suppliers.',
    },
  ];

  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products Sold', value: '500K+' },
    { label: 'Countries Served', value: '50+' },
    { label: 'Years Experience', value: '10+' },
  ];

  return (
    <div className={`min-h-screen ${themeConfig.layout.type === 'grid' ? 'grid-pattern' : ''}`}>
      {/* Hero Section */}
      <section className={`${themeConfig.spacing.section} ${themeConfig.spacing.container}`}>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing you the best products from around the world. 
            Our journey started with a simple idea: make shopping enjoyable, reliable, and accessible to everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 ${
          themeConfig.layout.type === 'colorful-grid' ? 'bg-card/50 backdrop-blur-sm rounded-2xl p-8' : ''
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className={`${themeConfig.spacing.section} ${themeConfig.spacing.container}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional value through quality products, 
            outstanding service, and innovative solutions.
          </p>
        </div>

        <div className={`grid gap-8 ${
          themeConfig.layout.type === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : themeConfig.layout.type === 'sidebar'
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-lg ${themeConfig.spacing.card} hover:shadow-lg transition-all theme-transition group ${
                  themeConfig.layout.type === 'colorful-grid' ? 'hover:scale-105' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors theme-transition ${
                    themeConfig.layout.type === 'colorful-grid' ? 'group-hover:scale-110' : ''
                  }`}>
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Company Values */}
      <section className={`${themeConfig.spacing.section} ${themeConfig.spacing.container}`}>
        <div className={`bg-card border border-border rounded-2xl ${themeConfig.spacing.card} md:p-12`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to you.
            </p>
          </div>

          <div className={`grid gap-6 ${
            themeConfig.layout.type === 'sidebar' 
              ? 'grid-cols-1 md:grid-cols-2' 
              : 'grid-cols-1 md:grid-cols-3'
          }`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Every decision we make is centered around providing the best experience for our customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We strive for excellence in everything we do, from product selection to customer service.
              </p>
            </div>

            <div className={`text-center ${themeConfig.layout.type === 'sidebar' ? 'md:col-span-2 md:max-w-sm md:mx-auto' : ''}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We continuously innovate to bring you the latest and greatest products and features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
