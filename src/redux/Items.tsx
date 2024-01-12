import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Item {
    _id: string,
    name: string,
    tier: string,
    userID: string,
    __v?: number
}

interface InitialState {
    items: Item[]
}

const initialState: InitialState = {
    items: []
}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<Item[]>) => {
            state.items = action.payload
        },
        addItem: (state, action: PayloadAction<Item>) => {
            state.items = [...state.items, action.payload]
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(val => val._id !== action.payload)
        },
        upgradeTier: (state, action: PayloadAction<Item>) => {
            state.items = state.items.map(val => { return val._id === action.payload._id ? action.payload : val })
        },
        downgradeTier: (state, action: PayloadAction<Item>) => {
            state.items = state.items.map(val => { return val._id === action.payload._id ? action.payload : val })
        }
    },
})

export const { setItems, addItem, deleteItem, upgradeTier, downgradeTier } = itemsSlice.actions

export default itemsSlice.reducer