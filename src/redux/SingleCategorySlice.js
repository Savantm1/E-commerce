import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/api";


export const getCategory = createAsyncThunk('category/getCategory', async({category, bestSelling=false, bestFromFarmers=false, limit=9}) => {
    debugger
    return await API.getCategoryProducts(category,bestSelling,bestFromFarmers,limit);
})

export const singleCategorySlice = createSlice ({
    name: "category",
    initialState: {
        categoryProducts: [ ]
    },
    extraReducers : {
        [getCategory.pending] : (state,action) => {
            state.status = "loading"
          },
          [getCategory.fulfilled] : (state,action) => {
              debugger
            state.categoryProducts = action.payload;
            state.status = "success"
        },
        [getCategory.rejected] : ( state,action) => {
          state.status = 'failed'
        },
    }
})

export default singleCategorySlice.reducer

