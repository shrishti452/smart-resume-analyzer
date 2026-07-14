import { useState } from "react";
import "./FAQ.css";

function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);


    const questions = [
        {
            question: "What is Smart Resume Analyzer?",
            answer:
                "Smart Resume Analyzer is an AI-powered tool that analyzes your resume, checks ATS compatibility and provides improvement suggestions."
        },
        {
            question: "How does AI analyze my resume?",
            answer:
                "Our AI evaluates your skills, keywords, experience, formatting and compares your resume with industry requirements."
        },
        {
            question: "What is ATS score?",
            answer:
                "ATS score shows how well your resume can perform in Applicant Tracking Systems used by companies during hiring."
        },
        {
            question: "Is my resume data secure?",
            answer:
                "Yes, your resume is processed securely and your personal information is protected."
        },
        {
            question: "Can I download my analysis report?",
            answer:
                "Yes, you can export your complete resume analysis report with scores and recommendations."
        }
    ];


    const toggleFAQ = (index) => {

        setActiveIndex(
            activeIndex === index ? null : index
        );

    };


    return (

        <section className="faq">


            <div className="faq-header">

                <span className="faq-badge">
                    ❓ FAQ
                </span>


                <h2>
                    Frequently Asked
                    <span> Questions</span>
                </h2>


                <p>
                    Everything you need to know about Smart Resume Analyzer.
                </p>

            </div>



            <div className="faq-container">

                {
                    questions.map((item, index) => (

                        <div
                            className={`faq-item ${activeIndex === index ? "active" : ""
                                }`}
                            key={index}
                        >


                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >

                                <h3>
                                    {item.question}
                                </h3>


                                <span>
                                    {activeIndex === index ? "-" : "+"}
                                </span>

                            </div>



                            <div className="faq-answer">

                                <p>
                                    {item.answer}
                                </p>

                            </div>


                        </div>

                    ))
                }

            </div>


        </section>

    );
}


export default FAQ;