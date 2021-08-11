import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (productId) => {
    return await API.getProduct(productId);
  }
);

export const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload.product;
      state.status = "success";
    },
    [getProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default singleProductSlice.reducer;
