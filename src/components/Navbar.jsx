import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/Auth'
import { setItems } from '../redux/Items'

const Navbar = () => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div className='navbar'>
            <Link to='/' className='title'>Tier List</Link>
            {user ? (
                <>
                    <span className='nav-links'>{user.username}</span>
                    <span className='nav-links logout' onClick={() => {dispatch(logout()); dispatch(setItems([]))}}>Logout</span>
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
