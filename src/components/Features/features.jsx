import "./Features.css";

function Features() {

    const features = [
        {
            icon: "🤖",
            title: "AI Resume Analysis",
            description:
                "Get intelligent AI-powered feedback on your resume and improve your profile instantly."
        },
        {
            icon: "📊",
            title: "ATS Score Prediction",
            description:
                "Check your resume compatibility with ATS systems and increase your hiring chances."
        },
        {
            icon: "🎯",
            title: "Skill Gap Detection",
            description:
                "Identify missing skills and discover what you need to learn for your dream role."
        },
        {
            icon: "📝",
            title: "Smart Resume Suggestions",
            description:
                "Receive personalized suggestions to make your resume more impactful."
        },
        {
            icon: "🔍",
            title: "Job Description Matching",
            description:
                "Compare your resume with job descriptions and find matching opportunities."
        },
        {
            icon: "🚀",
            title: "Career Insights",
            description:
                "Get AI-based insights to improve your career growth and preparation."
        }
    ];


    return (
        <section className="features" id="features">

            <div className="features-header">

                <span className="features-badge">
                    ✦ POWERFUL AI FEATURES
                </span>

                <h2>
                    Everything You Need To
                    <span> Build A Resume That Stands Out</span>
                </h2>

                <p>
                    Analyze, optimize and improve your resume with
                    advanced AI-powered tools.
                </p>

            </div>


            <div className="features-grid">

                {
                    features.map((feature, index) => (
                        <div
                            className="feature-card"
                            key={index}
                        >

                            <div className="feature-icon">
                                {feature.icon}
                            </div>

                            <h3>
                                {feature.title}
                            </h3>

                            <p>
                                {feature.description}
                            </p>

                            <button>
                                Learn More →
                            </button>

                        </div>
                    ))
                }

            </div>

        </section>
    );
}

export default Features;