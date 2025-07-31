import React from 'react';
import { Product } from '../services/productService';
import { Star, ShoppingCart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { themeConfig } = useTheme();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div 
      className={`bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all theme-transition group ${
        themeConfig.layout.type === 'grid' ? 'hover:scale-105' : 'hover:shadow-xl'
      }`}
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform theme-transition"
          loading="lazy"
        />
      </div>
      
      <div className={themeConfig.spacing.card}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2 text-sm leading-tight">
            {product.title}
          </h3>
          <span className="text-lg font-bold text-primary flex-shrink-0">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {renderStars(product.rating.rate)}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating.count})
            </span>
          </div>
          
          <button 
            className={`p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors theme-transition ${
              themeConfig.layout.type === 'colorful-grid' ? 'hover:scale-110' : ''
            }`}
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-2">
          <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full capitalize">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};
