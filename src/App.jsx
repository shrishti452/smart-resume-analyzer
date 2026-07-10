import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const projectName = "Smart Resume Analyzer";

  return (
    <div className="app">
      <Navbar title="Smart Resume Analyzer" />

      <section className="hero">
        <h1>{projectName}</h1>
        <p>Welcome to our project 🚀</p>
      </section>
    </div>
  );
}

export default App;