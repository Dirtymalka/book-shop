import {BookCategories, IBook} from '../books/models/books/BookModel';

export const BOOKS: IBook[] = [
  {
    id: '0',
    name: 'Learning Angular, 3rd Edition',
    description: 'Uncover Angular\'s potential for creating enterprise web applications―from setting up the environment to deployment―with the help of expert guidance, step-by-step explanations, and hands-on exercises.',
    price: 34.99,
    category: BookCategories.Computers,
    createDate: 2021,
    isAvailable: true,
  },
  {
    id: '1',
    name: 'The History of Ancient Egypt',
    description: 'Ancient Egyptian civilization is so grand our minds sometimes have difficulty adjusting to it. It lasted 3,000 years, longer than any other on the planet.',
    price: 59.96,
    category: BookCategories.History,
    createDate: 1999,
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Avatar: The Last Airbender',
    description: 'Things are looking bright at the Beifong Metalbending Academy! But after all the adventures Toph\'s had with Aang, Sokka, Zuko, and Katara, the whole thing feels a bit dull.',
    price: 10.95,
    category: BookCategories.Art,
    createDate: 899,
    isAvailable: false,
  },
];
