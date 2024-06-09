export interface Products {
  name: string;
  price: number;
  discount: number;
  description: string;
  image: string;
  category: string;
  originalPrice: number;
  rating: string;
  reviews: number;
  quantity?: number; // Añadido optional quantity
}

export interface ProductsResponse {
  strategy:Products[];
  family:Products[];
  cooperative:Products[];
  kids:Products[];
  outstanding: Products[];
}
