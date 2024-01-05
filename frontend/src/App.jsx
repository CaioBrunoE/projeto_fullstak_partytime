import { Outlet } from 'react-router-dom'

//componets
import Navbar from './components/Navbar'

import './App.css'

function App() {


  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div >
  )
}

export default App
