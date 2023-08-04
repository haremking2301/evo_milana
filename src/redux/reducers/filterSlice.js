/* eslint-disable default-case */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    params: {
        _sort: null,
        _order: null,
        brand: null,
        q:null,
        price_lte: null,
        price_gte: null,
    }
}

export const filterProductsReducer = createSlice({
    name: 'filterProductsReducer',
    initialState: initialState,
    reducers: {
        filterReducer: (state, actions) => {
            if (actions.payload === "Tên A-Z" || actions.payload === "Tên Z-A") {
                state.params._sort = "title";
                state.params._order = actions.payload === "Tên A-Z" ? "desc" : "asc";
            }
            if (actions.payload === "Giá tăng dần" || actions.payload === "Giá giảm dần") {
                state.params._sort = "price";
                state.params._order = actions.payload === "Giá tăng dần" ? "asc" : "desc";
            }
            switch (actions.payload) {
                case 'Evo Milana' :
                    state.params.brand = actions.payload;
                    break;
                case 'HAVAIANAS' :
                    state.params.brand = actions.payload;
                    break;
                case 'MLB' :
                    state.params.brand = actions.payload;
                    break;
                case 'TED BAKER' :
                    state.params.brand = actions.payload;
                    break;
                case 'THE KOOPLES' :
                    state.params.brand = actions.payload;
                    break;
            }
            switch (actions.payload) {
                case 'Giá dưới 300.000' :
                    state.params.price_lte = 300;
                    if (state.params.price_gte) {
                        delete state.params.price_gte;
                    }
                    break;
                case 'Giá dưới 500.000' :
                    state.params.price_lte = 500;
                    if (state.params.price_gte) {
                        delete state.params.price_gte;
                    }
                    break;
                case 'Giá dưới 1.000.000' :
                    state.params.price_lte = 1000;
                    if (state.params.price_gte) {
                        delete state.params.price_gte;
                    }
                    break;
                case 'Giá trên 1.000.000' :
                    state.params.price_gte = 1000;
                    if (state.params.price_lte) {
                        delete state.params.price_lte;
                    }
                    break;
            }
            switch (actions.payload) {
                case 'Áo' :
                    state.params.q = actions.payload;
                    break;
                case 'Croptop' :
                    state.params.q = actions.payload;
                    break;
                case 'Dép' :
                    state.params.q = actions.payload;
                    break;
                case 'Giày Sandal' :
                    state.params.q = actions.payload;
                    break;
                case 'Guốc' :
                    state.params.q = actions.payload;
                    break;
                case 'Ví' :
                    state.params.q = actions.payload;
                    break;
                case 'Túi xách' :
                    state.params.q = actions.payload;
                    break;
            }
        },
        deleteReducer: (state, action) => {
            state.params = {
                _sort: null,
                _order: null,
                brand: null,
                q:null,
                price_lte: null,
                price_gte: null,
            }
        }
    }
})

export const filterReducer = filterProductsReducer.actions.filterReducer
export const deleteReducer = filterProductsReducer.actions.deleteReducer