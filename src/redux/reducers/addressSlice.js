import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import addressApi from "../../api/addressApi"
import evoMilanaApi from "../../api/evoMilanaApi"

const initialState = {
    allAddress: [],
    allLocal: [],
    districts: [],
    wards: [],
    citySelect: '',
    districtSelect: '',
    wardSelect: '',
}

export const allPlaceReducer = createSlice({
    name: 'allPlaceReducer',
    initialState: initialState,
    reducers: {
        addDistricts: (state, action) => {
            if ( action.payload === 'Chọn tỉnh thành') {
                state.districts = []
                state.wards = []
            } else {
                state.districts = (action.payload)[0].Districts
            }
        },
        addWards: (state, action) => {
            if ( action.payload === 'Chọn quận huyện') {
                state.wards = []
            } else {
                state.wards = (action.payload)[0].Wards
            }
        },
        selectCity: (state, action) => {
            if ( action.payload === 'Chọn tỉnh thành') {
                state.citySelect = ''
                state.districtSelect = ''
                state.wardSelect = ''
            } else {
                state.citySelect = action.payload
            }
        },
        selectDistrict: (state, action) => {
            if ( action.payload === 'Chọn quận huyện') {
                state.districtSelect = ''
                state.wardSelect = ''
            } else {
                state.districtSelect = action.payload
            }
        },
        selectWard: (state, action) => {
            if ( action.payload === "Chọn phường xã") {
                state.wardSelect = ''
            } else {
                state.wardSelect = action.payload
            }
        }
    },
    extraReducers: function(builder) {
        builder.addCase(getAllPlaceThunk.pending, (state, action) => {
        });
        builder.addCase(getAllPlaceThunk.fulfilled, (state, action) => {
            state.allLocal = action.payload
        });
        builder.addCase(getAllAddress.pending, (state, action) => {
        });
        builder.addCase(getAllAddress.fulfilled, (state, action) => {
            state.allAddress = action.payload
        });
    }
})

export const getAllAddress = createAsyncThunk('get/getAllAddress', async function(params) {
    const res = await evoMilanaApi.getAllAdress(params)
    return res
})

export const getAllPlaceThunk = createAsyncThunk('get/getAllPlaceThunk', async function() {
    const res = await addressApi.getAllLocal()
    return res
})

const { actions } = allPlaceReducer

export const { addDistricts, addWards, selectCity, selectDistrict, selectWard } = actions