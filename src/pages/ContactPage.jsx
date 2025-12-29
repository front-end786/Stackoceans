import NavBar from "../sections/NavBar/NavBar";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Contact Us</div>
          <h1 className="headline">Let’s plan your next release.</h1>
          <p className="subhead">We respond within 48 hours with a founder-led plan and timeline.</p>
        </header>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;



