import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

function Home() {

    const projectName = "Smart Resume Analyzer";

    return (
        <>
            <Navbar title={projectName} />
            <Hero />
            <Features />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}

export default Home;