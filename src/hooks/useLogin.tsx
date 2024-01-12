import axios from "axios"
import { useState } from "react"
import { useAppDispatch } from "../redux/hooks"
import { login } from '../redux/Auth'

export const useLogin = () => {
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const loggingIn = (username: string, password: string) => {
        setIsLoading(true)
        setError("")
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
            // console.log(err.response.data)
            setError(err.response.data.error)
        })
    }

    return { loggingIn, error, isLoading }
}