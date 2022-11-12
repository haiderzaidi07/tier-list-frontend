import { useState } from "react"

const Forms = (props) => {
    
    const [ title, addTitle ] = useState('')
    const [ item, addItem ] = useState('')
    const [ tier, addTier ] = useState('')

    const onSubmitTitle = (e) => {
        e.preventDefault()

        if(!title){
            alert("Cannot submit empty form")
            return
        }

        props.addTitle( title )

        addTitle('')
    }

    const onSubmitItem = (e) => {
        e.preventDefault()

        if(!item){
            alert("Cannot submit empty form")
            return
        }

        props.onAdd({ item, tier })

        addItem('')
        addTier('')
    }

    return (
        <div className="clearfix" >
            <form onSubmit={onSubmitTitle} >
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder="Sports, Netflix Shows etc" name="title" value={title} onChange={e => addTitle(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <form onSubmit={onSubmitItem} >
                <label htmlFor="name">Name:</label>
				<input type="text" placeholder="e.g Cricket, Football etc" name="name" value={item} onChange={e => addItem(e.target.value)} />
				<label htmlFor="tier">Tier:</label>
				<input type="text" placeholder="top, mid or bottom" name="tier" title="Type your Tier: top, mid or bottom (in lowercase case only)" value={tier} onChange={e => addTier(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Forms