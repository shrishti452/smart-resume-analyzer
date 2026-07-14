import "./WhyChooseUs.css";

function WhyChooseUs() {
    const benefits = [
        {
            icon: "🤖",
            title: "AI-Powered Analysis",
            description:
                "Advanced AI evaluates every section of your resume and provides intelligent recommendations.",
        },
        {
            icon: "📈",
            title: "ATS Optimization",
            description:
                "Improve ATS compatibility with keyword analysis and formatting suggestions.",
        },
        {
            icon: "🎯",
            title: "Personalized Feedback",
            description:
                "Receive suggestions tailored specifically to your skills, experience and career goals.",
        },
        {
            icon: "🔒",
            title: "Secure Resume Processing",
            description:
                "Your resume is processed securely with complete privacy and protection.",
        },
        {
            icon: "⚡",
            title: "Instant Results",
            description:
                "Get detailed resume analysis, ATS score and recommendations within seconds.",
        },
        {
            icon: "📄",
            title: "Download Report",
            description:
                "Export your complete AI-generated analysis report anytime in a clean format.",
        },
    ];

    return (
        <section className="why" id="why-us">

            <div className="why-header">

                <span className="why-badge">
                    ⭐ WHY CHOOSE US
                </span>

                <h2>
                    Why Choose <span>Smart Resume Analyzer?</span>
                </h2>

                <p>
                    We combine Artificial Intelligence, ATS optimization and
                    career-focused insights to help you build a resume that
                    stands out.
                </p>

            </div>

            <div className="why-content">

                <div className="why-visual">

                    <div className="visual-card">
                        <div className="visual-circle"></div>

                        <h3>AI Resume Intelligence</h3>

                        <p>
                            Analyze • Optimize • Improve
                        </p>

                    </div>

                </div>

                <div className="why-list">

                    {benefits.map((item, index) => (

                        <div className="benefit-card" key={index}>

                            <div className="benefit-icon">
                                {item.icon}
                            </div>

                            <div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;