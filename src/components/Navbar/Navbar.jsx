import "./Navbar.css";
import { useState } from "react";

function Navbar({ title }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className="navbar">

    <div className="logo">
    <span className="logo-icon">⌘</span>
    <h2>ResuMate</h2>
    </div>

    <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="start-btn">Get Started</button>
    </div>

    <div className="menu-icon"  onClick={() => setMenuOpen(!menuOpen)}>
        ☰
    </div>
    </nav>
);
}

export default Navbar;