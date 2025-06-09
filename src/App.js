import React, { useState } from 'react';
import './App.css';

import allQuestions from './questions'; 

export default function BacQuizApp() {
  const [numQuestions, setNumQuestions] = useState(1);
  const [startQuiz, setStartQuiz] = useState(false);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const questions = allQuestions.slice(0, numQuestions);

  const handleAnswer = (index) => {
    setSelected(index);
    if (index === questions[step].correct) {
      setScore(score + 1);
    }
  };

  const next = () => {
    setSelected(null);
    setStep(step + 1);
  };

  const reset = () => {
    setStartQuiz(false);
    setStep(0);
    setScore(0);
    setSelected(null);
  };

  if (!startQuiz) {
    return (
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4">Teste BAC Română – Stil chestionare auto</h1>
        <label>Alege numărul de întrebări:</label>
        <input
          type="number"
          className="border rounded p-2 w-full my-2"
          value={numQuestions}
          min={1}
          max={allQuestions.length}
          onChange={(e) => setNumQuestions(Number(e.target.value))}
        />
        <button className="my-2 p-2 bg-blue-600 text-white rounded" onClick={() => setStartQuiz(true)}>Începe testul</button>
      </div>
    );
  }

  if (step >= questions.length) {
    return (
      <div className="p-6 max-w-lg mx-auto">
        <h2 className="text-lg font-bold mb-2">Rezultatul tău: {score} din {questions.length}</h2>
        <button className="my-2 p-2 bg-green-600 text-white rounded" onClick={reset}>Refă testul</button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="border p-4 rounded shadow mb-4">
        <h2 className="font-semibold mb-2">Întrebarea {step + 1}:</h2>
        <p className="mb-4">{q.question}</p>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            className={`block w-full text-left border rounded px-4 py-2 my-1 ${
              selected === idx
                ? idx === q.correct
                  ? 'bg-green-200'
                  : 'bg-red-200'
                : 'bg-white'
            }`}
            onClick={() => handleAnswer(idx)}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}
        {selected !== null && (
          <div className="mt-4">
            <p><strong>Explicație:</strong> {q.explanation}</p>
            <button className="my-2 p-2 bg-blue-500 text-white rounded" onClick={next}>Următoarea</button>
          </div>
        )}
      </div>
    </div>
  );
}
