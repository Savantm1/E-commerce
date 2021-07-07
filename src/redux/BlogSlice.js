import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

export const getBlogs = createAsyncThunk('blog/getBlogs', async() => {
    
    return await API.getBlogs();
})
export const getBlogItem = createAsyncThunk('blog/getBlogItem', async(item) => {
    debugger
    return await API.getBlogItem(item);
})

export const AddCommentToServer = createAsyncThunk('blog/addCommentToServer', async(data) => {
    debugger
    return await API.AddComment(data);
})

export const blogSlice = createSlice ({
    name: 'blog',
    initialState: {
        blog: [],
        blogItem: {
            comments: []
        }
    },
    reducers: {
        addComment(state,action) {
            debugger;
            state.blogItem.comments.push(action.payload);
        }

    },

    extraReducers : {

          [getBlogs.fulfilled] : (state,action) => {        
            state.blog = action.payload;
        },
        [getBlogItem.fulfilled] : (state,action) => {          
            state.blogItem = action.payload;

        }

    }
})

export const {addComment} = blogSlice.actions;
export default blogSlice.reducer