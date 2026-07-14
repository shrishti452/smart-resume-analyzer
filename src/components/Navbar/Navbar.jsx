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

                <li>
                    <a href="#home">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#features">
                        Features
                    </a>
                </li>

                <li>
                    <a href="#how-it-works">
                        How It Works
                    </a>
                </li>

                <li>
                    <a href="#faq">
                        FAQ
                    </a>
                </li>

            </ul>

            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="start-btn">Get Started</button>
            </div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </nav>
    );
}

export default Navbar;