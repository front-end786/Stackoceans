import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react"; // WhatsApp-like icon
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="app-shell">
        {/* Top Row */}
        <div className={styles.row}>
          {/* Branding */}
          <div className={styles.brand}>
            <img src="/logo.svg" alt="StackOceans.AI logo" />
            <div>
              <p className={styles.name}>StackOceans.AI</p>
              <p className={styles.tag}>
                AI Product Studio · Engineering Intelligence · Est. 2025
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.links}>
            <Link to="/services">Services</Link>
            <Link to="/capabilities">Capabilities</Link>
            <Link to="/team">Team</Link>
            <Link to="/work">Work</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/923020440830"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappIcon}
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>

        {/* Expanded Columns Section */}
        <div className={styles.columnsWrapper}>
          {/* Column 1 - About */}
          <div className={styles.col}>
            <h4>About StackOceans.AI</h4>
            <p>
              StackOceans.AI is a next-generation AI product engineering studio
              delivering intelligent systems, enterprise SaaS platforms, AI
              automation workflows, LLM-powered applications, and scalable
              digital ecosystems. Founded by Asad Ullah, the company operates
              with precision engineering, research-led development, and
              world-class delivery standards.
            </p>
          </div>

          {/* Column 2 - Leadership */}
          <div className={styles.col}>
            <h4>Leadership</h4>
            <p>
              Founder & CTO: <strong>Asad Ullah</strong>
              <br />
              CEO & GM: <strong>Azhar Ali</strong>
              <br />
              Global Team Strength:{" "}
              <strong>62+ Engineers, Designers & AI Specialists</strong>
            </p>
          </div>

          {/* Column 3 - Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <p>
              Phone / WhatsApp: <strong>+92 302 0440830</strong>
              <br />
              Availability: Local SIM · 24/7 Support
              <br />
              Email: contact@stackoceans.ai (optional)
            </p>
            <p>
              For partnerships, AI consulting, enterprise projects, or product
              collaboration, please reach out via our WhatsApp or official
              email.
            </p>
          </div>

          {/* Column 4 - Careers */}
          <div className={styles.col}>
            <h4>Careers</h4>
            <p>
              We hire high-caliber engineers, AI researchers, designers, DevOps
              architects, and innovators across the globe. StackOceans.AI offers
              a high-growth environment, cutting-edge research exposure, and
              world-class engineering standards.
            </p>

            <Link to="/careers" className={styles.careerBtn}>
              Explore open roles →
            </Link>
          </div>
        </div>

        {/* Meta / Legal Section */}
        <div className={styles.meta}>
          <span>
            © {new Date().getFullYear()} StackOceans.AI. All rights reserved.
          </span>
          <span>
            Privacy Policy · Terms · Security · Responsible AI · Cookies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



