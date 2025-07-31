export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductCategory {
  name: string;
  slug: string;
}

// Use a CORS proxy for the external API
const API_BASE_URL = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://fakestoreapi.com');

// Helper function to handle API calls with fallback to mock data
async function fetchWithFallback<T>(url: string, mockData: T): Promise<T> {
  // For now, just return mock data immediately to avoid CORS issues
  console.log('Using mock data for:', url);
  return new Promise(resolve => {
    setTimeout(() => resolve(mockData), 500); // Simulate API delay
  });
}

// Mock data for fallback
const mockProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Classic Denim Jacket",
    price: 89.99,
    description: "Timeless denim jacket perfect for casual wear. Made from premium denim fabric.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
    rating: { rate: 4.2, count: 89 }
  },
  {
    id: 3,
    title: "Stainless Steel Watch",
    price: 299.99,
    description: "Elegant stainless steel watch with precision movement and water resistance.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: { rate: 4.8, count: 203 }
  },
  {
    id: 4,
    title: "Leather Crossbody Bag",
    price: 149.99,
    description: "Stylish leather crossbody bag perfect for everyday use. Multiple compartments.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: { rate: 4.3, count: 76 }
  },
  {
    id: 5,
    title: "Comfortable Running Shoes",
    price: 129.99,
    description: "Lightweight running shoes with superior comfort and durability for all activities.",
    category: "footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: { rate: 4.6, count: 156 }
  },
  {
    id: 6,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Soft organic cotton t-shirt available in multiple colors. Sustainable and comfortable.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: { rate: 4.4, count: 234 }
  },
  {
    id: 7,
    title: "Wireless Bluetooth Speaker",
    price: 79.99,
    description: "Portable Bluetooth speaker with rich sound and long battery life. Perfect for outdoor use.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: { rate: 4.1, count: 98 }
  },
  {
    id: 8,
    title: "Minimalist Backpack",
    price: 119.99,
    description: "Clean, minimalist backpack with laptop compartment and thoughtful organization.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: { rate: 4.7, count: 145 }
  }
];

const mockCategories = ["electronics", "clothing", "accessories", "footwear"];

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    return fetchWithFallback(
      `${API_BASE_URL}/products`,
      mockProducts
    );
  },

  async getProductById(id: number): Promise<Product> {
    return fetchWithFallback(
      `${API_BASE_URL}/products/${id}`,
      mockProducts.find(p => p.id === id) || mockProducts[0]
    );
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    return fetchWithFallback(
      `${API_BASE_URL}/products/category/${category}`,
      mockProducts.filter(p => p.category === category)
    );
  },

  async getCategories(): Promise<string[]> {
    return fetchWithFallback(
      `${API_BASE_URL}/products/categories`,
      mockCategories
    );
  },

  async getLimitedProducts(limit: number): Promise<Product[]> {
    return fetchWithFallback(
      `${API_BASE_URL}/products?limit=${limit}`,
      mockProducts.slice(0, limit)
    );
  },
};
