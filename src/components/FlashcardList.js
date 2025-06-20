// src/components/FlashcardList.js
import React, { useState } from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
  const [idx, setIdx] = useState(0);
  if (cards.length === 0) return <div>카드를 추가하세요!</div>;

  function prevCard() {
    setIdx(i => (i === 0 ? cards.length - 1 : i - 1));
  }
  function nextCard() {
    setIdx(i => (i === cards.length - 1 ? 0 : i + 1));
  }

  return (
    <div>
      <Flashcard card={cards[idx]} />
      <div style={{ marginTop: 16 }}>
        <button onClick={prevCard} style={{ marginRight: 8 }}>이전</button>
        <span>{idx + 1} / {cards.length}</span>
        <button onClick={nextCard} style={{ marginLeft: 8 }}>다음</button>
      </div>
    </div>
  );
}