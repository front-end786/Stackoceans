import { Brain, Layers, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import NavBar from "../sections/NavBar/NavBar";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Page.module.css";

const accelerators = [
  {
    title: "Multi-tenant foundations",
    body: "Secure auth, org/tenant isolation, RBAC, billing, usage metering, and feature flags baked in.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "AI evaluation harness",
    body: "Red-teaming, regression suites, and human-in-the-loop scoring to ship reliable AI features.",
    icon: <Brain size={18} />,
  },
  {
    title: "Experiment velocity",
    body: "A/B tests, analytics, and session replays wired from day one to measure adoption and quality.",
    icon: <Sparkles size={18} />,
  },
  {
    title: "Design systems",
    body: "Tokenized UI kits with accessibility, motion primitives, and responsive layouts ready to scale.",
    icon: <Layers size={18} />,
  },
];

const projects = [
  {
    title: "Ops Copilot for Logistics",
    detail:
      "RAG + agents over operational docs; SLA-backed responses with evaluator gates and audit trails.",
    tags: ["RAG", "Agents", "Observability"],
  },
  {
    title: "AI Support Suite",
    detail:
      "Ticket triage, summarization, intent routing, and quality dashboards across multi-tenant orgs.",
    tags: ["LLM", "Summaries", "Multi-tenant"],
  },
  {
    title: "ML Feature Store SaaS",
    detail:
      "Ingestion, monitoring, and governance for teams shipping models to production with guardrails.",
    tags: ["Feature store", "Governance", "Billing"],
  },
];

const AISaaSPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">AI SaaS</div>
          <h1 className="headline">
            Launch AI SaaS faster with production-grade rails.
          </h1>
          <p className="subhead">
            We ship multi-tenant AI platforms with secure auth, billing,
            evaluation harnesses, and experiment velocity so you can scale with
            confidence.
          </p>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>12</span>
              <span className={styles.statLabel}>AI SaaS launches</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>6 wks</span>
              <span className={styles.statLabel}>First release</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>98%</span>
              <span className={styles.statLabel}>Satisfaction</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className="headline">Accelerators we bring</h2>
          <div className={styles.grid}>
            {accelerators.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05}>
                <div className={styles.card}>
                  <div className={styles.row}>
                    {item.icon}
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className="headline">Sample projects</h2>
          <div className={styles.grid}>
            {projects.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.07}>
                <div className={styles.card}>
                  <div className={styles.row}>
                    <Workflow size={18} />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.detail}</p>
                  <div className={styles.chips}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.chip}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className="headline">Trusted by teams shipping AI</h2>
          <div className={styles.logos}>
            <span>QuantEdge</span>
            <span>NovaHealth</span>
            <span>ClearDesk</span>
            <span>BrightOps</span>
            <span>Latitude Labs</span>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default AISaaSPage;


