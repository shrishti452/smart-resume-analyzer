import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadResume.css";
import Navbar from "../../components/Navbar/Navbar";

function UploadResume() {

    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleUpload = async () => {

        setLoading(true);
        setError("");
        setSuccess("");
        if (!selectedFile || !jobDescription) {
            alert("Please upload resume and add job description");
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        const formData = new FormData();

        formData.append("resume", selectedFile);
        formData.append("job_description", jobDescription);

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/upload",
                {
                    method: "POST",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                    body: formData,
                }
            );

            const data = await response.json();

            if (response.status === 401) {

                alert("Session expired. Please login again.");

                localStorage.removeItem("token");
                localStorage.removeItem("user");

                navigate("/login");

                return;
            }

            if (!response.ok) {

                setLoading(false);

                setError(data.message || "Upload Failed");

                return;
            }

            console.log(data);

            setAnalysis(data);

            setSuccess(data.message);
            setLoading(false);

            setLoading(false);

        }

        catch (error) {

            console.error(error);

            setLoading(false);

            setError("Something went wrong. Please try again.");

        }

    };
    return (

        <>
            <Navbar />
            <div className="upload-page">

                <div className="upload-container">

                    <h1>
                        Upload Your Resume
                    </h1>

                    <p>
                        Upload your resume and let AI analyze your skills,
                        ATS compatibility and improvements.
                    </p>

                    <div className="upload-card">

                        <div className="upload-icon">
                            📄
                        </div>

                        <h2>
                            Drag & Drop Resume
                        </h2>

                        <p>
                            Support PDF and DOCX files
                        </p>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => {
                                setSelectedFile(e.target.files[0]);
                            }}
                        />

                        {selectedFile && (
                            <p className="selected-file">
                                Selected File: {selectedFile.name}
                            </p>
                        )}

                        <textarea
                            placeholder="Paste Job Description here..."
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        />

                        {
                            error && (
                                <div className="error-message">
                                    {error}
                                </div>
                            )
                        }

                        {
                            success && (
                                <div className="success-message">
                                    {success}
                                </div>
                            )
                        }

                        <button
                            disabled={!selectedFile || loading}
                            onClick={handleUpload}
                        >
                            {loading ? "Analyzing..." : "Analyze Resume"}
                        </button>

                        {analysis && (

                            <div className="analysis-result">

                                <h2>
                                    Resume Intelligence Report
                                </h2>

                                <div className="ats-card">

                                    <div className="upload-score-circle">
                                        {analysis.ats_score}%
                                    </div>

                                    <div>

                                        <h3>
                                            ATS Compatibility
                                        </h3>

                                        <p>
                                            Resume matching score with job requirements
                                        </p>

                                    </div>

                                </div>

                                <div className="result-section">

                                    <h3>
                                        ✅ Matched Skills
                                    </h3>

                                    <div className="skill-container">

                                        {analysis.matched_skills.map((skill, index) => (

                                            <span
                                                className="skill-badge"
                                                key={index}
                                            >
                                                {skill}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                                <div className="result-section">

                                    <h3>
                                        ⚠️ Missing Skills
                                    </h3>

                                    <div className="skill-container">

                                        {analysis.missing_skills.map((skill, index) => (

                                            <span
                                                className="missing-badge"
                                                key={index}
                                            >
                                                {skill}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                                <div className="result-section">

                                    <h3>
                                        🤖 AI Suggestions
                                    </h3>

                                    <div className="suggestion-container">

                                        {analysis.suggestions.map((item, index) => (

                                            <div
                                                className="suggestion-card"
                                                key={index}
                                            >
                                                💡 {item}
                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            </div>
        </>

    );

}

export default UploadResume;