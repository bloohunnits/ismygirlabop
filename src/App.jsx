import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./components/LandingPage";
import QuizQuestion from "./components/QuizQuestion";
import Results from "./components/Results";
import questions from "./data/questions";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("landing"); // landing | quiz | results
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentQ(0);
    setAnswers([]);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQ + 1 >= questions.length) {
      setScreen("results");
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  return (
    <div className="app">
      <div className="bg-noise" />
      <div className="bg-gradient" />

      <AnimatePresence mode="wait">
        {screen === "landing" && (
          <LandingPage key="landing" onStart={handleStart} />
        )}
        {screen === "quiz" && (
          <QuizQuestion
            key={`q-${currentQ}`}
            question={questions[currentQ]}
            currentIndex={currentQ}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {screen === "results" && (
          <Results key="results" answers={answers} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
