import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import axios from "axios";
import cardsReducer from "./cards-slice";
import filterReducer from "./filter-slice";
import cartReducer from "./cart-slice";
import { apiSlice } from "./api-slice";
import userReducer from "./user-slice";

const reducers = combineReducers({
  cards: cardsReducer,
  filter: filterReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
    }),
});

export default store;
