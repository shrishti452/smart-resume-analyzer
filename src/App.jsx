import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  const projectName = "Smart Resume Analyzer";

  return (
    <div className="app">
      <Navbar title={projectName} />
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default App;