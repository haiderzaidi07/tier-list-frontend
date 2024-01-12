import { FC } from "react"
import Items from "./Items"

interface Props{
  tier: string,
  colour: string
}

const Tier: FC<Props> = ({ tier, colour }) => {

  return (
    <div className={`${colour} clearfix`}>
      <section className="label">
        <span>{tier}</span>
      </section>
      <section>
        <ul>
          <Items tier={tier} />
        </ul>
      </section>
    </div>
  )
}

export default Tier