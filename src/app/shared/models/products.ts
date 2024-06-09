export interface Products {
  name: string;
  price: string;
  discount: string;
  description: string;
  image: string;
  category: string;
  originalPrice: string;
  rating: string;
  reviews: string;
}

export interface ProductsResponse {
  strategy:Products[];
  family:Products[];
  cooperative:Products[];
  kids:Products[];
  outstanding: Products[];
}
