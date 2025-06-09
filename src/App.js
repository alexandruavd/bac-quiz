import React, { useState } from 'react';
import allQuestions from './questions';

export default function BacQuizApp() {
  const [numQuestions, setNumQuestions] = useState(5);
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

  // Bara de progres
  const progress = Math.round(((step) / questions.length) * 100);

  if (!startQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-extrabold text-center text-white mb-6 tracking-wide flex items-center justify-center gap-2">
            <span role="img" aria-label="book">📚</span>
            Teste BAC Română
            <span role="img" aria-label="star">🌙</span>
          </h1>
          <label className="block text-gray-300 font-medium mb-2 text-center">Alege numărul de întrebări:</label>
          <input
            type="number"
            className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={numQuestions}
            min={1}
            max={allQuestions.length}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
          />
          <button
            className="w-full py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 transition font-semibold text-white shadow mt-2"
            onClick={() => setStartQuiz(true)}
          >
            Începe testul
          </button>
          <div className="mt-6 text-gray-400 text-sm text-center opacity-60">modul dark activ</div>
        </div>
      </div>
    );
  }

  if (step >= questions.length) {
    let feedback = "Mai mult exercițiu și vei fi pregătit!";
    if (score === questions.length) feedback = "Excelent! Ai răspuns corect la toate!";
    else if (score >= questions.length * 0.8) feedback = "Foarte bine! Ești aproape gata de BAC!";
    else if (score >= questions.length * 0.6) feedback = "Bine! Mai exersează puțin!";

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <span role="img" aria-label="result">🎉</span>
            Rezultat final:
          </h2>
          <div className="text-3xl font-extrabold text-blue-400 mb-2">{score} / {questions.length}</div>
          <div className="text-lg text-gray-300 mb-6">{feedback}</div>
          <button className="py-2 px-4 rounded bg-green-600 hover:bg-green-700 transition font-semibold text-white shadow" onClick={reset}>
            Refă testul
          </button>
        </div>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-xl">
        {/* Header & progres */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-xl font-bold text-white mb-2 sm:mb-0 flex items-center gap-2">
            <span role="img" aria-label="bac">📝</span>
            Întrebarea {step + 1} / {questions.length}
          </h2>
          <div className="w-full sm:w-56 h-3 bg-gray-700 rounded-full overflow-hidden mt-2 sm:mt-0">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Întrebarea */}
        <div className="mb-4">
          <p className="text-lg text-gray-200 font-medium">{q.question}</p>
        </div>

        {/* Variante răspuns */}
        <div className="flex flex-col gap-2">
          {q.options.map((opt, idx) => {
            let btnColor = "bg-gray-900 hover:bg-gray-700 text-gray-200 border border-gray-700";
            // Feedback vizual după selectare
            if (selected !== null) {
              if (idx === q.correct) btnColor = "bg-green-600 border border-green-700 text-white animate-pulse";
              else if (selected === idx) btnColor = "bg-red-600 border border-red-700 text-white";
            }
            return (
              <button
                key={idx}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold shadow transition-all duration-200 ${btnColor} ${selected === idx ? "scale-105" : ""}`}
                onClick={() => handleAnswer(idx)}
                disabled={selected !== null}
              >
                <span className="mr-2 text-blue-400 font-bold">{String.fromCharCode(65 + idx)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explicație și buton următor */}
        {selected !== null && (
          <div className="mt-6 bg-gray-900 border-l-4 border-blue-500 rounded-md p-4 animate-fadeIn">
            <p className="text-gray-300 mb-3"><span className="font-bold text-white">Explicație:</span> {q.explanation}</p>
            <button
              className="py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 transition font-semibold text-white shadow"
              onClick={next}
            >
              Următoarea întrebare &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}