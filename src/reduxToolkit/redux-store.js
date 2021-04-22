import { configureStore } from '@reduxjs/toolkit'
import FeedbackReducer from './FeedbackReducer'
import mainPageReducer from './mainPageReducer'

export default configureStore({
  reducer: {
    test: mainPageReducer,
    feedback: FeedbackReducer
  }
})