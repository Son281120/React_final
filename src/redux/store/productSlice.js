import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], status: "idle", error: null },
  reducers: {
    fetchProductsStart(state) {
      state.status = 'loading'
    },
    fetchProductsSuccess: (state, action) => {
      state.status = 'successded';
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    }
  }
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;
