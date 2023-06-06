import { createSlice } from '@reduxjs/toolkit'
import { initialProductState } from '../data'
const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        select: (state, action) => {
            return state.filter(item => item.id === action.payload.id);
        }
    }
});

export const { select } = productSlice.actions
export default productSlice.reducer