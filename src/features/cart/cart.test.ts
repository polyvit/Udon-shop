import cartReducer from './cart-slice';
import {addItem, minusItem} from './cart-slice';

const initialState = {
  items: [], 
  totalPrice: 0,
  showForm: false,
}

const addedItem = {
        id:"1", 
        imageUrl:"https://avatars.mds.yandex.net/get-eda/3512182/7b4d20de0d1a44bdbb0e65cc87133678/M_height", 
        name:"Удон карри с курицей терияки",
        price: 440,
        category: 1,
        rating: 9,
        fishBase: false,
        extras: 0, 
        count: 1
      }

const cartWithItems = {
  items: [
    {
        id:"1", 
        imageUrl:"https://avatars.mds.yandex.net/get-eda/3512182/7b4d20de0d1a44bdbb0e65cc87133678/M_height", 
        name:"Удон карри с курицей терияки",
        price: 440,
        category: 1,
        rating: 9,
        fishBase: false,
        extras: 0, 
        count: 1
      }
  ],
  totalPrice: 440,
  showForm: false,
}

describe('cartSlice', () => {
  it('should add item to cart from scratch', () => {
    const action = {type: addItem.type, payload: addedItem};
    const result = cartReducer(initialState, action);
    expect(result.items[0]).toEqual(addedItem);
  })
  it('should minus item from cart', () => {
    const action = {type: minusItem.type, payload: addedItem};
    const result = cartReducer(cartWithItems, action);
    expect(result.items).toEqual([])
  })
})