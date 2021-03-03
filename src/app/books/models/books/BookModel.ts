export interface IBook {
  id: string;
  name: string;
  author: string;
  description: string;
  price: number;
  category: string;
  createDate: number;
  isAvailable: boolean;
  imgUrl?: string;
  count?: number;
}

export enum BookCategories {
  Computers = 'Computers',
  Fantasy = 'Fantasy',
  History = 'History',
  Classic = 'Classic'
}
