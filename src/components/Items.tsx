import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setItems } from '../redux/Items'
import { useItems } from "../hooks/useItems"
import axios from "axios"

interface Props {
  tier: string
}

const Items: FC<Props> = ({ tier }) => {

  const { user } = useAppSelector(state => state.auth)
  const { items } = useAppSelector(state => state.items)
  const { deletingItem, upgradingTier, downgradingTier } = useItems()
  const dispatch = useAppDispatch()

  useEffect(() => {

    if (user) {
      axios.get("http://localhost:3001/", {
        headers: {
          authorization: `Bearer ${user.token}`
        }
      })
      .then(res => {
        // console.table(res.data)
        dispatch(setItems(res.data))
      })
      .catch(err => console.error(err))
    }

  }, [dispatch, user])

  return (
    <>
      {items.map(item => (item.tier === tier.toLowerCase()) ? (
        <li key={item._id}>
          <span>{item.name}</span>
          {item.tier !== "top" ? <i className="material-icons upgradeTop" title="Move to Top Tier" onClick={() => upgradingTier(item)}>arrow_upward</i> : null}
          {item.tier !== "bottom" ? <i className="material-icons downgradeBottom" title="Move to Bottom Tier" onClick={() => downgradingTier(item)}>arrow_downward</i> : null}
          <i className="material-icons deleteButton" title="Delete Item" onClick={() => deletingItem(item._id)}>delete</i>
        </li>
      ) : null)}
    </>
  )
}

export default Items