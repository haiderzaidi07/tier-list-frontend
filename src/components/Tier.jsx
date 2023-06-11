import Items from "./Items"

const Tier = ({tier, colour}) => {

    return (
        <div className={`${colour} clearfix`}>
            <section className="label">
				<span>{tier}</span>
			</section>
			<section>
				<ul>
                    <Items tier={tier}/>
				</ul>
			</section>
        </div>
    )
}

export default Tier