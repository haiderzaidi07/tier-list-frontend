import { FormEvent, useState } from 'react'
import { useRegister } from '../hooks/useRegister'

const Register = () => {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const { register, error, isLoading } = useRegister()

  const handleSubmit = (e: FormEvent) => {
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
          <input title='username' placeholder='Username' type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
          <label>Password</label>
          <input title='password' placeholder='Enter Password' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
          <label>Confirm Password</label>
          <input title='confirmPassword' placeholder='Confirm Password' type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
          <input type='submit' value='Register' disabled={isLoading}></input>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  )
}

export default Register
