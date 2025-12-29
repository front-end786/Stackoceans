import { Smartphone, Globe, Rocket, CheckCircle } from "lucide-react";
import NavBar from "../sections/NavBar/NavBar";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Page.module.css";

const features = [
  {
    title: "Cross-platform delivery",
    body: "React, React Native, and edge-ready APIs so web and mobile ship together.",
    icon: <Globe size={18} />,
  },
  {
    title: "Offline & realtime",
    body: "Sync engines, background tasks, and realtime collaboration patterns built-in.",
    icon: <Smartphone size={18} />,
  },
  {
    title: "Performance & a11y",
    body: "Lighthouse, performance budgets, and accessibility baked into CI/CD.",
    icon: <CheckCircle size={18} />,
  },
  {
    title: "Growth telemetry",
    body: "Eventing, funnels, and experiment toggles to iterate quickly after launch.",
    icon: <Rocket size={18} />,
  },
];

const builds = [
  {
    title: "Productivity Suite",
    detail:
      "Web + mobile with offline sync, notifications, and role-aware dashboards.",
    tags: ["Offline", "Notifications", "Roles"],
  },
  {
    title: "Health Companion",
    detail:
      "Cross-platform app with secure PHI flows, analytics, and personalization.",
    tags: ["PHI", "Personalization", "Analytics"],
  },
  {
    title: "Marketplace",
    detail:
      "Responsive storefront plus merchant mobile app with payouts and messaging.",
    tags: ["Payments", "Chat", "Merchant"],
  },
];

const WebMobilePage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Web & Mobile</div>
          <h1 className="headline">
            Ship responsive web and mobile apps side-by-side.
          </h1>
          <p className="subhead">
            One codebase philosophy where it makes sense, with API contracts and
            design systems keeping surfaces in sync.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className="headline">What you get</h2>
          <div className={styles.grid}>
            {features.map((item, idx) => (
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
          <h2 className="headline">Recent builds</h2>
          <div className={styles.grid}>
            {builds.map((item, idx) => (
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
            <span>Atlas Mobile</span>
            <span>CareFleet</span>
            <span>BlueFin</span>
            <span>Summit Apps</span>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default WebMobilePage;



