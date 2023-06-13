import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import categoryReducer from './categorySlice'
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer,
        user: userReducer,
    }
});

export default store;