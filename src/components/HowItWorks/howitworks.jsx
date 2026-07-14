import "./HowItWorks.css";

function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: "📄",
            title: "Upload Resume",
            description:
                "Upload your resume in PDF format securely with a single click.",
        },
        {
            number: "02",
            icon: "🤖",
            title: "AI Analysis",
            description:
                "Our AI analyzes your resume, extracts skills, education, experience and projects.",
        },
        {
            number: "03",
            icon: "📊",
            title: "ATS & Insights",
            description:
                "Receive ATS score, missing keywords, skill gap analysis and improvement suggestions.",
        },
        {
            number: "04",
            icon: "📥",
            title: "Download Report",
            description:
                "Download a detailed AI-generated report and improve your resume before applying.",
        },
    ];

    return (
        <section className="how-it-works">

            <div className="how-header">

                <span className="how-badge">
                    ✨ SIMPLE PROCESS
                </span>

                <h2>
                    How <span>Smart Resume Analyzer</span> Works
                </h2>

                <p>
                    Upload your resume, let AI analyze it, receive actionable insights,
                    and download an optimized report.
                </p>

            </div>

            <div className="steps-container">

                {steps.map((step, index) => (
                    <div className="step-card" key={index}>

                        <div className="step-number">
                            {step.number}
                        </div>

                        <div className="step-icon">
                            {step.icon}
                        </div>

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default HowItWorks;