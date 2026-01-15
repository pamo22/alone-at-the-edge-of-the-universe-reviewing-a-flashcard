import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppHeader from './components/AppHeader.tsx'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import {Home, About, Contact} from './components/Views.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
      <AppHeader heading="hello"/>
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
