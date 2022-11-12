import Header from './components/Header'
import Forms from './components/Forms'
import Tier from './components/Tier'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import './style.css'

function App() {

  const [ title, setTitle ] = useState("")

  const [items, setItems]  = useState([])

  useEffect(() => {

    Axios.get("https://tame-pear-coypu-slip.cyclic.app/")
    .then(res => {
      setItems(res.data)
    })
    .catch(err => console.error(err))

  }, [])

  const addTitle = (title) => {
    setTitle(title)
  }

  const addItem = (item) => {

    Axios.post('https://tame-pear-coypu-slip.cyclic.app/addItem', {
      name: item.item,
      tier: item.tier
    })
    .then((res) => {
      setItems([ ...items, { _id: res.data._id, name: item.item, tier: item.tier } ])
    })
    .catch(err => console.error(err))
  }

  const deleteItem = (id) => {
    
    Axios.delete(`https://tame-pear-coypu-slip.cyclic.app/delete/${id}`)
    .then(() => {
      setItems(items.filter(val => val._id !== id))
    })
  }

  const upgradeTier = (item) => {
    
    const newTier = item.tier === "bottom" ? "mid" : "top"  

    Axios.put('https://tame-pear-coypu-slip.cyclic.app/upgrade', { newTier: newTier, id: item._id })
    .then(() => {
      setItems( items.map((val) => {
        return val._id === item._id ? { _id: item._id, name: item.name, tier: newTier } : val
      }))
    })
  }

  const downgradeTier = (item) => {
    
    const newTier = item.tier === "top" ? "mid" : "bottom"  

    Axios.put('https://tame-pear-coypu-slip.cyclic.app/downgrade', { newTier: newTier, id: item._id })
    .then(() => {
      setItems( items.map((val) => {
        return val._id === item._id ? { _id: item._id, name: item.name, tier: newTier } : val
      }))
    })
  }

  return (
    <div className="App">
      <Header />
      <Forms onAdd={addItem} addTitle={addTitle} />
      <h2>{title}</h2>
      <Tier items={items} onDelete={deleteItem} tier="Top" colour="topTier" downgrade={downgradeTier} />
      <Tier items={items} onDelete={deleteItem} tier="Mid" colour="midTier" upgrade={upgradeTier} downgrade={downgradeTier} />
      <Tier items={items} onDelete={deleteItem} tier="Bottom" colour="bottomTier" upgrade={upgradeTier} />
    </div>
  )
}

export default App;
