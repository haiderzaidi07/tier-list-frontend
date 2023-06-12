import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"

export const useItemsContext = () => {
    const context = useContext(ItemsContext)

    if(!context){
        throw Error('useItemsContext must be used inside an ItemsContextProvider')
    }

    return context
}