import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartQuantity: 0,
    cartAmount: 0
};

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemIdx = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIdx >= 0) {
                state.cartItems[itemIdx].cartQuantity += 1;
                toast.info(`Increased quantity of ${state.cartItems[itemIdx].name}`, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
            else {
                const tempItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempItem);
                toast.success(`${action.payload.name} added to cart!`, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;