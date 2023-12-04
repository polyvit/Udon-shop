import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { OrdersSliceState, OrderItem, Orders } from "./types";
import { DATABASE_URL } from "../../utils/constants";

const initialState: OrdersSliceState = {
  status: "loading",
  orders: [],
}

export const loadOrders = createAsyncThunk<OrderItem[], null, {extra: {client: typeof axios}}>(
  "orders/loadOrders",
  async (_, { extra: { client } }) => {
    const { data } = await client.get(DATABASE_URL);
    return data;
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadOrders.pending, (state) => {
      state.status = "loading";
      state.orders = [];
    });
    builder.addCase(loadOrders.fulfilled, (state, { payload }) => {
      state.status = "success";
      Object.values(payload).forEach(order => {
        state.orders.push(order)
      })
    });
    builder.addCase(loadOrders.rejected, (state) => {
      state.status = "error";
      state.orders = [];
    });
  },
})

// Selectors

export const selectOrders = (orders: OrderItem[], email: string) => {
  if(!email) return orders;
  return Object.values(orders).filter(order => order.email === email)
}

export default ordersSlice.reducer;
