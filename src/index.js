import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { hydrate } from "./redux/CartSlice";

const getTodosFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem("reduxState");
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const basket = getTodosFromLocalStorage();
if (basket) {
  store.dispatch(hydrate(basket));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
