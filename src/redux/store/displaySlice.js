import { createSlice } from "@reduxjs/toolkit";


const displaySlice = createSlice({
    name: "display",
    initialState: [],
    reducers: {
        showAll: (state, action) => {
            return [...action.payload];
        },
        filterByPrice(state, action) {
            return state.filter(item => (item.newPrice >= action.payload[0] && item.newPrice <= action.payload[1]))
        }, 
        filterByColor(state, action) {
            return state.filter(product => {
                return product.colors.some(color => action.payload.includes(color));
            });
        },
        filterBySize:(state, action) => {
            return state.filter(product => {
                return product.sizes.some(item => action.payload.includes(item.size) && item.quantity !== 0)
            });
        },
        filterByName: (state, action) => {
            return state.filter(product => {
                return product.name.toLowerCase().includes(action.payload.toLowerCase())
            });
        }
    }
});

export const { showAll, filterByPrice, filterByColor, filterBySize, filterByName } = displaySlice.actions;

export default displaySlice.reducer;
