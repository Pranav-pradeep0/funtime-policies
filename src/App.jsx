import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/RefundPolicy";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/refund">Refund Policy</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
