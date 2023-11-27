export type CartOneItem = {
  id: string;
  imageUrl: string;
  name: string;
  category: number;
  rating: number;
  price: number;
  fishBase: boolean;
  extras: number;
  count: number;
}

export interface CartSliceState {
  items: CartOneItem[];
  totalPrice: number;
  showForm: boolean;
}

export type Params = {
  email: string;
  items: CartOneItem[];
  totalPrice: number;
}