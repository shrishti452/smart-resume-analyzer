import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    function handleSubmit(e) {

        e.preventDefault();

        setError("");
        setSuccess("");


        if (!name || !email || !password || !confirmPassword) {

            setError("Please fill all fields");

            return;

        }


        if (password !== confirmPassword) {

            setError("Passwords do not match");

            return;

        }


        setSuccess("Account created successfully!");

    }
    return (

        <div className="register-page">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>
                    Create your Smart Resume Analyzer account
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                    <div className="input-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="input-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    <div className="input-group">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                    </div>

                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}


                    {success && (
                        <p className="success-message">
                            {success}
                        </p>
                    )}

                    <button
                        className="register-btn"
                        type="submit"
                    >
                        Create Account
                    </button>

                </form>

                <p className="login-text">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Register;