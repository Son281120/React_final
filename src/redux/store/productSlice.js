import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    originProducts: [],
    status: "idle",
    error: null,
    displayProducts: [],
    filterItem: { name: '', sizes: [], colors: [], price: [] },
    exsitProducts: [],
    selected: []
  },
  reducers: {
    fetchProductsStart(state) {
      state.status = 'loading'
    },
    fetchProductsSuccess: (state, action) => {
      state.status = 'successed';
      state.originProducts = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    updateFilterName: (state, action) => {
      state.filterItem.name = action.payload;
    },
    updateFilterSizes: (state, action) => {
      state.filterItem.sizes = action.payload;
    },
    updateFilterColors: (state, action) => {
      state.filterItem.colors = action.payload;
    },
    updateFilterPrice: (state, action) => {
      state.filterItem.price = action.payload;
    },
    filterData: (state, action) => {
      // bien doi originProducts -> displayProducts theo action.payload
      let results = [...state.originProducts];
      if (action.payload.name !== undefined) {
        results = results.filter(elm => elm.name.toLowerCase().includes(action.payload.name.toLowerCase()));
      }
      if (action.payload.sizes.length > 0) {
        results = results.filter(elm => elm.sizes.some(item => action.payload.sizes.includes(item.size)));
      }

      if (action.payload.colors.length > 0) {
        results = results.filter(elm => action.payload.colors.some(color => elm.colors.includes(color)));
      }
      if (action.payload.price.length > 0) {
        results = results.filter(elm => (action.payload.price[0] <= elm.newPrice && elm.newPrice <= action.payload.price[1]));
      }

      state.displayProducts = [...results];
    },
    addSelectedExist: (state, action) => {


    },
    addSelectedNotExist: (state, action) => {
      const [id, checkedSize, quantity, data] = action.payload;
      state.exsitProducts.push({ id: id, sizeBuy: checkedSize.size })
      const newSelectProduct = { ...data, quantityBuy: quantity, sizeBuy: checkedSize.size };
      state.selected.push(newSelectProduct);
    }
  }
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, filterData, updateFilterName, updateFilterSizes, updateFilterColors, updateFilterPrice, addSelectedExist, addSelectedNotExist } = productsSlice.actions;

export default productsSlice.reducer;
