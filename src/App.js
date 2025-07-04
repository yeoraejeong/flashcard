// src/App.js
import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import AddCardForm from "./components/AddCardForm";

function App() {
  const [cards, setCards] = useState([
    { front: "사과", back: "Apple" },
    { front: "바나나", back: "Banana" }
  ]);

  function addCard(card) {
    setCards(c => [...c, card]);
  }

  return (
    <div className="App">
      <h2>플래시 카드</h2>
      <AddCardForm onAdd={addCard} />
      <FlashcardList cards={cards} />
    </div>
  );
}

export default App;