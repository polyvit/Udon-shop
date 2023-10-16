export type Params = {
  page: number;
  limit: number;
  search: string;
  sortBy: string;
  order: string;
  category: string;
}

export type CardOneItem = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  category: number;
  rating: number;
  fishBase: boolean;
}

export interface CardsSiceState {
  status: string;
  items: CardOneItem[];
  currentDish: CardOneItem | null;
}