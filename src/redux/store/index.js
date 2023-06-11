import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import displayReducer from './displaySlice'
import categoryReducer from './categorySlice'
const store = configureStore({
    reducer: {
        products: productReducer,
        display: displayReducer,
        category: categoryReducer
    }
});

export default store;