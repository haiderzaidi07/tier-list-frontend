import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface User {
    token: string | null,
    username: string | null,
    profilePicture?: string | null
}

interface InitialState {
    user: User | null
}

const storedUserJSONString = localStorage.getItem('user');
const initialState: InitialState = {
    user: storedUserJSONString ? JSON.parse(storedUserJSONString) : null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action:PayloadAction<User>) => {
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