import { createSlice } from "@reduxjs/toolkit";
import { CardOneItem } from "../cards/types";
import { FilterSliceState } from "./types";


const initialState: FilterSliceState = {
  categoryId: 0,
  searchValue: "",
  sort: {
    name: "популярности (убыв)",
    sortProperty: "-rating",
  },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, { payload }) {
      state.categoryId = payload;
    },
    setSort(state, { payload }) {
      state.sort = payload;
    },
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
});

// Selectors

export const selectItemsBySearch = (items: CardOneItem[], searchValue: string) => {
  if (!searchValue) return items;
  return items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export const { setCategoryId, setSort, setSearchValue, setCurrentPage } =
  filterSlice.actions;
export default filterSlice.reducer;
