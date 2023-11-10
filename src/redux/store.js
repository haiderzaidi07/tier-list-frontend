import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Auth'
import { itemsSlice } from './Items'

export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        items: itemsSlice.reducer
    }
})