import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs/whychooseus";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";

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
    </div>
  );
}

export default App;