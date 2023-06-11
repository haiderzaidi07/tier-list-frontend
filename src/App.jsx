import Forms from './components/Forms'
import Tier from './components/Tier'
import { useState } from 'react'
import './style.css'
import ItemsContextProvider from './contexts/ItemsContext'

function App() {

  const [title, setTitle] = useState("")

  const addTitle = (title) => {
    setTitle(title)
  }

  return (
    <div className="App">
      <h1>Tier List</h1>
      <ItemsContextProvider>
        <Forms addTitle={addTitle} title={title}/>
        <h2>{title}</h2>
        <Tier tier="Top" colour="topTier" />
        <Tier tier="Mid" colour="midTier" />
        <Tier tier="Bottom" colour="bottomTier" />
      </ItemsContextProvider>
    </div>
  )
}

export default App;
