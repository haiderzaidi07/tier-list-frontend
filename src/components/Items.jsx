import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"

const Items = ({tier}) => {

    const {items, deleteItem, upgradeTier, downgradeTier} = useContext(ItemsContext)

    return (
        <>
            {items.map(item => (item.tier === tier.toLowerCase()) ? (
                <li key={item._id}>
                    <span>{item.name}</span>
                    {item.tier !== "top" ? <i className="material-icons upgradeTop" title="Move to Top Tier" onClick={() => upgradeTier(item)}>arrow_upward</i> : null}
                    {item.tier !== "bottom" ? <i className="material-icons downgradeBottom" title="Move to Bottom Tier" onClick={() => downgradeTier(item)}>arrow_downward</i> : null}
                    <i className="material-icons deleteButton" title="Delete Name" onClick={() => deleteItem(item._id)}>delete</i> 
                </li>
            ) : null)}
        </>
    )
}

export default Items