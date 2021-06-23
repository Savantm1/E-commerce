import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '../api/api';

export const getFeedback = createAsyncThunk('feedback/getFeedback', async () => {
 return await API.getFeedback();
})

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        status: null,
        feedbackArray: [
                  
                 
                ]
    },
    reducers : {

      addFeedback(state, action) {
        state.feedbackArray.push(action.payload) 
      }
      
    },
    extraReducers : {
      [getFeedback.pending] : (state,action) => {
        state.status = "loading"
      },
      [getFeedback.fulfilled] : (state,action) => {
        state.feedbackArray = action.payload;
        state.status = "success"
    },
    [getFeedback.rejected] : ( state, action) => {
      state.status = 'failed'
    },
}})

export const {addFeedback} = feedbackSlice.actions
export default feedbackSlice.reducer

