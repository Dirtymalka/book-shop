export interface ICartProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  createDate: number;
  isAvailable: boolean;
  count?: number;
}
