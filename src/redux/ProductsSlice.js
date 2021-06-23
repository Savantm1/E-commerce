import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/api";


export const getProducts = createAsyncThunk('products/getProducts', async ({limit,bestSelling,bestFromFarmers}) => {
    debugger
    return await API.getProducts(limit,bestFromFarmers,bestSelling);
});

export const productSlice = createSlice ({
    name: "products" ,
    initialState: {
        productsArray: [],
    },
    extraReducers : {
        [getProducts.pending] : (state,action) => {
            state.status = "loading"
        },
        [getProducts.fulfilled] : (state,action) => {
            debugger
            state.productsArray = action.payload.products;
            state.status= "success"
        },
        [getProducts.rejected] : (state,action) => {
            state.status = "failed"
        }
    }
})

export default productSlice.reducer;