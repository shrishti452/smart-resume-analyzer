import "./ResumeHistory.css";

function ResumeHistory({ resumes }) {

    return (
        <div className="history-container">

            <h2>
                Resume History
            </h2>


            {
                resumes.length > 0 ? (

                    resumes.map((resume) => (

                        <div className="history-card" key={resume.id}>

                            <h3>
                                📄 {resume.filename}
                            </h3>

                            <p>
                                ATS Score: <span>{resume.ats_score}%</span>
                            </p>


                            <p>
                                Skills Found: <span>{resume.skills.length}</span>
                            </p>


                            <p>
                                Date: <span>{new Date(resume.created_at).toLocaleDateString()}</span>
                            </p>

                        </div>

                    ))

                ) : (

                    <div className="history-empty">

                        <div className="empty-icon">
                            📄
                        </div>

                        <h3>
                            No Resume History
                        </h3>

                        <p>
                            Upload your first resume to start tracking your analysis.
                        </p>

                    </div>

                )
            }


        </div>
    );
}


export default ResumeHistory;