import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, { user: JSON.parse(localStorage.getItem('user')) || null })

    // console.log('AuthContext State: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}