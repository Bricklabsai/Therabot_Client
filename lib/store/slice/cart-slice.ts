import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
    cart: any[];
}

interface IncreaseQuantityPayload {
    id: number;
}

interface DecreaseQuantityPayload {
    id: number;
}
interface RemoveItemPayload {
    id: number;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] } as CartState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (item: any) => item.id == action.payload.id
            );
            if (itemInCart) {
                if (itemInCart.quantity !== undefined) {
                    itemInCart.quantity++;
                }
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (
            state,
            action: PayloadAction<IncreaseQuantityPayload>
        ) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item && item.quantity !== undefined) {
                item.quantity++;
            }
        },
        decreaseQuantity: (
            state,
            action: PayloadAction<DecreaseQuantityPayload>
        ) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item && item.quantity !== undefined && item.quantity > 1) {
                item.quantity--;
            }
        },
        removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        clear: (state, action: PayloadAction<RemoveItemPayload>) => {
            state.cart = []
        }
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem, clear } =
    cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default cartSlice;