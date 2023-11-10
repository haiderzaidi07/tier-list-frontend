import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './style.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

function App() {

  const { user } = useSelector(state => state.auth)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />     
        <Routes>
          <Route path='/' element={ user ? <Home /> : <Navigate to='/users/login' />} />
          <Route path='/users/register' element={ !user ? <Register /> : <Navigate to='/' />} />
          <Route path='/users/login' element={ !user ? <Login /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
