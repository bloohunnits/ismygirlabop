import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import articles from "../data/articles";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  // SEO: dynamically set page title and meta tags
  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Is My Girl A Bop?`;

      const setMeta = (name, content, attr = "name") => {
        let el = document.querySelector(`meta[${attr}="${name}"]`);
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute(attr, name);
          document.head.appendChild(el);
        }
        el.setAttribute("content", content);
      };

      setMeta("description", article.metaDescription || article.summary);
      setMeta("keywords", article.metaKeywords || "");
      setMeta("og:title", article.title, "property");
      setMeta("og:description", article.metaDescription || article.summary, "property");
      setMeta("og:type", "article", "property");
      setMeta(
        "og:url",
        `https://ismygirlabop.com/articles/${article.slug}`,
        "property"
      );
      if (article.image) {
        setMeta("og:image", article.image, "property");
      }
      setMeta("twitter:title", article.title, "name");
      setMeta("twitter:description", article.metaDescription || article.summary, "name");

      // Scroll to top on article load
      window.scrollTo(0, 0);
    }

    return () => {
      document.title = "Is My Girl A Bop? — Is My Girl A Bop?";
    };
  }, [article]);

  if (!article) {
    return (
      <motion.div
        className="article-not-found"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/articles" className="back-link">
          <ArrowLeft size={16} />
          Back to Articles
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.article
      className="article-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <nav className="article-nav">
        <Link to="/" className="nav-logo-link">
          <img src="/icon.svg" alt="Is My Girl A Bop?" className="nav-logo" />
        </Link>
        <Link to="/articles" className="back-link">
          <ArrowLeft size={16} />
          All Articles
        </Link>
      </nav>

      {/* Hero */}
      <header className="article-hero">
        <motion.div
          className="article-tag-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {article.tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="article-tag">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1
          className="article-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {article.title}
        </motion.h1>

        <motion.p
          className="article-summary"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {article.summary}
        </motion.p>

        <motion.div
          className="article-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="meta-item">
            <User size={14} />
            {article.author}
          </span>
          <span className="meta-divider">·</span>
          <span className="meta-item">
            <Calendar size={14} />
            {article.publishedDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="meta-divider">·</span>
          <span className="meta-item">
            <Clock size={14} />
            {article.readTime}
          </span>
        </motion.div>
      </header>

      {/* Image (only if article has one) */}
      {article.image && (
        <motion.div
          className="article-image-wrapper"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="article-image"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className="article-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {article.content}
      </motion.div>

      {/* Footer */}
      <footer className="article-footer">
        <div className="article-footer-tags">
          <Tag size={14} />
          {article.tags?.map((tag) => (
            <span key={tag} className="footer-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="article-footer-nav">
          <Link to="/articles" className="footer-link">
            ← All Articles
          </Link>
          <Link to="/" className="footer-link">
            Take the Quiz →
          </Link>
        </div>
      </footer>
    </motion.article>
  );
}
