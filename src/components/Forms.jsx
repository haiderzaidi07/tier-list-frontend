import { useContext, useState } from "react"
import { ItemsContext } from "../contexts/ItemsContext"

const Forms = (props) => {

    const { addItem } = useContext(ItemsContext)
    
    const [title, addTitle] = useState('')
    const [name, addName] = useState('')
    const [tier, addTier] = useState('')

    const onSubmitTitle = (e) => {
        e.preventDefault()

        if(!title){
            alert("Cannot submit empty form")
            return
        }

        props.addTitle(title)
        addTitle('')
    }

    const onSubmitItem = (e) => {
        e.preventDefault()

        if(!name || !tier){
            alert("Cannot submit empty form")
            return
        }

        addItem({ name, tier })
        addName('')
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
				<input type="text" placeholder="e.g Cricket, Football etc" name="name" value={name} onChange={e => addName(e.target.value)} />
				<label htmlFor="tier">Tier:</label>
                <select onChange={e => addTier(e.target.value)}>
                    <option value="">--Select</option>
                    <option value="top">Top</option>
                    <option value="mid">Mid</option>
                    <option value="bottom">Bottom</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Forms