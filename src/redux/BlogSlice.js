import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

export const getBlogs = createAsyncThunk('blog/getBlogs', async() => {
    
    return await API.getBlogs();
})

export const blogSlice = createSlice ({
    name: 'blog',
    initialState: {
        blog: []
    },
    extraReducers : {
        [getBlogs.pending] : (state,action) => {
            state.status = "loading"
          },
          [getBlogs.fulfilled] : (state,action) => {
              
            state.blog = action.payload;
            state.status = "success"
        },
        [getBlogs.rejected] : ( state,action) => {
          state.status = 'failed'
        },
    }
})

export default blogSlice.reducer