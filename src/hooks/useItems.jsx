import axios from 'axios'
import { deleteItem, upgradeTier, downgradeTier } from '../redux/Items'
import { useDispatch, useSelector } from "react-redux"

export const useItems = () => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const deletingItem = id => {
    
        axios.delete(`http://localhost:3001/delete/${id}`, {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        })
        .then(() => {
            dispatch(deleteItem(id))
        })
        .catch(err => console.error(err))
    }

    const upgradingTier = item => {
    
        const newTier = item.tier === "bottom" ? "mid" : "top"  
    
        axios.put('http://localhost:3001/upgrade', { 
            newTier: newTier, id: item._id }, { 
            headers: { authorization: `Bearer ${user.token}` }
        })
        .then(() => {
            dispatch(upgradeTier({ ...item, tier: newTier }))
        })
        .catch(err => console.error(err))
    }
    
    const downgradingTier = item => {
        
        const newTier = item.tier === "top" ? "mid" : "bottom"  
        
        axios.put('http://localhost:3001/downgrade', { 
            newTier: newTier, id: item._id }, { 
            headers: { authorization: `Bearer ${user.token}` }
        })
        .then(() => {
            dispatch(downgradeTier({ ...item, tier: newTier }))
        })
        .catch(err => console.error(err))
    }

    return { deletingItem, upgradingTier, downgradingTier }
}