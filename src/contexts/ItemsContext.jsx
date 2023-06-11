import Axios from 'axios'
import { createContext, useState, useEffect } from "react";

export const ItemsContext = createContext()

const ItemsContextProvider = (props) => {
    
    const [items, setItems] = useState([])

    useEffect(() => {

        Axios.get("http://localhost:3001/")
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.error(err))

    }, [])

    const addItem = (item) => {

        Axios.post('http://localhost:3001/addItem', {
          name: item.name,
          tier: item.tier
        })
        .then((res) => {
            setItems([ ...items, { _id: res.data._id, name: res.data.name, tier: res.data.tier } ])
        })
        .catch(err => console.error(err))
    }

    const deleteItem = (id) => {
    
        Axios.delete(`http://localhost:3001/delete/${id}`)
        .then(() => {
            setItems(items.filter(val => val._id !== id))
        })
        .catch(err => console.error(err))
    }

    const upgradeTier = (item) => {
    
        const newTier = item.tier === "bottom" ? "mid" : "top"  
    
        Axios.put('http://localhost:3001/upgrade', { newTier: newTier, id: item._id })
        .then(() => {
            setItems(items.map(val => {
                return val._id === item._id ? { _id: item._id, name: item.name, tier: newTier } : val
            }))
        })
    }

    const downgradeTier = (item) => {
    
        const newTier = item.tier === "top" ? "mid" : "bottom"  
    
        Axios.put('http://localhost:3001/downgrade', { newTier: newTier, id: item._id })
        .then(() => {
            setItems( items.map((val) => {
                return val._id === item._id ? { _id: item._id, name: item.name, tier: newTier } : val
            }))
        })
    }

    return (
        <ItemsContext.Provider value={{items, addItem, deleteItem, upgradeTier, downgradeTier}}>
            {props.children}
        </ItemsContext.Provider>
    )

}

export default ItemsContextProvider