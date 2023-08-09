import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import evoMilanaApi from "../../api/evoMilanaApi"

const initialState = {
    // Trang products
    dataItems: [],
    isLoading: false,
    totalPages: 0,
    pageNumber: 1,
    // Trang details
    dataDetails: [],
    isLoadingDetails: false,
    // Trang search results
    search: '',
    dataItemsSearch: [],
    isLoadingSearch: false,
    totalPagesSearch: 0,
    pageNumberSearch: 1,
    // Account
    isAccount: '',
    detailsAccount: [],
    idUser: null || sessionStorage.getItem('idUser'),
    // Trang tin tức
    dataNews: [],
    isLoadingNews: false,
    // cart
    cartLength: 0,
}

export const getItemsProductsReducer = createSlice({
    name: 'getItemsProductsReducer',
    initialState: initialState,
    reducers: {
        pageNumberReducer: (state, actions) => {
            state.pageNumber = actions.payload
        },
        pageNumberSearchReducer: (state, actions) => {
            state.pageNumberSearch = actions.payload
        },
        searchReducer: (state, actions) => {
            state.search = actions.payload
        },
        accountReducer: (state, actions) => {
            state.isAccount = actions.payload
        },
        cartLengthReducer: (state, actions) => {
            state.cartLength = actions.payload
        }
    },
    extraReducers: function(builder) {
        builder.addCase(getItemsProductsThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getItemsProductsThunk.fulfilled, (state, action) => {
            state.dataItems = action.payload.data
            state.totalPages = action.payload.headers["x-total-count"]
            state.isLoading = false;
        });
        builder.addCase(getItemsDetailsThunk.pending, (state, action) => {
            state.isLoadingDetails = true;
        });
        builder.addCase(getItemsDetailsThunk.fulfilled, (state, action) => {
            state.dataDetails = action.payload
            state.isLoadingDetails = false;
        })
        builder.addCase(getItemsProductsSearchThunk.pending, (state, action) => {
            state.isLoadingSearch = true;
        });
        builder.addCase(getItemsProductsSearchThunk.fulfilled, (state, action) => {
            state.dataItemsSearch = action.payload.data
            state.totalPagesSearch = action.payload.headers["x-total-count"]
            state.isLoadingSearch = false;
        });
        builder.addCase(getItemsNewsThunk.pending, (state, action) => {
            state.isLoadingNews = true;
        });
        builder.addCase(getItemsNewsThunk.fulfilled, (state, action) => {
            state.dataNews = action.payload
            state.isLoadingNews = false;
        });
        builder.addCase(getUserDetailsThunk.pending, (state, action) => {
        });
        builder.addCase(getUserDetailsThunk.fulfilled, (state, action) => {
            state.idUser = action.payload[0].id
            sessionStorage.setItem('idUser', state.idUser)
            state.detailsAccount = action.payload
        });
    }
})

// Trang products
export const getItemsProductsThunk = createAsyncThunk('get/getItemsProductsThunk', async function(params) {
    const res = await evoMilanaApi.getItemProducts(params)
    return res
})

export const pageNumberReducer = getItemsProductsReducer.actions.pageNumberReducer

// Trang products detail
export const getItemsDetailsThunk = createAsyncThunk('get/getItemsDetailsThunk', async function(id) {
    const res = await evoMilanaApi.getItemDetails(id)
    return res.data
})

// Trang search
export const getItemsProductsSearchThunk = createAsyncThunk('get/getItemsProductsSearchThunk', async function(params) {
    const res = await evoMilanaApi.getItemProducts(params)
    return res
})

export const pageNumberSearchReducer = getItemsProductsReducer.actions.pageNumberSearchReducer

export const searchReducer = getItemsProductsReducer.actions.searchReducer

// Account

export const getUserDetailsThunk = createAsyncThunk('get/getUserDetailsThunk', async function(ac) {
    const res = await evoMilanaApi.getDataUsers(ac)
    return res
})

export const accountReducer = getItemsProductsReducer.actions.accountReducer

// Trang Tin tức

export const getItemsNewsThunk = createAsyncThunk('get/getItemsNewsThunk', async function(params) {
    const res = await evoMilanaApi.getDataNews(params)
    return res
})

// cart
export const cartLengthReducer = getItemsProductsReducer.actions.cartLengthReducer
