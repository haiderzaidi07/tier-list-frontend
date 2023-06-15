import { useState } from 'react'
import { useRegister } from '../hooks/useRegister'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { register, error, isLoading } = useRegister()

    const handleSubmit = e => {
        e.preventDefault()

        register(username, password, confirmPassword)

        setUsername('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div>
            <h2>Register</h2>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <label>Confirm Password</label>
                    <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                    <input type='submit' value='Register' disabled={isLoading}></input>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default Register
