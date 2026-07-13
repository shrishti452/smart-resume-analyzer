import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-badge">
                    🚀 AI Powered Resume Intelligence
                </span>

                <h1 className="hero-title">
                    Build a Resume
                    <br />
                    That Gets You
                    <span className="gradient-text"> Hired.</span>
                </h1>

                <p className="hero-description">
                    Analyze your resume with AI, improve ATS score,
                    discover missing skills and get personalized
                    recommendations in seconds.
                </p>


                <div className="hero-buttons">

                    <button className="primary-btn">
                        Analyze Resume
                    </button>

                    <button className="secondary-btn">
                        Explore Features
                    </button>

                </div>

            </div>


            <div className="hero-image">

                <div className="resume-card">

                    <div className="card-header">

                        <h3>Resume Analysis</h3>

                        <span className="status">
                            Live
                        </span>

                    </div>

                    <div className="scan-bar"></div>


                    <div className="score-circle">

                        <h2>92%</h2>
                        <p>ATS Score</p>

                    </div>

                    <div className="stats">

                        <div className="stat">
                            <h4>15+</h4>
                            <p>Skills Found</p>
                        </div>

                        <div className="stat">
                            <h4>8</h4>
                            <p>Missing</p>
                        </div>

                    </div>
                    <div className="skills">

                        <span>React</span>
                        <span>Python</span>
                        <span>Node</span>
                        <span>SQL</span>

                    </div>

                </div>

            </div>


        </section>
    );
}

export default Hero;