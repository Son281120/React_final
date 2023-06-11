import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice';
import displayReducer from './displaySlice'
const store = configureStore({
    reducer: {
        products: productReducer,
        display: displayReducer
    }
});

export default store;