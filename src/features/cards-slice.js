import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/constants";
import { buildUrl } from "../utils/common";

export const loadItems = createAsyncThunk(
  "cards/loadItems",
  async (params, { extra: { client } }) => {
    const { data } = await client.get(`${BASE_URL}${buildUrl(params)}`);
    return data;
  }
);
export const loadItemById = createAsyncThunk(
  "cards/loadItemById",
  async (id, { extra: { client } }) => {
    const { data } = await client.get(`${BASE_URL}/${id}`);
    return data;
  }
);

const initialState = {
  status: "loading",
  items: [],
  currentDish: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
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
      state.currentDish = {};
    });
    builder.addCase(loadItemById.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.currentDish = payload;
    });
    builder.addCase(loadItemById.rejected, (state) => {
      state.status = "error";
      state.currentDish = {};
    });
  },
});

export default cardsSlice.reducer;
