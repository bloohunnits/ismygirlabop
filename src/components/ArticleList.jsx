import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import articles from "../data/articles";

export default function ArticleList() {
  useEffect(() => {
    document.title =
      "Relationship Science Articles | Is My Girl A Bop?";
    window.scrollTo(0, 0);

    return () => {
      document.title = "Is My Girl A Bop? — Science-Backed Assessment";
    };
  }, []);
  return (
    <motion.div
      className="articles-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Navigation */}
      <nav className="article-nav">
        <Link to="/" className="nav-logo-link">
          <img src="/icon.svg" alt="Is My Girl A Bop?" className="nav-logo" />
        </Link>
        <Link to="/" className="back-link">
          ← Back to Quiz
        </Link>
      </nav>

      {/* Header */}
      <header className="articles-header">
        <motion.span
          className="articles-label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          THE BLOG
        </motion.span>
        <motion.h1
          className="articles-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Relationship <span className="gradient-text">Science</span>,
          Simplified
        </motion.h1>
        <motion.p
          className="articles-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Research-backed insights on dating, red flags, and building healthier
          relationships. No fluff — just the science.
        </motion.p>
      </header>

      {/* Article Grid */}
      <div className="articles-grid">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Link
              to={`/articles/${article.slug}`}
              className="article-card-link"
            >
              <article className="article-card">
                {article.image && (
                  <div className="article-card-image-wrapper">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="article-card-image"
                    />
                  </div>
                )}
                <div className="article-card-body">
                  <div className="article-card-tags">
                    {article.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="article-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="article-card-title">{article.title}</h2>
                  <p className="article-card-summary">{article.summary}</p>
                  <div className="article-card-footer">
                    <span className="article-card-meta">
                      <Clock size={13} />
                      {article.readTime}
                    </span>
                    <span className="article-card-read-more">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="articles-cta-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Done Reading?</h2>
        <p>Put your knowledge to the test. Take the science-backed quiz.</p>
        <Link to="/" className="articles-cta-btn">
          Take the Quiz →
        </Link>
      </motion.div>
    </motion.div>
  );
}
