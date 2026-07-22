import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const { token, logout } = useAuth();


    const handleLogout = () => {

        logout();

        navigate("/login", { replace: true });

    };


    return (

        <nav className="navbar">

            <div className="logo">

                <span className="logo-icon">⌘</span>

                <h2>ResuMate</h2>

            </div>


            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                <li>
                    <a href="/dashboard">
                        Dashboard
                    </a>
                </li>

                <li>
                    <a href="/upload-resume">
                        Upload Resume
                    </a>
                </li>

            </ul>



            <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>


                {token ? (

                    <button
                        className="login-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                ) : (

                    <button
                        className="login-btn"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>

                )}


            </div>



            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </div>


        </nav>

    );

}


export default Navbar;