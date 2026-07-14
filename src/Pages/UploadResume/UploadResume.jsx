import { useState } from "react";
import "./UploadResume.css";

function UploadResume() {
    const [selectedFile, setSelectedFile] = useState(null);
    return (

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


                    <button disabled={!selectedFile}>
                        Analyze Resume
                    </button>


                </div>


            </div>


        </div>

    );

}


export default UploadResume;