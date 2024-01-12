import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { logout } from '../redux/Auth'
import { setItems } from '../redux/Items'

const Navbar = () => {

  const { user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const profilePicture = user ? user.profilePicture ? user.profilePicture : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" : undefined

  return (
    <div className='navbar'>
      <Link to='/' className='title'>Tier List</Link>
      {user ? (
        <>
          <img className='profilePicture' referrerPolicy="no-referrer" src={profilePicture} alt="#" />
          <span className='nav-links'>{user.username}</span>
          <span className='nav-links logout' onClick={() => { dispatch(logout()); dispatch(setItems([])) }}>Logout</span>
        </>
      ) : (
        <>
          <Link to='/users/login' className='nav-links'>Login</Link>
          <Link to='/users/register' className='nav-links'>Register</Link>
        </>
      )}
    </div>
  )
}

export default Navbar
