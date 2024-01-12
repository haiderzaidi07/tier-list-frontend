import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from '../redux/Auth'

export const useRegister = () => {
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useDispatch()

    const register = (username: string, password: string, confirmPassword: string) => {
        setIsLoading(true)
        setError("")

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