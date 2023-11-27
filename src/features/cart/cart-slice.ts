import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/common";
import { CartSliceState } from "./types";
import { Params } from "./types";

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  showForm: false,
};

export const setOrder = createAsyncThunk<void, Params>(
  "cart/sendOrder", 
  async (body) => {
    await fetch(
      "https://food-shop-32824-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify(body)
      }
    );
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const existedItem = state.items.find((item) => item.id === payload.id);
      if (existedItem) {
        existedItem.count++;
      } else {
        state.items.push(payload);
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, { payload }) {
      const existedItem = state.items.find((item) => item.id === payload.id);
      if (existedItem && existedItem.count == 1) {
        state.items = state.items.filter((item) => item.id !== payload.id);
      } else if (existedItem) {
        existedItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    updateCart(state) {
      state.items = state.items.map((item) => {
        const newObj = { ...item };
        newObj.price *= 0.9;
        return newObj;
      });
      state.totalPrice = calcTotalPrice(state.items);
    },
    toggleForm(state) {
      state.showForm = !state.showForm;
    }
  },
});

export const { addItem, minusItem, removeItem, clearCart, updateCart, toggleForm } =
  cartSlice.actions;
export default cartSlice.reducer;
