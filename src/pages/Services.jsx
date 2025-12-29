import NavBar from "../sections/NavBar/NavBar";
import { Rocket, Brain, ShieldCheck, Smartphone, Blocks, Monitor } from "lucide-react";
import ServicesSection from "../sections/Services/Services";
import Capabilities from "../sections/Capabilities/Capabilities";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Services.module.css";

const extendedCapabilities = [
  {
    id: "delivery",
    title: "Delivery Pods",
    desc: "Cross-functional squads (PM, design, FE/BE, QA, DevOps) delivering weekly releases with demo cadence.",
  },
  {
    id: "governance",
    title: "Quality & Governance",
    desc: "Secure SDLC, code review rituals, observability, and runbooks so production stays stable.",
  },
  {
    id: "platforms",
    title: "Platforms & Infrastructure",
    desc: "Cloud infra, CI/CD, secrets, feature flags, analytics, and experiment tooling wired from day one.",
  },
  {
    id: "support",
    title: "Support & Success",
    desc: "Hypercare post-launch, incident response, and growth analytics to keep the product advancing.",
  },
];

const pillars = [
  { icon: <Brain size={18} />, title: "AI SaaS", body: "Auth, billing, evaluation, RAG/agents, governance." },
  { icon: <ShieldCheck size={18} />, title: "Trading", body: "Risk controls, dashboards, alerts, data bridges." },
  { icon: <Smartphone size={18} />, title: "Web & Mobile", body: "Responsive UX, offline sync, realtime collab." },
  { icon: <Monitor size={18} />, title: "Desktop & macOS", body: "Native-quality apps, system integrations, updates." },
  { icon: <Blocks size={18} />, title: "Web3", body: "Wallet UX, smart contracts, security, token utilities." },
  { icon: <Rocket size={18} />, title: "Delivery Pods", body: "Cross-functional squads shipping weekly demos." },
];

const process = [
  {
    title: "Discover",
    body: "Workshops, success metrics, architecture and delivery plan aligned with budget.",
  },
  {
    title: "Design",
    body: "Flows, UX, design system, and interactive prototypes to lock in the experience.",
  },
  {
    title: "Build",
    body: "Parallel tracks across frontend, backend, and AI with weekly demos and observability.",
  },
  {
    title: "Launch & Iterate",
    body: "Stabilize, measure, and expand with experiments and performance tuning.",
  },
];

const engagements = [
  {
    title: "AI platform & SaaS build",
    detail:
      "Multi-tenant SaaS with auth, billing, tenancy, usage metering, and AI evaluation harness.",
  },
  {
    title: "Trading & quant tooling",
    detail:
      "Signal ingestion, risk controls, dashboards, and alerting with auditable workflows.",
  },
  {
    title: "Web3 & blockchain",
    detail:
      "Smart contracts, wallet UX, security reviews, and token utilities with best-practice audits.",
  },
  {
    title: "Multi-surface apps",
    detail:
      "Responsive web, macOS/desktop, and mobile apps with offline-first UX and secure APIs.",
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Services overview</div>
          <h1 className="headline">
            Product teams that ship across AI, trading, and web3.
          </h1>
          <p className="subhead">
            We run delivery pods that pair strategy, design, and engineering.
            Founder-led involvement keeps decisions fast and quality high.
          </p>
        </header>

        <ServicesSection />

        <section className={styles.section}>
          <h2 className="headline">What we deliver</h2>
          <div className={styles.pillars}>
            {pillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.04}>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarHead}>
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
          <h2 className="headline">How we work</h2>
          <div className={styles.processGrid}>
            {process.map((step) => (
              <div key={step.title} className={styles.processCard}>
                <p className={styles.processTitle}>{step.title}</p>
                <p className={styles.processBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Capabilities items={extendedCapabilities} />

        <section className={styles.section}>
          <h2 className="headline">Typical engagements</h2>
          <div className={styles.engagements}>
            {engagements.map((item) => (
              <div key={item.title} className={styles.engagementCard}>
                <p className={styles.engagementTitle}>{item.title}</p>
                <p className={styles.engagementDetail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;




