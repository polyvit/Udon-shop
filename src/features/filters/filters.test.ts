import { selectItemsBySearch } from "./filter-slice";
import filterReducer from './filter-slice';
import {setCategoryId, setSort, setSearchValue} from './filter-slice';

describe('redux selector', () => {
  it('should select items from state array by search value', () => {
    const items = [
      {
        id:"1", 
        imageUrl:"https://avatars.mds.yandex.net/get-eda/3512182/7b4d20de0d1a44bdbb0e65cc87133678/M_height", 
        name:"Удон карри с курицей терияки",
        price: 440,
        category: 1,
        rating: 9,
        fishBase: false,
      },
      {
        id:"3", 
        imageUrl:"https://avatars.mds.yandex.net/get-eda/3534679/0923c502363613a8a851854c9d3424c7/M_height", 
        name:"Удон Пирикара с курицей",
        price: 340,
        category: 1,
        rating: 8,
        fishBase: false,
      }
  ]
  const filteredItems = [
      {
        id:"1", 
        imageUrl:"https://avatars.mds.yandex.net/get-eda/3512182/7b4d20de0d1a44bdbb0e65cc87133678/M_height", 
        name:"Удон карри с курицей терияки",
        price: 440,
        category: 1,
        rating: 9,
        fishBase: false,
      }
  ]
  const result = selectItemsBySearch(items, 'карри');
  expect(result).toEqual(filteredItems);
  })
})

const initialState = {
  categoryId: 0,
  searchValue: "",
  sort: {
    name: "популярности (убыв)",
    sortProperty: "-rating",
  },
  currentPage: 1,
}

describe("filterSlice", () => {
  it("should return initial state after passing empty action", () => {
    const result = filterReducer(undefined, {type: ''});
    expect(result).toEqual(initialState);
  });
  it("should set category id", () => {
    const action = {type: setCategoryId.type, payload: 1};
    const result = filterReducer(initialState, action);
    expect(result.categoryId).toBe(1);
  });
  it("should set sort settings", () => {
    const action = {type: setSort.type, payload: {name: 'цене (возр)', sortProperty: 'price'}};
    const result = filterReducer(initialState, action);
    expect(result.sort).toEqual({name: 'цене (возр)', sortProperty: 'price'})
  });
  it("should set search value", () => {
    const action = {type: setSearchValue.type, payload: 'карри'};
    const result = filterReducer(initialState, action);
    expect(result.searchValue).toBe('карри')
  });
})