import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import Features from "./components/Features/features";
import HowItWorks from "./components/HowItWorks/howItWorks";
import WhyChooseUs from "./components/WhyChooseUs/whychooseus";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/footer";

function App() {
  const projectName = "Smart Resume Analyzer";

  return (
    <div className="app">
      <Navbar title={projectName} />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;