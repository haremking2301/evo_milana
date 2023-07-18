import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import evoMilanaApi from "../../api/evoMilanaApi"

const initialState = {
    dataItems: [],
    isLoading: false,
    totalPages: 0,
}

export const getItemsProductsReducer = createSlice({
    name: 'getItemsProductsReducer',
    initialState: initialState,
    reducers: {

    },
    extraReducers: function(builder) {
        builder.addCase(getItemsProductsThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getItemsProductsThunk.fulfilled, (state, action) => {
            state.dataItems = action.payload.data
            state.totalPages = action.payload.headers["x-total-count"]
            state.isLoading = false;
        })
    }
})

export const getItemsProductsThunk = createAsyncThunk('get/getItemsProductsThunk', async function(params) {
    const res = await evoMilanaApi.getItemProducts(params)
    return res
})