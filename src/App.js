import { useState } from "react";
import "./styles.css";
const quizs = [
  {
    id: 3457,
    question: "What language isReact based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child Component?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState Hook",
  },
  {
    id: 1211,
    question:
      "What do we call an input element that is completely synchronised with state",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  function HandleClick(id) {
    setSelectedId(id != selectedId ? id : null);
  }

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flashcards">
      {quizs.map((quiz) => (
        <div
          key={quiz.id}
          onClick={() => HandleClick(quiz.id)}
          className={quiz.id === selectedId ? "selected" : ""}
        >
          <p>{quiz.id === selectedId ? quiz.answer : quiz.question}</p>
        </div>
      ))}
    </div>
  );
}
