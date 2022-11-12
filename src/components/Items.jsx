const Items = (props) => {

    return (
        <>
            {props.items.map(item => (
                <li key={item._id}>
                    <span>{item.name} </span>
                    <span>{item.tier}</span>

                    {item.tier !== "top" ? <i className="material-icons upgradeTop" title="Move to Top Tier" onClick={() => props.upgrade(item)}>arrow_upward</i> : false}
                    {item.tier !== "bottom" ? <i className="material-icons downgradeBottom" title="Move to Bottom Tier" onClick={() => props.downgrade(item)} >arrow_downward</i> : false}
                    <i className="material-icons deleteButton" title="Delete Name" onClick={() => props.onDelete(item._id)} >delete</i>
                </li>
            ))}
        </>
    )
}

export default Items