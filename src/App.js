import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Addfruit from "./Addfruit";
import "./App.css"; // Import App.css for Tailwind styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/addfruit" element={<Addfruit />} />
      </Routes>
    </Router>
  );
}

export default App;
