import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DegreePredictor from "./pages/DegreePredictor";

import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>GradeFlow</h2>

        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/predictor">Degree Predictor</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/predictor" element={<DegreePredictor />} />
      </Routes>
    </div>
  );
}

export default App;