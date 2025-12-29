import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
import NavBar from "../sections/NavBar/NavBar";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <section className={styles.hero}>
          <Reveal>
            <div className={styles.content}>
              <div className={styles.iconWrapper}>
                <AlertCircle className={styles.alertIcon} />
                <div className={styles.errorCode}>404</div>
              </div>

              <div className={styles.textContent}>
                <div className="pill">Page Not Found</div>
                <h1 className="headline">
                  Oops! The page you're looking for{" "}
                  <span className="gradient-text">doesn't exist</span>
                </h1>
                <p className="subhead">
                  The page you're trying to reach might have been moved,
                  deleted, or doesn't exist. Let's get you back on track.
                </p>
              </div>

              <div className={styles.actions}>
                <Link to="/" className={styles.primary}>
                  <Home size={18} />
                  Go to Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className={styles.secondary}
                >
                  <ArrowLeft size={18} />
                  Go Back
                </button>
                <Link to="/services" className={styles.secondary}>
                  <Search size={18} />
                  Explore our Services
                </Link>
              </div>

              <div className={styles.quickLinks}>
                <h3 className={styles.quickLinksTitle}>Quick Links</h3>
                <div className={styles.linksGrid}>
                  <Link to="/" className={styles.linkCard}>
                    <Home size={20} />
                    <span>Home</span>
                  </Link>
                  <Link to="/services" className={styles.linkCard}>
                    <Search size={20} />
                    <span>Services</span>
                  </Link>
                  <Link to="/about" className={styles.linkCard}>
                    <span>About Us</span>
                  </Link>
                  <Link to="/contact" className={styles.linkCard}>
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
