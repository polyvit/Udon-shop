import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import axios from "axios";
import cardsReducer from "./cards/cards-slice";
import filterReducer from "./filters/filter-slice";
import cartReducer from "./cart/cart-slice";
import userReducer from "./authorization/user-slice";
import ordersReducer from './orders/orders-slice'
import { useDispatch } from "react-redux";

const reducers = combineReducers({
  cards: cardsReducer,
  filter: filterReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
