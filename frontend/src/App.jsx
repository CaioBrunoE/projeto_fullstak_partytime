import { Outlet } from 'react-router-dom'

//componets
import Navbar from './components/Navbar'

import {ToastContainer} from "react-toastify"

import './App.css'

import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <ToastContainer/>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
