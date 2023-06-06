import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], status: "idle", error: null },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = state.products.concat(action.payload);
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
});

export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
