import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
import { AuthProvider } from './context/AuthProvider'


// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Navbar/>

    <div className='min-h-screen'>
    <Outlet/>
    </div>
    <MyFooter/>
    </>
  )
}

export default App
