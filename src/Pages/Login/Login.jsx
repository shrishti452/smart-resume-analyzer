import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="login-page">

            <div className="login-card">

                <h1>Welcome Back</h1>

                <p>
                    Login to continue to Smart Resume Analyzer
                </p>

                <form>

                    <div className="input-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                    </div>

                    <div className="input-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                        />

                    </div>

                    <button className="login-btn">
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