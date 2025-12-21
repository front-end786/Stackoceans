import NavBar from "../sections/NavBar/NavBar";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Careers.module.css";

const roles = [
  { title: "Senior Kotlin Developer", location: "Remote / Hybrid", type: "Full-time", focus: "Backend services, performance, reliability." },
  { title: "ML Engineer", location: "Remote", type: "Full-time", focus: "RAG, agents, evaluation, and observability." },
  { title: "Frontend Engineer (React)", location: "Remote / Hybrid", type: "Full-time", focus: "Design systems, motion, web performance." },
  { title: "Backend Engineer (Node/Go)", location: "Remote", type: "Full-time", focus: "APIs, auth, billing, multi-tenant SaaS." },
  { title: "Blockchain Engineer", location: "Remote", type: "Contract/Full-time", focus: "Smart contracts, wallet UX, audits." },
];

const CareersPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Careers</div>
          <h1 className="headline">Join a shipping-first AI studio.</h1>
          <p className="subhead">We are 62 specialists building AI SaaS, trading, web/mobile, desktop, and Web3 products.</p>
        </header>

        <section className={styles.section}>
          <h2 className="headline">Open roles</h2>
          <div className={styles.grid}>
            {roles.map((role, idx) => (
              <Reveal key={role.title} delay={idx * 0.05}>
                <div className={styles.card}>
                  <h3>{role.title}</h3>
                  <p className={styles.muted}>
                    {role.location} • {role.type}
                  </p>
                  <p>{role.focus}</p>
                  <div className={styles.chips}>
                    <span className={styles.chip}>Founder-led</span>
                    <span className={styles.chip}>Remote-first</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
