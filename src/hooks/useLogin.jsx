import axios from "axios"
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = (username, password) => {
        setIsLoading(true)
        setError(null)

        axios.post('https://colorful-lamb-pinafore.cyclic.app/users/login', {
            username,
            password
        })
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch({type: 'LOGIN', payload: res.data})
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.response.data.error)
        })
    }

    return { login, error, isLoading }
}