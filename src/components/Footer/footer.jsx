import "./Footer.css";

function Footer() {

    return (

        <footer className="footer" id="contact">

            <div className="footer-container">


                <div className="footer-brand">

                    <h2>
                        Smart<span>Resume AI</span>
                    </h2>


                    <p>
                        AI-powered resume analysis platform
                        helping you create job-ready resumes
                        with intelligent insights.
                    </p>

                </div>



                <div className="footer-links">

                    <h3>
                        Quick Links
                    </h3>


                    <a href="#home">
                        Home
                    </a>

                    <a href="#features">
                        Features
                    </a>

                    <a href="#how-it-works">
                        How It Works
                    </a>

                    <a href="#faq">
                        FAQ
                    </a>

                </div>



                <div className="footer-social">

                    <h3>
                        Follow Us
                    </h3>


                    <div className="social-icons">

                        <a href="#">
                            GitHub
                        </a>

                        <a href="#">
                            LinkedIn
                        </a>

                        <a href="#">
                            Twitter
                        </a>

                    </div>

                </div>


            </div>



            <div className="footer-bottom">

                <p>
                    © 2026 Smart Resume Analyzer. All rights reserved.
                </p>

            </div>


        </footer>

    );

}


export default Footer;