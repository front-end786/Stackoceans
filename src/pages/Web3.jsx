import { Wallet, ShieldCheck, Blocks, Sparkles, Globe } from "lucide-react";
import NavBar from "../sections/NavBar/NavBar";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Page.module.css";

const tracks = [
  {
    title: "Smart contracts",
    body: "Token design, staking, vesting, and audits with robust test suites and monitoring.",
    icon: <Blocks size={18} />,
  },
  {
    title: "Wallet UX",
    body: "Seamless wallet connect, fiat on-ramps, and transaction clarity to build trust.",
    icon: <Wallet size={18} />,
  },
  {
    title: "Security first",
    body: "Threat modeling, permissions, and safeguards for custody and non-custody flows.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Growth & community",
    body: "Referral mechanics, quests, analytics, and governance interfaces that feel premium.",
    icon: <Sparkles size={18} />,
  },
];

const drops = [
  {
    title: "Creator Pass",
    detail:
      "ERC-721 with tiered utilities, allowlists, secondary royalties, and analytics.",
    tags: ["ERC-721", "Royalties", "Analytics"],
  },
  {
    title: "DeFi Companion",
    detail:
      "Portfolio, swaps, and safety checks with human-readable transactions and risk surfacing.",
    tags: ["DeFi", "Safety", "UX"],
  },
  {
    title: "Gaming Economy",
    detail:
      "In-game assets, marketplace, and seasonal quests with gas-optimized contracts.",
    tags: ["Marketplace", "Quests", "Gas"],
  },
];

const Web3Page = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Web3 & Blockchain</div>
          <h1 className="headline">Secure, human-grade Web3 experiences.</h1>
          <p className="subhead">
            Wallet flows, smart contracts, and token utilities delivered with
            security and delightful UX.
          </p>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Contract launches</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}>Security incidents</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>Global</span>
              <span className={styles.statLabel}>Latency-aware infra</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className="headline">What we cover</h2>
          <div className={styles.grid}>
            {tracks.map((item, idx) => (
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
          <h2 className="headline">Launch stories</h2>
          <div className={styles.grid}>
            {drops.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.07}>
                <div className={styles.card}>
                  <h3>{item.title}</h3>
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
            <span>NovaChain</span>
            <span>QuestHub</span>
            <span>SignalSwap</span>
            <span>Orbit Labs</span>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Web3Page;


