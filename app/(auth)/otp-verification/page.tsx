"use client";
import React, { useState, useRef, useEffect } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60); // Timer starts at 60 seconds
  const [isTimerActive, setIsTimerActive] = useState(true); // Whether timer is active
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isTimerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval); // Clear the interval when the component is unmounted or the timer stops
    }

    if (timer === 0) {
      setIsTimerActive(false); // Stop the timer once it reaches zero
    }
  }, [isTimerActive, timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, otp.length);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp.concat(new Array(otp.length - newOtp.length).fill("")));
      inputRefs.current[pastedData.length - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join("")}`);
  };

  const handleResendOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(60); // Reset timer
    setIsTimerActive(true); // Start the timer again
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Left Section (Info) */}
      <div className="lg:flex w-1/2 hidden h-full bg-black flex-col justify-center items-center p-6 md:p-10 text-left">
        <h1
          id="auth_heading"
          className="text-white text-4xl md:text-6xl lg:text-8xl font-bold"
        >
          <span className="font-medium">
            Get <br />
            into
          </span>
          <br />
          DevOps.
        </h1>
      </div>

      {/* Right Section (OTP Form) */}
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-4 md:mb-6">
            OTP Verification
          </h2>

          <p className="text-sm text-gray-600 text-center mb-6">
            Enter the 6-digit OTP sent to your email.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* OTP Inputs */}
            <div
              className="flex justify-around"
              onPaste={handlePaste}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => { inputRefs.current[index] = el }} 
                  className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black border border-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Verify OTP
              </button>
            </div>
          </form>

          {/* Timer */}
          <p className="text-sm text-gray-600 text-center mt-4">
            {isTimerActive
              ? `Resend OTP in ${timer}s`
              : `Time's up! `}
            {!isTimerActive && (
              <button
                onClick={handleResendOtp}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Resend OTP
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
