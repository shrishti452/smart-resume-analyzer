import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        if (!email || !password) {

            setError("Please fill all fields");

            return;

        }

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({

                        email,

                        password,

                    }),

                }
            );

            const data = await response.json();

            if (!response.ok) {

                setError(data.message);

                return;

            }

            // Save JWT Token

            login(data.token, data.user);

            alert("Login Successful ✅");

            navigate("/dashboard");

        }

        catch (err) {

            console.error(err);

            setError("Server Error");

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <h1>
                    Welcome Back
                </h1>

                <p>
                    Login to continue to Smart Resume Analyzer
                </p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">

                        <label>Email</label>

                        <input

                            type="email"

                            placeholder="Enter your email"

                            value={email}

                            onChange={(e) =>
                                setEmail(e.target.value)
                            }

                        />

                    </div>

                    <div className="input-group">

                        <label>Password</label>

                        <input

                            type="password"

                            placeholder="Enter your password"

                            value={password}

                            onChange={(e) =>
                                setPassword(e.target.value)
                            }

                        />

                    </div>

                    {error && (

                        <p className="error-message">

                            {error}

                        </p>

                    )}

                    <button
                        className="login-btn"
                        type="submit"
                    >
                        Login
                    </button>

                </form>

                <p className="register-text">

                    Don't have an account?

                    <Link to="/register">

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;