import { useState } from "react";
import "./UploadResume.css";

function UploadResume() {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleUpload = async () => {

        if (!selectedFile) return;

        const formData = new FormData();

        formData.append("resume", selectedFile);

        try {

            const response = await fetch("http://127.0.0.1:5000/upload", {

                method: "POST",

                body: formData,

            });

            const data = await response.json();

            console.log(data);

            alert(data.message);

        }

        catch (error) {

            console.error(error);

            alert("Upload Failed");

        }

    };
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


                    <button
                        disabled={!selectedFile}
                        onClick={handleUpload}
                    >
                        Analyze Resume
                    </button>


                </div>


            </div>


        </div>

    );

}


export default UploadResume;