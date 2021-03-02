import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;