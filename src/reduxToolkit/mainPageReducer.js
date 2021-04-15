import { createAction, createReducer } from '@reduxjs/toolkit'
import { API } from '../api/api';

const initialState = {
    menuData : ['aa','bb','cc','vv']
}

export const dataSet = createAction("DATA_SET");

export default createReducer (initialState, {
    [dataSet] : (state) => {
        state = API.getMainPageData()
        return state
    }
})


 
