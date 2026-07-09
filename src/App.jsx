import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  const projectName = "Smart Resume Analyzer";
  return (
    <div className="app">
      <Navbar title="Smart Resume Analyzer"/>
      <h1>{projectName}</h1>
      <p>Welcome to our project 🚀</p>
    </div>
  );
}

export default App;