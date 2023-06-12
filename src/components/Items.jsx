import { useEffect } from "react"
import Axios from "axios"
import { useItemsContext } from "../hooks/useItemsContext"

const Items = ({tier}) => {

    const {items, dispatch} = useItemsContext()

    useEffect(() => {

        Axios.get("http://localhost:3001/")
        .then(res => {
            dispatch({type: 'SET_ITEMS', payload: res.data})
        })
        .catch(err => console.error(err))

    }, [dispatch])

    const deleteItem = (id) => {
    
        Axios.delete(`http://localhost:3001/delete/${id}`)
        .then((res) => {
            dispatch({type: 'DELETE_ITEM', payload: id})
        })
        .catch(err => console.error(err))
    }

    const upgradeTier = (item) => {
    
        const newTier = item.tier === "bottom" ? "mid" : "top"  
    
        Axios.put('http://localhost:3001/upgrade', { newTier: newTier, id: item._id })
        .then(() => {
            dispatch({type: 'UPGRADE_TIER', payload: { _id: item._id, name: item.name, tier: newTier }})
        })
    }

    const downgradeTier = (item) => {
    
        const newTier = item.tier === "top" ? "mid" : "bottom"  
    
        Axios.put('http://localhost:3001/downgrade', { newTier: newTier, id: item._id })
        .then(() => {
            dispatch({type: 'DOWNGRADE_TIER', payload: { _id: item._id, name: item.name, tier: newTier }})
        })
    }

    return (
        <>
            {items.map(item => (item.tier === tier.toLowerCase()) ? (
                <li key={item._id}>
                    <span>{item.name}</span>
                    {item.tier !== "top" ? <i className="material-icons upgradeTop" title="Move to Top Tier" onClick={() => upgradeTier(item)}>arrow_upward</i> : null}
                    {item.tier !== "bottom" ? <i className="material-icons downgradeBottom" title="Move to Bottom Tier" onClick={() => downgradeTier(item)}>arrow_downward</i> : null}
                    <i className="material-icons deleteButton" title="Delete Item" onClick={() => deleteItem(item._id)}>delete</i> 
                </li>
            ) : null)}
        </>
    )
}

export default Items