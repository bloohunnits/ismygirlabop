import { motion } from "framer-motion";
import { useState } from "react";
import questions from "../data/questions";

function getVerdict(score) {
  if (score <= 15)
    return {
      label: "She's Clean 💚",
      color: "#00e676",
      desc: "Based on the indicators assessed, she shows almost none of the behavioral patterns associated with a high partner count. She appears to be low-risk and relationship-oriented. She's not a bop.",
    };
  if (score <= 30)
    return {
      label: "Mostly Clear 💛",
      color: "#ffeb3b",
      desc: "She shows a few minor indicators, but nothing alarming. Some of these could be personality quirks rather than red flags. Stay aware, but don't overthink it. Probably not a bop.",
    };
  if (score <= 50)
    return {
      label: "Proceed With Caution 🟠",
      color: "#ff9800",
      desc: "She's triggering a moderate number of behavioral indicators. Any one of these alone might not mean much, but the combination creates a pattern worth paying attention to. Have honest conversations and keep your eyes open. She might be a bop.",
    };
  if (score <= 70)
    return {
      label: "High Risk 🔴",
      color: "#f44336",
      desc: "Multiple strong indicators are present. The behavioral pattern here is consistent with someone who has had a significant number of sexual partners. The science behind these indicators is well-established. She's likely a bop.",
    };
  return {
    label: "Certified Bop 💀",
    color: "#ff1744",
    desc: "She's triggering nearly every major indicator on this assessment. The combined weight of these behavioral signals leaves very little room for doubt. The research is overwhelming — this pattern doesn't emerge by accident. She is, by every measurable standard, a bop.",
  };
}

function AnimatedScore({ target }) {
  const [displayed, setDisplayed] = useState(0);

  useState(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayed(current);
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{displayed}</span>;
}

export default function Results({ answers }) {
  const [expandedId, setExpandedId] = useState(null);

  // Calculate score
  const maxWeight = questions.reduce((sum, q) => sum + q.weight, 0);
  const rawScore = questions.reduce((sum, q, i) => {
    return sum + (answers[i] ? q.weight : 0);
  }, 0);
  const score = Math.round((rawScore / maxWeight) * 100);
  const verdict = getVerdict(score);

  const yesQuestions = questions.filter((_, i) => answers[i]);
  const noQuestions = questions.filter((_, i) => !answers[i]);

  return (
    <motion.div
      className="results-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Score Hero */}
      <motion.div
        className="score-hero"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="score-ring" style={{ "--score-color": verdict.color }}>
          <svg viewBox="0 0 200 200" className="score-svg">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="8"
            />
            <motion.circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke={verdict.color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={565}
              strokeDashoffset={565}
              animate={{ strokeDashoffset: 565 - (565 * score) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              style={{
                filter: `drop-shadow(0 0 10px ${verdict.color})`,
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />
          </svg>
          <div className="score-number">
            <AnimatedScore target={score} />
          </div>
        </div>

        <motion.h2
          className="verdict-label"
          style={{ color: verdict.color }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {verdict.label}
        </motion.h2>

        <motion.p
          className="verdict-desc"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {verdict.desc}
        </motion.p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        className="stats-bar"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="stat">
          <span className="stat-num" style={{ color: "#f44336" }}>
            {yesQuestions.length}
          </span>
          <span className="stat-label">Red Flags</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num" style={{ color: "#00e676" }}>
            {noQuestions.length}
          </span>
          <span className="stat-label">Green Flags</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num" style={{ color: verdict.color }}>
            {score}
          </span>
          <span className="stat-label">Bop Score</span>
        </div>
      </motion.div>

      {/* Detailed Breakdown */}
      <motion.div
        className="breakdown"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h3 className="section-title">📋 Detailed Breakdown</h3>

        {questions.map((q, i) => {
          const isYes = answers[i];
          const isExpanded = expandedId === q.id;

          return (
            <motion.div
              key={q.id}
              className={`breakdown-item ${isYes ? "flag-red" : "flag-green"}`}
              onClick={() => setExpandedId(isExpanded ? null : q.id)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="breakdown-header">
                <div className="breakdown-left">
                  <span className="breakdown-icon">{q.icon}</span>
                  <span className="breakdown-question">{q.question}</span>
                </div>
                <div className="breakdown-right">
                  <span
                    className={`breakdown-answer ${isYes ? "ans-yes" : "ans-no"}`}
                  >
                    {isYes ? "YES" : "NO"}
                  </span>
                  <span className="breakdown-chevron">
                    {isExpanded ? "▲" : "▼"}
                  </span>
                </div>
              </div>

              {isExpanded && (
                <motion.div
                  className="breakdown-detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="detail-analysis">
                    <strong>Your Answer Analysis:</strong>
                    <p>{isYes ? q.yesExplanation : q.noExplanation}</p>
                  </div>
                  <div className="detail-context">
                    <strong>The Science:</strong>
                    <p>{q.context}</p>
                  </div>
                  <div className="detail-weight">
                    <strong>Indicator Strength:</strong>{" "}
                    {q.weight}/10{" "}
                    <span className="weight-bar-inline">
                      <span
                        className="weight-fill-inline"
                        style={{
                          width: `${q.weight * 10}%`,
                          background: isYes
                            ? "linear-gradient(90deg, #f44336, #ff1744)"
                            : "linear-gradient(90deg, #00e676, #69f0ae)",
                        }}
                      />
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Restart */}
      <motion.div
        className="restart-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <motion.button
          className="restart-btn"
          onClick={() => window.location.reload()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          🔄 Start Over
        </motion.button>
        <p className="restart-disclaimer">
          This assessment is for entertainment and educational purposes. The indicators used are based on published psychological research, but individual results may vary. Use good judgment.
        </p>
      </motion.div>
    </motion.div>
  );
}
