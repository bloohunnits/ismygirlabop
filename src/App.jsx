import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./components/LandingPage";
import QuizQuestion from "./components/QuizQuestion";
import Results from "./components/Results";
import { selectQuizQuestions, QUIZ_LENGTH } from "./data/questions";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("landing"); // landing | quiz | results
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = useCallback(() => {
    const selected = selectQuizQuestions();
    setQuestions(selected);
    setCurrentQ(0);
    setAnswers([]);
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback(
    (answer) => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentQ + 1 >= questions.length) {
        setScreen("results");
      } else {
        setCurrentQ(currentQ + 1);
      }
    },
    [answers, currentQ, questions.length]
  );

  const handleRestart = useCallback(() => {
    const selected = selectQuizQuestions();
    setQuestions(selected);
    setCurrentQ(0);
    setAnswers([]);
    setScreen("quiz");
  }, []);

  return (
    <div className="app">
      <div className="bg-noise" />
      <div className="bg-gradient" />

      <AnimatePresence mode="wait">
        {screen === "landing" && (
          <LandingPage key="landing" onStart={handleStart} />
        )}
        {screen === "quiz" && questions.length > 0 && (
          <QuizQuestion
            key={`q-${currentQ}`}
            question={questions[currentQ]}
            currentIndex={currentQ}
            total={QUIZ_LENGTH}
            onAnswer={handleAnswer}
          />
        )}
        {screen === "results" && (
          <Results
            key="results"
            answers={answers}
            questions={questions}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
