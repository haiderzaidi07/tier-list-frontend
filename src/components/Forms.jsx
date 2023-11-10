import { useState } from "react"
import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from '../redux/Items'

const Forms = ({addTitle}) => {
    
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [tier, setTier] = useState('')
    const [error, setError] = useState('')

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onSubmitTitle = (e) => {
        e.preventDefault()

        if(!title){
            setError("Cannot submit empty form")
            return
        }

        addTitle(title)
        setTitle('')
    }

    const onSubmitItem = (e) => {
        e.preventDefault()

        if(!user){
            setError('You must be logged in')
            return
        }

        if(!name || !tier){
            setError("Cannot submit empty form")
            return
        }

        Axios.post('http://localhost:3001/addItem', { name, tier }, { headers: { authorization: `Bearer ${user.token}` }})
        .then(res => {
            dispatch(addItem(res.data))
        })
        .catch(err => console.error(err))

        setName('')
        setTier('')
    }

    return (
        <div className="clearfix" >
            <form onSubmit={onSubmitTitle} >
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder="Sports, Netflix Shows etc" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <form onSubmit={onSubmitItem} >
                <label htmlFor="name">Name:</label>
				<input type="text" placeholder="e.g Cricket, Football etc" name="name" value={name} onChange={e => setName(e.target.value)} />
				<label htmlFor="tier">Tier:</label>
                <select onChange={e => setTier(e.target.value)}>
                    <option value="">--Select</option>
                    <option value="top">Top</option>
                    <option value="mid">Mid</option>
                    <option value="bottom">Bottom</option>
                </select>
                <input type="submit" value="Submit" />
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default Forms