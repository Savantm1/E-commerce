import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async ({
    category,
    bestSelling = false,
    bestFromFarmers = false,
    limit = 9,
    page = 1,
  }) => {
    return await API.getCategoryProducts(
      category,
      bestSelling,
      bestFromFarmers,
      limit,
      page
    );
  }
);

export const singleCategorySlice = createSlice({
  name: "category",
  initialState: {
    categoryProducts: [],
    currentPage: 1,
  },
  reducers: {
    selectPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getCategory.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCategory.fulfilled]: (state, action) => {
      state.categoryProducts = action.payload;
      state.status = "success";
    },
    [getCategory.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { selectPage } = singleCategorySlice.actions;
export default singleCategorySlice.reducer;
