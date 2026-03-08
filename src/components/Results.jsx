import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

function getVerdict(score) {
  if (score <= 15)
    return {
      label: "She's Clean 💚",
      color: "#00e676",
      desc: "Bro you're good. She's barely triggering any red flags and she's stacking green flags. This is the type of girl who's actually about it. Relationship-minded, stable, the real deal. She's not a bop. Lock in.",
    };
  if (score <= 30)
    return {
      label: "Mostly Clear 💛",
      color: "#ffeb3b",
      desc: "She's looking pretty solid king. A couple minor things popped up but nothing crazy, could just be personality quirks. Keep your eyes open but don't psych yourself out. She's probably not a bop.",
    };
  if (score <= 50)
    return {
      label: "Proceed With Caution 🟠",
      color: "#ff9800",
      desc: "Alright bro listen. She's hitting a few too many flags and not enough green to balance it out. Any one of these alone? Maybe nothing. But when they start stacking up like this, that's a pattern. Have some real conversations and pay attention. She might be a bop.",
    };
  if (score <= 70)
    return {
      label: "High Risk 🔴",
      color: "#f44336",
      desc: "I'm not gonna sugarcoat it bro. Multiple strong red flags are popping and the green flags are nowhere to be found. The pattern here is consistent with a high body count. The science on these indicators is solid. She's likely a bop. Move accordingly.",
    };
  return {
    label: "Certified Bop 💀",
    color: "#ff1744",
    desc: "Bro. She's hitting damn near everything. Red flags everywhere, green flags ghost. This pattern doesn't happen by accident. The research is overwhelming. By every measurable standard, she is a bop. I'm telling you this as your boy. Act on this information.",
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

// =============================================
// SHARE ENGINE — Web Share API + fallbacks
// =============================================
const SITE_URL = "https://ismygirlabop.com";

function getShareText(score, verdict, redFlagCount, greenFlagCount) {
  const bar = getScoreBar(score);
  const lines = [
    `🚨 Bop Score: ${score}/100 — ${verdict.label}`,
    ``,
    `${bar}`,
    ``,
    `🔴 ${redFlagCount} Red Flag${redFlagCount !== 1 ? "s" : ""} · 🟢 ${greenFlagCount} Green Flag${greenFlagCount !== 1 ? "s" : ""}`,
    ``,
    `Think your girl is clean? Prove it.`,
    `👉 ${SITE_URL}`,
  ];
  return lines.join("\n");
}

function getScoreBar(score) {
  const filled = Math.round(score / 10);
  const empty = 10 - filled;
  return "▓".repeat(filled) + "░".repeat(empty) + ` ${score}%`;
}

function shareToTwitter(text) {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer,width=600,height=400");
}

function shareToWhatsApp(text) {
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function shareToiMessage(text) {
  // sms: body works on iOS/macOS
  window.location.href = `sms:&body=${encodeURIComponent(text)}`;
}

export default function Results({ answers, questions, onRestart, onHome }) {
  const [expandedId, setExpandedId] = useState(null);
  const [shareState, setShareState] = useState("idle"); // idle | copied | shared | error

  // =============================================
  // SMART SCORING ENGINE
  // =============================================
  // Red flags:   yes = full weight | not_sure = 30% (benefit of the doubt, you'd probably notice) | no = 0
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

  // Red% pushes up, green% pulls down. Green flags are protective but can't erase red flags entirely
  const rawScore = (redPct * 100) - (greenPct * 50);
  const score = Math.max(0, Math.min(100, Math.round(rawScore)));

  const verdict = getVerdict(score);

  const redFlagCount = questions.filter(
    (q, i) => q.type === "red" && answers[i] === "yes"
  ).length;
  const greenFlagCount = questions.filter(
    (q, i) => q.type === "green" && answers[i] === "yes"
  ).length;

  const shareText = getShareText(score, verdict, redFlagCount, greenFlagCount);

  const handleShare = useCallback(async () => {
    // Try native Web Share API first (best on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Bop Score: ${score}/100 — ${verdict.label}`,
          text: shareText,
          url: SITE_URL,
        });
        setShareState("shared");
        setTimeout(() => setShareState("idle"), 3000);
        return;
      } catch (err) {
        // User cancelled or API failed — fall through to clipboard
        if (err.name === "AbortError") return;
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareText);
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 3000);
    } catch {
      setShareState("error");
      setTimeout(() => setShareState("idle"), 3000);
    }
  }, [score, verdict, shareText]);

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

      {/* Share Section */}
      <motion.div
        className="share-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="share-header">
          <h3 className="share-title">📣 Put Your Boy On</h3>
          <p className="share-subtitle">
            Share your score and challenge the homies to check their girl too
          </p>
        </div>

        {/* Main share / copy button */}
        <motion.button
          className="share-btn-main"
          onClick={handleShare}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <AnimatePresence mode="wait">
            {shareState === "idle" && (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="share-btn-inner"
              >
                <span className="share-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </span>
                Share Your Score
              </motion.span>
            )}
            {shareState === "copied" && (
              <motion.span
                key="copied"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="share-btn-inner"
              >
                ✅ Copied! Send It To The Group Chat
              </motion.span>
            )}
            {shareState === "shared" && (
              <motion.span
                key="shared"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="share-btn-inner"
              >
                🔥 Shared! You're Putting The Boys On
              </motion.span>
            )}
            {shareState === "error" && (
              <motion.span
                key="error"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="share-btn-inner"
              >
                ❌ Couldn't Copy — Try Again
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Direct platform buttons */}
        <div className="share-platforms">
          <motion.button
            className="share-platform-btn share-twitter"
            onClick={() => shareToTwitter(shareText)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            title="Share on X / Twitter"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X</span>
          </motion.button>

          <motion.button
            className="share-platform-btn share-whatsapp"
            onClick={() => shareToWhatsApp(shareText)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            title="Share on WhatsApp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </motion.button>

          <motion.button
            className="share-platform-btn share-imessage"
            onClick={() => shareToiMessage(shareText)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            title="Share via iMessage / SMS"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 5.813 2 10.5c0 2.34 1.12 4.467 2.94 6.02-.16 1.68-.84 3.18-1.94 4.48 2.28-.12 4.32-1.06 5.74-2.24.82.16 1.64.24 2.46.24h.8C17.523 19 22 15.187 22 10.5S17.523 2 12 2z" />
            </svg>
            <span>iMessage</span>
          </motion.button>
        </div>

        {/* Score preview card */}
        <div className="share-preview">
          <div className="share-preview-label">PREVIEW</div>
          <pre className="share-preview-text">{shareText}</pre>
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
          This is for the fellas. Entertainment and education. Every indicator
          is based on real published research, but no quiz replaces your own
          judgment. Use this as a tool, not a verdict. Stay sharp out there king.
        </p>
      </motion.div>
    </motion.div>
  );
}
