import AppHeader from './components/AppHeader.tsx'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {Home, About, Contact} from './components/Views.tsx'

function Heading() {
  const location = useLocation();
  switch(location.pathname) {
    case '/':
      return 'Dashboard';
    case '/about':
      return 'My Profile';
    case '/contact':
      return 'Settings';
    default:
      return 'Welcome';
  };
}

function App() {

  return (
    <BrowserRouter>
      <AppHeader heading={Heading()}/>
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
