// OTPInput.js
"use client"
import React, { useRef, useState } from "react";
import "../styles.css";

function OTPInput({ onChangeOTP }) {//no need the props here i just copy paset from some where the all logic is 90% similar
  const length = 4;
  const [otp, setOTP] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const focusInput = (index) => {
    inputsRef.current[index]?.focus();
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < length - 1) {
      focusInput(index + 1);
    }

    const joinedOTP = newOTP.join("");
    if (joinedOTP.length === length && !newOTP.includes("")) {
      onChangeOTP(joinedOTP);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        focusInput(index - 1);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (pasted.length === 0) return;

    const newOTP = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOTP[i] = pasted[i];
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = pasted[i];
      }
    }
    setOTP(newOTP);

    const joinedOTP = newOTP.join("");
    if (joinedOTP.length === length && !newOTP.includes("")) {
      onChangeOTP(joinedOTP);
    }

    const nextFocusIndex = Math.min(pasted.length, length - 1);
    focusInput(nextFocusIndex);
  };

  return (
    <div onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          inputMode="numeric"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            marginRight: "10px"
          }}
        />
      ))}
    </div>
  );
}

export default OTPInput;