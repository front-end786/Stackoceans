import {
  BarChart3,
  LineChart,
  ShieldCheck,
  Radar,
  Workflow,
} from "lucide-react";
import NavBar from "../sections/NavBar/NavBar";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Page.module.css";

const stacks = [
  {
    title: "Data bridges",
    body: "Low-latency ingestion from exchanges, brokers, and alt-data with schema governance.",
    icon: <Radar size={18} />,
  },
  {
    title: "Risk tooling",
    body: "Circuit breakers, position limits, scenario modeling, and audit logs to stay compliant.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Signal research",
    body: "Feature stores, notebooks, and experiment orchestration with metric tracking and approvals.",
    icon: <LineChart size={18} />,
  },
  {
    title: "Exec dashboards",
    body: "Real-time PnL, alerting, and drill-down dashboards with access control per desk.",
    icon: <BarChart3 size={18} />,
  },
];

const trades = [
  {
    title: "Quant Ops Console",
    detail:
      "Data intake, signal validation, and risk gates before routing to execution venues.",
    tags: ["Risk", "Routing", "Audit"],
  },
  {
    title: "Hedge Fund Insights",
    detail:
      "Research portal with notebooks, feature lineage, backtests, and release toggles.",
    tags: ["Backtest", "Lineage", "Flags"],
  },
  {
    title: "Retail Trading Plus",
    detail:
      "Guided trading journeys, education, and anomaly detection for safer retail flows.",
    tags: ["Guidance", "Anomaly", "Education"],
  },
];

const AITradingPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">AI Trading</div>
          <h1 className="headline">
            Build trustworthy trading tools with AI and governance baked in.
          </h1>
          <p className="subhead">
            From signal research to production dashboards, we deliver the
            rails—risk controls, monitoring, and UX—so teams can ship
            confidently.
          </p>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>8</span>
              <span className={styles.statLabel}>Trading builds</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>Ops coverage</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>SOC2</span>
              <span className={styles.statLabel}>Aligned patterns</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className="headline">Platform capabilities</h2>
          <div className={styles.grid}>
            {stacks.map((item, idx) => (
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
          <h2 className="headline">Engagement examples</h2>
          <div className={styles.grid}>
            {trades.map((item, idx) => (
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
          <h2 className="headline">Trusted by</h2>
          <div className={styles.logos}>
            <span>Arcadia Funds</span>
            <span>TradeWave</span>
            <span>NorthBridge</span>
            <span>MarketMakers</span>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default AITradingPage;



