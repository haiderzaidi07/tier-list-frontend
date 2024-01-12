import React, { FC, FormEvent, useState } from "react"
import axios from "axios"
import { addItem } from '../redux/Items'
import { useAppDispatch, useAppSelector } from "../redux/hooks"

interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  title?: string
}

const Forms: FC<Props> = ({ setTitle, title }) => {

  const [name, setName] = useState<string>('')
  const [tier, setTier] = useState<string>('')
  const [error, setError] = useState<string>('')

  const { user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const onSubmitItem = (e: FormEvent) => {
      e.preventDefault()

      if(!user){
          setError('You must be logged in')
          return
      }

      if(!name || !tier){
        setError("Cannot submit empty form")
        return
      }

      axios.post('http://localhost:3001/addItem', { name, tier }, { headers: { authorization: `Bearer ${user.token}` }})
      .then(res => {
          // console.log(res.data)
          dispatch(addItem(res.data))
      })
      .catch(err => console.error(err))

      setName('')
      setTier('')
  }

  return (
    <div className="clearfix">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Sports, Netflix Shows etc"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </form>
      <form onSubmit={onSubmitItem}>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="e.g Cricket, Football etc" name="name" value={name} onChange={e => setName(e.target.value)} />
          <label htmlFor="tier">Tier:</label>
          <select title="Tier Dropdown" onChange={e => setTier(e.target.value)}>
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