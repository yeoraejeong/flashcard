// src/components/AddCardForm.js
import React, { useState } from "react";

export default function AddCardForm({ onAdd }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;
    onAdd({ front, back });
    setFront("");
    setBack("");
  }

  return (
    <form onSubmit={handleSubmit} style={{margin: "16px 0", display: "flex", gap: "8px"}}>
      <input
        value={front}
        onChange={e => setFront(e.target.value)}
        placeholder="앞면"
        required
        style={{ flex: 1, padding: "8px" }}
      />
      <input
        value={back}
        onChange={e => setBack(e.target.value)}
        placeholder="뒷면"
        required
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 20px" }}>추가</button>
    </form>
  );
}