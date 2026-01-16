import logo from '../assets/logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './headerbar.css'


export function HeaderBar() {
    return (
        <header>
            <img src={logo}/>
            <h4>hello world</h4>
                {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}