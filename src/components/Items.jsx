import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setItems } from '../redux/Items'
import axios from "axios"
import { useItems } from "../hooks/useItems"

const Items = ({tier}) => {

    const { user } = useSelector(state => state.auth)
    const { items } = useSelector(state => state.items)
    const dispatch = useDispatch()
    const { deletingItem, upgradingTier, downgradingTier } = useItems()

    useEffect(() => {

        if(user){
            axios.get("http://localhost:3001/", {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            })
            .then(res => {
                dispatch(setItems(res.data))
            })
            .catch(err => console.error(err))
        }

    }, [dispatch, user])

    return (
        <>
            {items.map(item => (item.tier === tier.toLowerCase()) ? (
                <li key={item._id}>
                    <span>{item.name}</span>
                    {item.tier !== "top" ? <i className="material-icons upgradeTop" title="Move to Top Tier" onClick={() => upgradingTier(item)}>arrow_upward</i> : null}
                    {item.tier !== "bottom" ? <i className="material-icons downgradeBottom" title="Move to Bottom Tier" onClick={() => downgradingTier(item)}>arrow_downward</i> : null}
                    <i className="material-icons deleteButton" title="Delete Item" onClick={() => deletingItem(item._id)}>delete</i> 
                </li>
            ) : null)}
        </>
    )
}

export default Items