// src/components/Flashcard.js
import React, { useState } from "react";

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(f => !f)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "32px",
        textAlign: "center",
        fontSize: "1.5rem",
        cursor: "pointer",
        minHeight: "120px",
        background: flipped ? "#f5f5f5" : "#fff",
        boxShadow: "0 4px 14px rgba(0,0,0,0.05)"
      }}
    >
      {flipped ? card.back : card.front}
      <div style={{fontSize: "1rem", marginTop: "1rem", color: "#888"}}>
        {flipped ? "클릭해서 앞면" : "클릭해서 뒷면"}
      </div>
    </div>
  );
}