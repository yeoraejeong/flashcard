// src/components/Flashcard.js
import React, { useState } from "react";

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(f => !f)}
      className={`flashcard${flipped ? " flipped" : ""}`}
    >
      {flipped ? card.back : card.front}
      <div className="flashcard-tip">
        {flipped ? "클릭해서 앞면" : "클릭해서 뒷면"}
      </div>
    </div>
  );
}