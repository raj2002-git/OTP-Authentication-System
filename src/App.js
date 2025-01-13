import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import OtpPage from "./components/OtpPage";
import Dashboard from "./components/Dashboard";
import ResendOtp from "./components/ResendOtp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resend-otp" element={<ResendOtp />} />
      </Routes>
    </Router>
  );
};

export default App;
