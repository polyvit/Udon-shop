import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import { buildUrl } from "../../utils/common";
import { Params, CardOneItem, CardsSiceState } from "./types";
import axios from "axios";

export const loadItems = createAsyncThunk<CardOneItem[], Params, {extra: {client: typeof axios}}>(
  "cards/loadItems",
  async (params, { extra: { client } }: any) => {
    const { data } = await client.get(`${BASE_URL}${buildUrl(params)}`);
    return data;
  }
);
export const loadItemById = createAsyncThunk<CardOneItem, string, {extra: {client: typeof axios}}>(
  "cards/loadItemById",
  async (id: string, { extra: { client } }: any) => {
    const { data } = await client.get(`${BASE_URL}/${id}`);
    return data;
  }
);

const initialState: CardsSiceState = {
  status: "loading",
  items: [],
  currentDish: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadItems.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(loadItems.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.items = payload;
    });
    builder.addCase(loadItems.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
    builder.addCase(loadItemById.pending, (state) => {
      state.status = "loading";
      state.currentDish = null;
    });
    builder.addCase(loadItemById.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.currentDish = payload;
    });
    builder.addCase(loadItemById.rejected, (state) => {
      state.status = "error";
      state.currentDish = null;
    });
  },
});

export default cardsSlice.reducer;
