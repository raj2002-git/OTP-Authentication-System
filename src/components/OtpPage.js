import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateOtp } from "../utils/otpHelper";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const generatedOtp = generateOtp();
    localStorage.setItem("otp", generatedOtp);
    alert(`Your OTP is: ${generatedOtp}`);

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    const storedOtp = localStorage.getItem("otp");
    if (otp === storedOtp && timer > 0) {
      navigate("/dashboard");
    } else {
      alert("Invalid or Expired OTP");
      navigate("/resend-otp");
    }
  };

  return (
    <div>
      <h1>OTP Verification</h1>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleSubmit}>Verify</button>
      <p>Time remaining: {timer} seconds</p>
    </div>
  );
};

export default OtpPage;
