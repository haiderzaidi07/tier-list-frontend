import { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppSelector } from "./redux/hooks"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"

const App: FC = () => {

  const { user } = useAppSelector(state => state.auth)
  
  return (
    <div>
      <Navbar />   
      <Routes>
        <Route path='/' element={ user ? <Home /> : <Navigate to='/users/login' />} />
        <Route path='/users/register' element={ !user ? <Register /> : <Navigate to='/' />} />
        <Route path='/users/login' element={ !user ? <Login /> : <Navigate to='/' />} />
      </Routes>
    </div> 
  )
}

export default App
