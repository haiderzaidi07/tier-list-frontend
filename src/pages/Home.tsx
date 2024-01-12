import Forms from '../components/Forms'
import Tier from '../components/Tier'
import { useState } from 'react'

const Home = () => {

    const [title, setTitle] = useState<string>("")

    return (
        <div>
            <Forms setTitle={setTitle} title={title} />
            <h2>{title}</h2>
            <Tier tier="Top" colour="topTier" />
            <Tier tier="Mid" colour="midTier" />
            <Tier tier="Bottom" colour="bottomTier" />
        </div>
    )
}

export default Home
