export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  description: string;
  details: string;
  materials: string;
  care: string;
  images: string[];
  colors: Color[];
  sizes: Size[];
  featured?: boolean;
}

export interface Color {
  name: string;
  value: string;
}

export interface Size {
  label: string;
  available: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}
