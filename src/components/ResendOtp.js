import React from "react";
import { useNavigate } from "react-router-dom";

const ResendOtp = () => {
  const navigate = useNavigate();

  const handleResend = () => {
    navigate("/otp");
  };

  return (
    <div>
      <h1>Resend OTP</h1>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
};

export default ResendOtp;
