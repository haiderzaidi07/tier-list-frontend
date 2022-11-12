import Items from "./Items"

const Tier = (props) => {

    let tierArr = []

    for(let i = 0; i < props.items.length; i++){
        if(props.items[i].tier === props.tier.toLowerCase()){
            tierArr.push(props.items[i])
        }
    }

    return (
        <div className={`${props.colour} clearfix`}>
            <section className="label">
				<span>{props.tier}</span>
			</section>
			<section>
				<ul>
                    <Items items={tierArr} onDelete={props.onDelete} upgrade={props.upgrade} downgrade={props.downgrade} />
				</ul>
			</section>
        </div>
    )
    
}

export default Tier