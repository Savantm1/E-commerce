import {configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./FeedbackSlice";
import categoriesReducer from "./CategoriesSlice";
import productReducer from "./ProductsSlice";
import singleProductReducer from "./SingleProductSlice"
import singleCategoryReducer from "./SingleCategorySlice";
import blogReducer from "./BlogSlice"

export default configureStore( {
    reducer: {
        feedback : feedbackReducer,
        categories: categoriesReducer,
        products: productReducer,
        product: singleProductReducer,
        category:  singleCategoryReducer,
        blog: blogReducer
    }
})