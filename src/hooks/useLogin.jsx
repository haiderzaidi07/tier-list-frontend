import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from '../redux/Auth'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const dispatch = useDispatch()

    const loggingIn = (username, password) => {
        setIsLoading(true)
        setError(null)
        // https://careful-ruby-gopher.cyclic.app
        axios.post('http://localhost:3001/users/login', {
            username,
            password
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

    return { loggingIn, error, isLoading }
}