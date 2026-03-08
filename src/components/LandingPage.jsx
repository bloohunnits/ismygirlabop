import { motion } from "framer-motion";

export default function LandingPage({ onStart }) {
  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="landing-content">
        <motion.div
          className="landing-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
        >
          <span>🔬</span>
        </motion.div>

        <motion.h1
          className="landing-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Is My Girl <span className="gradient-text">A Bop</span>?
        </motion.h1>

        <motion.p
          className="landing-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          20 research-backed behavioral indicators.
          <br />
          One definitive score.
        </motion.p>

        <motion.p
          className="landing-disclaimer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Based on peer-reviewed psychology research on disgust sensitivity,
          Big Five personality traits, sociosexual orientation, and behavioral
          risk indicators. No shame — just science.
        </motion.p>

        <motion.button
          className="start-btn"
          onClick={onStart}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,59,148,0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          Start the Assessment
          <span className="btn-arrow">→</span>
        </motion.button>

        <motion.div
          className="landing-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span>🔒 Anonymous</span>
          <span>📊 20 Questions</span>
          <span>⏱️ ~3 Minutes</span>
        </motion.div>
      </div>

      <div className="landing-bg-glow" />
    </motion.div>
  );
}
