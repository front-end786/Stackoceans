import { Users, ShieldCheck, Sparkles, Rocket } from "lucide-react";
import NavBar from "../sections/NavBar/NavBar";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./About.module.css";

const principles = [
  { title: "Founder-led delivery", body: "Asad Ullah (Founder & CTO) and Azhar Ali (CEO & GM) stay involved.", icon: <Users size={18} /> },
  { title: "Reliability first", body: "Secure SDLC, observability, QA, and runbooks so launches stay healthy.", icon: <ShieldCheck size={18} /> },
  { title: "Momentum mindset", body: "Weekly demos, clear milestones, and shipping culture to keep pace.", icon: <Rocket size={18} /> },
  { title: "Delightful UX", body: "Design systems, motion, and accessibility woven into every surface.", icon: <Sparkles size={18} /> },
];

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">About StakOceans.AI</div>
          <h1 className="headline">StackOceansAI shipping AI and product experiences.</h1>
          <p className="subhead">
            We combine strategy, design, and engineering to deliver AI SaaS, trading tools, web/mobile, desktop, and Web3 products.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className="headline">Principles we operate on</h2>
          <div className={styles.grid}>
            {principles.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.05}>
                <div className={styles.card}>
                  <div className={styles.row}>
                    {p.icon}
                    <h3>{p.title}</h3>
                  </div>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className="headline">Leadership</h2>
          <div className={styles.grid}>
            <Reveal>
              <div className={styles.card}>
                <h3>Asad Ullah — Founder & CTO</h3>
                <p>Guides architecture, delivery, and AI strategy. Keeps teams shipping high-quality releases.</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className={styles.card}>
                <h3>Azhar Ali — CEO & GM</h3>
                <p>Drives operations, client success, and ensures every engagement is transparent and outcome-focused.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
