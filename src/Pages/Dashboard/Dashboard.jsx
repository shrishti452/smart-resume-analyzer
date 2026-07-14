import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

    return (

        <div className="dashboard">

            <div className="dashboard-header">

                <h1>
                    Welcome Back 👋
                </h1>

                <p>
                    Analyze your resume and improve your career chances with AI.
                </p>

            </div>


            <div className="dashboard-stats">

                <div className="stat-card">

                    <h2>--</h2>
                    <p>ATS Score</p>

                </div>


                <div className="stat-card">

                    <h2>--</h2>
                    <p>Skills Found</p>

                </div>


                <div className="stat-card">

                    <h2>--</h2>
                    <p>Reports</p>

                </div>

            </div>



            <div className="upload-box">

                <h2>
                    Upload Your Resume
                </h2>

                <p>
                    Upload PDF or DOCX file for AI analysis
                </p>


                <Link to="/upload-resume">
                    <button>
                        Upload Resume
                    </button>
                </Link>


            </div>



            <div className="recent-box">

                <h2>
                    Recent Analysis
                </h2>

                <p>
                    No analysis available yet.
                </p>

            </div>


        </div>

    );

}


export default Dashboard;