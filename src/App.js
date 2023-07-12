import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import NavBar from './Component/NavBar'
import Destination from './Component/Destination'
import {BrowserRouter , Routes, Route}from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
     
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Destination' element={<Destination />} />
     
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App