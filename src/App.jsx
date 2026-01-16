/* import { useState, useEffect } from 'react' */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Home, About, Contact} from './components/views.tsx'
import {HeaderBar} from './components/headerbar.tsx'

function App() {

  return (
    <BrowserRouter>
    <>
      <HeaderBar/> 

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
