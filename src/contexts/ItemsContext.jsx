import { createContext, useReducer } from "react";
import { ItemReducer } from '../reducers/ItemReducer';

export const ItemsContext = createContext()

export const ItemsContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(ItemReducer, { items: [] })

    return (
        <ItemsContext.Provider value={{...state, dispatch}}>
            { children }
        </ItemsContext.Provider>
    )
}