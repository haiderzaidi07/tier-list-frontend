import Forms from '../components/Forms'
import Tier from '../components/Tier'
import { useState } from 'react'

const Home = () => {

    const [title, setTitle] = useState("")

    const addTitle = (title) => {
        setTitle(title)
    }

    return (
        <div>
            <Forms addTitle={addTitle} />
            <h2>{title}</h2>
            <Tier tier="Top" colour="topTier" />
            <Tier tier="Mid" colour="midTier" />
            <Tier tier="Bottom" colour="bottomTier" />
        </div>
    )
}

export default Home
