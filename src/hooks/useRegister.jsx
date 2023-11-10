import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from '../redux/Auth'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const dispatch = useDispatch()

    const register = (username, password, confirmPassword) => {
        setIsLoading(true)
        setError(null)

        axios.post('http://localhost:3001/users/register', {
            username,
            password,
            confirmPassword
        })
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch(login(res.data))
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.response.data.error)
        })
    }

    return { register, error, isLoading }
}