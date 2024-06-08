export interface Products {
  name: string;
  price: string;
  discount: string;
  description: string;
  image: string;
}

export interface ProductsResponse {
  strategy:Products[];
  family:Products[];
  cooperative:Products[];
  kids:Products[];
}
