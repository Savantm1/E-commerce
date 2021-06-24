import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

export const getCategories = createAsyncThunk('categories/getCategories', async() => {
    return await API.getCategories();
})

export const categoriesSlice = createSlice ({
    name: 'categories',
    initialState: {
        categories: [
             {category_name:"Bakery"},
             {category_name:"Fruit and vegetables"},
             {category_name:"Meat and fish"},
             {category_name:"Drinks"},
             {category_name:"Kitchen"},
             {category_name:"Special nutrition"},
             {category_name:"Baby"},
             {category_name:"Pharmacy"},
          ]
    },

    extraReducers : {
        [getCategories.pending] : (state,action) => {
            state.status = "loading"
          },
          [getCategories.fulfilled] : (state,action) => {
            state.categories = action.payload;
            state.status = "success"
        },
        [getCategories.rejected] : ( state,action) => {
          state.status = 'failed'
        },
    }
})


export default categoriesSlice.reducer