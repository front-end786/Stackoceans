import {
  ArrowRight,
  Rocket,
  Sparkles,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";
import styles from "./Hero.module.css";
import Reveal from "../../components/Reveal";

const Hero = () => {
  return (
    <section className={`${styles.hero} section`} id="top">
      <div className="app-shell">
        <div className={styles.topRow}>
          <div className="pill">AI-native product studio</div>
          <div className={styles.tags}>
            <span>AI SaaS</span>
            <span>Trading</span>
            <span>Web/Mobile</span>
            <span>Desktop & macOS</span>
            <span>Web3</span>
          </div>
        </div>

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.copy}>
              <h1 className="headline">
                Build ambitious products
                <span className="gradient-text">
                  {" "}
                  across AI, trading, web, mobile, and web3.
                </span>
              </h1>
              <p className="subhead">
                AI-Driven Product Development for High-Growth Teams From robust
                web platforms to scalable AI integrations, StackOceans.AI
                delivers performance-centric engineering that turns complex
                challenges into elegant digital experiences
              </p>
              <div className={styles.actions}>
                <a href="/contact" className={styles.primary}>
                  Start a project <ArrowRight size={16} />
                </a>
                <a href="/services" className={styles.secondary}>
                  View services
                </a>
              </div>
              <div className={styles.meta}>
                <div>
                  <span className={styles.kpi}>120+</span>
                  <span className={styles.kpiLabel}>Launches delivered</span>
                </div>
                <div>
                  <span className={styles.kpi}>98%</span>
                  <span className={styles.kpiLabel}>Client satisfaction</span>
                </div>
                <div>
                  <span className={styles.kpi}>6 wks</span>
                  <span className={styles.kpiLabel}>To first release</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className={styles.card}>
              <div className={styles.badge}>Founder-led</div>
              <p className={styles.cardTitle}>“Shipping is our culture.”</p>
              <p className={styles.cardText}>
                We pair strategy, design, and engineering in weekly
                cadences—hands-on from concept to launch.
              </p>
              <div className={styles.chips}>
                <span>AI SaaS</span>
                <span>Trading</span>
                <span>Web & Mobile</span>
                <span>Desktop & macOS</span>
                <span>Web3</span>
              </div>
              <div className={styles.highlights}>
                <div>
                  <Rocket size={18} />
                  <span>Launch in weeks</span>
                </div>
                <div>
                  <ShieldCheck size={18} />
                  <span>Governed delivery</span>
                </div>
                <div>
                  <Sparkles size={18} />
                  <span>Delightful UX</span>
                </div>
              </div>
              <div className={styles.ctaRow}>
                <a href="mailto:hello@stakoceans.ai" className={styles.primary}>
                  Talk with us
                </a>
                <span className={styles.small}>
                  Founder-led, outcome-focused.
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className={styles.footerRow}>
          <div className={styles.footerChip}>
            <Building2 size={16} />
            <span>Founder & CTO: Asad Ullah</span>
          </div>
          <div className={styles.footerChip}>
            <Users size={16} />
            <span>62-person team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


