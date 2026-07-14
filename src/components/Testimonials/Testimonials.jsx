import "./Testimonials.css";

function Testimonials() {

    const reviews = [
        {
            name: "Aarav Sharma",
            role: "Software Developer",
            review:
                "Smart Resume Analyzer helped me improve my resume structure and understand my ATS score better.",
            rating: "★★★★★"
        },
        {
            name: "Priya Verma",
            role: "Frontend Developer",
            review:
                "The AI suggestions were really useful. I found missing skills and improved my resume instantly.",
            rating: "★★★★★"
        },
        {
            name: "Rahul Mehta",
            role: "Data Analyst",
            review:
                "A simple and powerful tool that gives clear feedback and helps create job-ready resumes.",
            rating: "★★★★☆"
        }
    ];


    return (

        <section className="testimonials">

            <div className="testimonial-header">

                <span className="testimonial-badge">
                    ⭐ TESTIMONIALS
                </span>


                <h2>
                    What Users Say About
                    <span> Smart Resume Analyzer</span>
                </h2>


                <p>
                    Real feedback from users who improved their resumes
                    with AI-powered insights.
                </p>

            </div>



            <div className="testimonial-container">

                {
                    reviews.map((item, index) => (

                        <div className="testimonial-card" key={index}>


                            <div className="user-info">

                                <div className="user-avatar">
                                    {item.name.charAt(0)}
                                </div>


                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.role}</p>
                                </div>

                            </div>



                            <div className="rating">
                                {item.rating}
                            </div>


                            <p className="review-text">
                                {item.review}
                            </p>


                        </div>

                    ))
                }


            </div>


        </section>

    );
}


export default Testimonials;