import AppHeader from './components/AppHeader.tsx'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {InitConn} from './components/CRUD.js';
import {Home, About, Contact} from './components/Views.tsx'

function Heading() {
  const location = useLocation();
  switch(location.pathname) {
    case '/':
      return <span>Dashboard</span>; // Return JSX, not string
    case '/about':
      return <span>My Profile</span>;
    case '/contact':
      return <span>Settings</span>;
    default:
      return <span>Welcome</span>;
  };
}

function App() {
  InitConn()

  return (
    <BrowserRouter>
      <AppHeader heading={<Heading/>}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h1>DAHDUAHD</h1>
    </BrowserRouter>
  )
}


export default App
