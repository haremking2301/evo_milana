import { configureStore } from "@reduxjs/toolkit";
import { getItemsProductsReducer } from "../reducers/getAllProducts";
import { cartProductsReducer } from "../reducers/cartSlice";
import { loveProductsReducer } from "../reducers/loveSlice";
import { filterProductsReducer } from "../reducers/filterSlice";
import { allPlaceReducer } from "../reducers/addressSlice";

const store = configureStore({
    reducer: {
        allProducts: getItemsProductsReducer.reducer,
        cartProducts: cartProductsReducer.reducer,
        loveProducts: loveProductsReducer.reducer,
        filterProducts: filterProductsReducer.reducer,
        allPlace: allPlaceReducer.reducer
    }
})

export default store