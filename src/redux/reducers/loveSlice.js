import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import evoMilanaApi from "../../api/evoMilanaApi";

const initialState = {
    loveProducts: [],
}

export const loveProductsReducer = createSlice({
    name: 'loveProductsReducer',
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: function(builder) {
        builder.addCase(getDressItemsThunk.pending, (state, action) => {

        });
        builder.addCase(getDressItemsThunk.fulfilled, (state, action) => {
            state.loveProducts = action.payload
        });
    }
})

export const getDressItemsThunk = createAsyncThunk('get/getDressItemsThunk', async function(key) {
    const res = await evoMilanaApi.getDataLove(key)
    return res
})