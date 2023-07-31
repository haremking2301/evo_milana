import { configureStore } from "@reduxjs/toolkit";
import { getItemsProductsReducer } from "../reducers/getAllProducts";
import { cartProductsReducer } from "../reducers/cartSlice";
import { loveProductsReducer } from "../reducers/loveSlice";

const store = configureStore({
    reducer: {
        allProducts: getItemsProductsReducer.reducer,
        cartProducts: cartProductsReducer.reducer,
        loveProducts: loveProductsReducer.reducer
    }
})

export default store