import { configureStore } from "@reduxjs/toolkit";
import { getItemsProductsReducer } from "../reducers/getAllProducts";

const store = configureStore({
    reducer: {
        allProducts: getItemsProductsReducer.reducer
    }
})

export default store