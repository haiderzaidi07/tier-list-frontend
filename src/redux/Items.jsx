import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: []
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        addItem: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(val => val._id !== action.payload)
        },
        upgradeTier: (state, action) => {
            state.items = state.items.map(val => { return val._id === action.payload._id ? action.payload : val })
        },
        downgradeTier: (state, action) => {
            state.items = state.items.map(val => { return val._id === action.payload._id ? action.payload : val })
        }
    },
})

export const { setItems, addItem, deleteItem, upgradeTier, downgradeTier } = itemsSlice.actions

export default itemsSlice.reducer