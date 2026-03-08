import { motion } from "framer-motion";
import { useState } from "react";

function getVerdict(score) {
  if (score <= 15)
    return {
      label: "She's Clean 💚",
      color: "#00e676",
      desc: "Based on the indicators assessed, she shows almost none of the behavioral red flags and multiple green flags associated with relationship-oriented women. She appears to be low-risk and genuinely commitment-minded. She's not a bop.",
    };
  if (score <= 30)
    return {
      label: "Mostly Clear 💛",
      color: "#ffeb3b",
      desc: "She shows a few minor red flags but also several positive indicators. Some of these could be personality quirks rather than real warnings. Stay aware, but don't overthink it. Probably not a bop.",
    };
  if (score <= 50)
    return {
      label: "Proceed With Caution 🟠",
      color: "#ff9800",
      desc: "She's triggering a moderate number of red flags without enough green flags to offset them. Any one alone might not mean much, but the combination creates a pattern worth paying attention to. Have honest conversations and keep your eyes open. She might be a bop.",
    };
  if (score <= 70)
    return {
      label: "High Risk 🔴",
      color: "#f44336",
      desc: "Multiple strong red flags are present and green flags are scarce. The behavioral pattern here is consistent with someone who has had a significant number of sexual partners. The science behind these indicators is well-established. She's likely a bop.",
    };
  return {
    label: "Certified Bop 💀",
    color: "#ff1744",
    desc: "She's triggering nearly every major red flag with almost no protective green flags. The combined weight of these behavioral signals leaves very little room for doubt. The research is overwhelming — this pattern doesn't emerge by accident. She is, by every measurable standard, a bop.",
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

export default function Results({ answers, questions, onRestart, onHome }) {
  const [expandedId, setExpandedId] = useState(null);

  // =============================================
  // SMART SCORING ENGINE
  // =============================================
  // Red flags:   yes = full weight | not_sure = 30% (benefit of the doubt — you'd probably notice) | no = 0
  // Green flags: yes = full weight | not_sure = 20% (if she had it, you'd know) | no = 0
  //
  // "Not Sure" asymmetry: red flags get more benefit of doubt because
  // people tend to miss red flags more than green flags. If a green flag
  // were truly present (reads books, close with dad, etc.) it's visible.

  let redScore = 0;
  let greenScore = 0;

  questions.forEach((q, i) => {
    const ans = answers[i];

    if (q.type === "red") {
      const mult = ans === "yes" ? 1 : ans === "not_sure" ? 0.3 : 0;
      redScore += q.weight * mult;
    } else {
      const mult = ans === "yes" ? 1 : ans === "not_sure" ? 0.2 : 0;
      greenScore += q.weight * mult;
    }
  });

  // Final score: red flags push toward 100, green flags push toward 0
  const maxRed = questions.filter((q) => q.type === "red").reduce((s, q) => s + q.weight, 0);
  const maxGreen = questions.filter((q) => q.type === "green").reduce((s, q) => s + q.weight, 0);

  const redPct = maxRed > 0 ? redScore / maxRed : 0;
  const greenPct = maxGreen > 0 ? greenScore / maxGreen : 0;

  // Red% pushes up, green% pulls down — green flags are protective but can't erase red flags entirely
  const rawScore = (redPct * 100) - (greenPct * 50);
  const score = Math.max(0, Math.min(100, Math.round(rawScore)));

  const verdict = getVerdict(score);

  const redFlagCount = questions.filter(
    (q, i) => q.type === "red" && answers[i] === "yes"
  ).length;
  const greenFlagCount = questions.filter(
    (q, i) => q.type === "green" && answers[i] === "yes"
  ).length;

  return (
    <motion.div
      className="results-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Floating top bar */}
      <motion.div
        className="results-top-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="home-btn"
          onClick={onHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Home
        </motion.button>
        <motion.button
          className="floating-restart"
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          ↻ Start Over
        </motion.button>
      </motion.div>

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
            {redFlagCount}
          </span>
          <span className="stat-label">Red Flags</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num" style={{ color: "#00e676" }}>
            {greenFlagCount}
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
        <p className="section-subtitle">Tap any item for the science behind it</p>

        {questions.map((q, i) => {
          const ans = answers[i];
          const isRed = q.type === "red";
          const isFlagged = isRed ? ans === "yes" : ans !== "yes";
          const isExpanded = expandedId === q.id;

          const answerLabel =
            ans === "yes" ? "YES" : ans === "not_sure" ? "NOT SURE" : "NO";

          const explanation =
            ans === "yes"
              ? q.yesExplanation
              : ans === "not_sure"
                ? q.notSureExplanation
                : q.noExplanation;

          return (
            <motion.div
              key={q.id}
              className={`breakdown-item ${isFlagged ? "flag-red" : "flag-green"}`}
              onClick={() => setExpandedId(isExpanded ? null : q.id)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.05 }}
            >
              <div className="breakdown-header">
                <div className="breakdown-left">
                  <span className="breakdown-icon">{q.icon}</span>
                  <span className="breakdown-question">{q.question}</span>
                </div>
                <div className="breakdown-right">
                  <span
                    className={`breakdown-answer ${
                      ans === "yes"
                        ? isRed
                          ? "ans-yes"
                          : "ans-green-yes"
                        : ans === "not_sure"
                          ? "ans-unsure"
                          : isRed
                            ? "ans-no"
                            : "ans-green-no"
                    }`}
                  >
                    {answerLabel}
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
                    <strong>
                      {isRed ? "🔴 Red Flag Analysis" : "🟢 Green Flag Analysis"}
                    </strong>
                    <p>{explanation}</p>
                  </div>
                  <div className="detail-context">
                    <strong>📖 The Science</strong>
                    <p>{q.context}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Restart */}
      <motion.div
        className="restart-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <motion.button
          className="restart-btn"
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          🔄 Take It Again
        </motion.button>
        <p className="restart-disclaimer">
          This assessment is for entertainment and educational purposes. The
          indicators used are based on published psychological research, but
          individual results may vary. Use good judgment.
        </p>
      </motion.div>
    </motion.div>
  );
}
