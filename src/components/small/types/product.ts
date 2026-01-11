export interface SizePrice {
  size: string;
  price: number;
  stock: number;
  sku: string;
}

export interface Variant {
  color: {
    name: string;
    hex: string;
  };
  images: string[];
  sizes: SizePrice[];
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  brand: string;
  variants: Variant[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
