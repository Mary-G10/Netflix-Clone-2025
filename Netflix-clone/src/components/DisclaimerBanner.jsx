import React, { useState } from "react";

const DisclaimerBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#e50914",
        color: "white",
        padding: "12px 20px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "500",
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: "18px" }}>⚠️</span>
      <span>
        <strong>PORTFOLIO PROJECT</strong> | This is an educational Netflix
        clone for learning purposes only. Not affiliated with Netflix, Inc. | No
        real data collection or login required.
      </span>
      <button
        onClick={() => setIsVisible(false)}
        style={{
          background: "rgba(255,255,255,0.2)",
          border: "1px solid white",
          color: "white",
          padding: "5px 15px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        ✕ Close
      </button>
    </div>
  );
};

export default DisclaimerBanner;
