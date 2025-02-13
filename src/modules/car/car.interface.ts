export interface TCar {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
