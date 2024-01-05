import { Outlet } from 'react-router-dom'

//componets
import Navbar from './components/Navbar'

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
