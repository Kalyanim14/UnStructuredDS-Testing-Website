import React, { useState } from "react";
// Direct import from node_modules to bypass missing export map in package.json
import * as Icons from "../node_modules/unstructured-ds/dist/icons/index.js";

const App = () => {
  const iconNames = Object.keys(Icons);
  const [index, setIndex] = useState(0);
  const IconComponent = Icons[iconNames[index]];

  const handleNext = () => setIndex((index + 1) % iconNames.length);
  const handlePrev = () =>
    setIndex((index - 1 + iconNames.length) % iconNames.length);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: 40,
        background: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1>🧩 Unstructured DS Icon Tester</h1>
      <p style={{ color: "#555" }}>Browse and test all icons from Unstructured DS</p>

      <div style={{ marginTop: 60, marginBottom: 60 }}>
        <IconComponent width="96" height="96" style={{ color: "#007bff" }} />
        <h3 style={{ marginTop: 20, color: "#333" }}>{iconNames[index]}</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <button onClick={handlePrev} style={btnStyle}>⬅ Prev</button>
        <button onClick={handleNext} style={btnStyle}>Next ➡</button>
      </div>
    </div>
  );
};

const btnStyle = {
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
};

export default App;