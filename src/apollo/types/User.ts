export interface User {
  email: string;
  profile: Profile;
}

export interface DataUser {
  authenticatedUser: User;
}

export interface Cart {
  id: string;
  items: { sku: Sku; quantity: number }[];
}

export interface Sku {
  code: string;
  title: string;
  slug: string;
  pricing: Pricing;
  image: string;
  stock: Stock;
}

interface Pricing {
  salePrice: number;
  listPrice: number;
  discount: number;
}

interface Stock {
  labels: string[];
}

interface Profile {
  firstName: string;
  lastName: string;
}
