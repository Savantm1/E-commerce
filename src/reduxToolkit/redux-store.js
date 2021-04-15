import { configureStore } from '@reduxjs/toolkit'
import mainPageReducer from './mainPageReducer'

export default configureStore({
  reducer: {
    test: mainPageReducer
  }
})