import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    
    const handleSubmit = e => {
        e.preventDefault()

        login(username, password)

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
        </div>
    )
}

export default Login
