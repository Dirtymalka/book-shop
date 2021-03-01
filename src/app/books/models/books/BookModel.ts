export interface IBook {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  createDate: number;
  isAvailable: boolean;
  count?: number;
}

export enum BookCategories {
  Computers = 'Computers',
  Fantasy = 'Fantasy',
  Art = 'Art',
  History = 'History',
}
