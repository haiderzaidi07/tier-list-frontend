import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: state => {
            state.user = null
            localStorage.removeItem('user')
            // Implement logic for emptying items state array when user logs out
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer