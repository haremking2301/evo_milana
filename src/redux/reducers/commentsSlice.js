import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import evoMilanaApi from "../../api/evoMilanaApi"

const initialState = {
    comments: []
}

export const allCommentsReducer = createSlice({
    name: 'allCommentsReducer',
    initialState: initialState,
    reducers: {

    },
    extraReducers: function(builder) {
        builder.addCase(getAllCommentsThunk.pending, (state, action) => {
        });
        builder.addCase(getAllCommentsThunk.fulfilled, (state, action) => {
            state.comments = action.payload
        });
    }
})

export const getAllCommentsThunk = createAsyncThunk('get/getAllCommentsThunk', async function(params) {
    const res = await evoMilanaApi.getAllComments(params)
    return res
})