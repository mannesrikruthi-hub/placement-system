
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Navbar from "./components/Navbar";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home students={students} setStudents={setStudents} />} />
        <Route path="/dashboard" element={<Dashboard students={students} />} />
        <Route path="/students" element={<Students students={students} />} />
      </Routes>
    </Router>
  );
}

export default App;
