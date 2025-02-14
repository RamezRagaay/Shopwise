import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProd } from "@/services/products"

const initialState = {
    cartItems : [],
    amount: 0,
    total: 0,
}

export const getItem = createAsyncThunk(
    "cart/getItem",
    async (params) => {
        const res = await getProd(params.id)
        return {
            ...res,
            quantity: params.count
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [],
            state.amount = 0,
            state.total = 0
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.amount -= action.payload.quantity
            state.total -= action.payload.price * action.payload.quantity
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getItem.fulfilled, (state, action) => {
            if(state.cartItems.find((item) => item.id == action.payload.id)) {
                state.cartItems.map((item) => {
                    if(item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                    }
                })
            }
            else {
                state.cartItems.push(action.payload)
            }

            state.amount += action.payload.quantity
            state.total += action.payload.price * action.payload.quantity
            console.log("items: ", state.cartItems);
        });
    },
})

export const { clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer