import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className='navbar'>
            <Link to='/' className='title'>Tier List</Link>
            {user ? (
                <>
                    <span className='nav-links'>{user.username}</span>
                    <span className='nav-links logout' onClick={() => logout()}>Logout</span>
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
