import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: { category: [], status: "idle", error: null },
    reducers: {
        fetchCategoryStart(state) {
            state.status = 'loading'
        },
        fetchCategorySuccess: (state, action) => {
            state.status = 'successed';
            state.category = action.payload;
        },
        fetchCategoryFailure(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { fetchCategoryStart, fetchCategorySuccess, fetchCategoryFailure } = categorySlice.actions;

export default categorySlice.reducer;