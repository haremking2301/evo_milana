import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartProducts: JSON.parse(localStorage.getItem('cartProducts')) || [],
}

export const cartProductsReducer = createSlice({
    name: 'cartProducts',
    initialState: initialState,
    reducers: {
        addProductReducer: (state, actions) => {
            const allId = (state.cartProducts).map((item) => item.id)
            const id = actions.payload.id;
            const isId = allId.includes(id);
            if (isId) {
                const index = allId.findIndex((item) => item === id);
                const oldOder = state.cartProducts[index];
                oldOder.quantity = oldOder.quantity + actions.payload.quantity
                state.cartProducts[index] = oldOder
            } else {
                const lengthCart = state.cartProducts.length
                state.cartProducts[lengthCart] = actions.payload
            }
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },
        deleteProductReducer: (state, actions) => {
            state.cartProducts.splice(actions.payload, 1)
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },
        inCriseProductReducer: (state, actions) => {
            const oldOder = state.cartProducts[actions.payload];
            oldOder.quantity = oldOder.quantity + 1
            state.cartProducts[actions.payload] = oldOder
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },
        miniusProductReducer: (state, actions) => {
            const oldOder = state.cartProducts[actions.payload];
            if(oldOder.quantity > 1) {
            oldOder.quantity = oldOder.quantity - 1
            state.cartProducts[actions.payload] = oldOder
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
            }
        }
    }
})

export const addProductReducer = cartProductsReducer.actions.addProductReducer
export const deleteProductReducer = cartProductsReducer.actions.deleteProductReducer
export const inCriseProductReducer = cartProductsReducer.actions.inCriseProductReducer
export const miniusProductReducer = cartProductsReducer.actions.miniusProductReducer