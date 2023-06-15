import axios from "axios"
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const register = (username, password, confirmPassword) => {
        setIsLoading(true)
        setError(null)

        axios.post('https://careful-ruby-gopher.cyclic.app/users/register', {
            username,
            password,
            confirmPassword
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

    return { register, error, isLoading }
}