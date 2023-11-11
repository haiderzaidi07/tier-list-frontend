import { useEffect, useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Auth'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loggingIn, error, isLoading } = useLogin()
    const location = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const flag = params.get('flag') || false;

        if(flag){    
            const username = params.get('username');
            const token = params.get('token');
            const profilePicture = params.get('profilePicture');

            localStorage.setItem('user', JSON.stringify({ username, token, profilePicture }))
            dispatch(login({ username, token, profilePicture }))
        }

    }, [location.search, dispatch]);
    
    const handleSubmit = e => {
        e.preventDefault()

        loggingIn(username, password)

        setUsername('')
        setPassword('')
    }

    return (
        <div>
            <h2>Login</h2>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <input type='submit' value='Login' disabled={isLoading}></input>
                    {error && <div>{error}</div>}
                </form>
            </div>
            <button onClick={() => window.location.href = 'http://localhost:3001/users/google'}>
                Login With Google
            </button>
            <button onClick={() => window.location.href = 'http://localhost:3001/users/github'}>
                Login With GitHub
            </button>
            <button onClick={() => window.location.href = 'http://localhost:3001/users/discord'}>
                Login With Discord
            </button>
        </div>
    )
}

export default Login
