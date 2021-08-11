import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalCount: 0,
    totalPrice: 0,
  },

  reducers: {
    hydrate(state, action) {
      return action.payload.cart;
    },

    addProductToCart(state, action) {
      let stateCopy = current(state);
      const index = stateCopy.products.findIndex(
        (element) => element.productName === action.payload.productName
      );
      if (index === -1) {
        state.products.push(action.payload);
      } else {
        state.products[index].count =
          Number(state.products[index].count) + Number(action.payload.count);
      }
      let total = state.products.reduce(
        (acc, iter) => acc + Number(iter.count),
        0
      );
      state.totalCount = total;

      let totalPrice = state.products.reduce(
        (acc, iter) => acc + Number(iter.price) * Number(iter.count),
        0
      );
      state.totalPrice = totalPrice;
    },
    deleteProductFromCart(state, action) {
      let stateCopy = current(state);
      let index = stateCopy.products.findIndex(
        (elem) => elem.id === action.payload
      );
      state.products.splice(index, 1);

      let total = state.products.reduce(
        (acc, iter) => acc + Number(iter.count),
        0
      );
      state.totalCount = total;

      let totalPrice = state.products.reduce(
        (acc, iter) => acc + Number(iter.price) * Number(iter.count),
        0
      );
      state.totalPrice = totalPrice;
    },
    changeCountOnCart(state, action) {
      let stateCopy = current(state);
      let index = stateCopy.products.findIndex(
        (elem) => elem.id === action.payload.id
      );
      state.products[index].count = action.payload.count;
      let total = state.products.reduce((acc, iter) => {
        return acc + Number(iter.count);
      }, 0);
      state.totalCount = total;

      let totalPrice = state.products.reduce(
        (acc, iter) => acc + Number(iter.price) * Number(iter.count),
        0
      );
      state.totalPrice = totalPrice;
    },
  },
});

export const {
  addProductToCart,
  deleteProductFromCart,
  changeCountOnCart,
  hydrate,
} = cartSlice.actions;
export default cartSlice.reducer;
