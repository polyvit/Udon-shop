type Item = {
  name: string;
  email: string;
  price: number;
  count: number;
}

export type OrderItem = {
  date: string;
  email: string;
  items: Item[];
  totalPrice: number;
}
export type Orders = Record<string, OrderItem>

export interface OrdersSliceState {
  status: string;
  orders: OrderItem[];
}
