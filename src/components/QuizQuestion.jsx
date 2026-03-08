import { motion, AnimatePresence } from "framer-motion";

export default function QuizQuestion({
  question,
  currentIndex,
  total,
  onAnswer,
}) {
  const progress = (currentIndex / total) * 100;

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Progress Bar */}
      <div className="progress-wrapper">
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <span className="progress-text">
          {currentIndex + 1} / {total}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="question-card"
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="question-icon">{question.icon}</div>

          <h2 className="question-text">{question.question}</h2>

          <div className="answer-buttons">
            <motion.button
              className="answer-btn answer-yes"
              onClick={() => onAnswer("yes")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Yes
            </motion.button>
            <motion.button
              className="answer-btn answer-unsure"
              onClick={() => onAnswer("not_sure")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Not Sure
            </motion.button>
            <motion.button
              className="answer-btn answer-no"
              onClick={() => onAnswer("no")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              No
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
