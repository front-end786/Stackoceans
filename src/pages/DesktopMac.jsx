import { Monitor, Cpu, Layers, ShieldCheck } from "lucide-react";
import NavBar from "../sections/NavBar/NavBar";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Page.module.css";

const features = [
  {
    title: "Native experiences",
    body: "macOS and desktop apps with native menus, shortcuts, and offline-first storage.",
    icon: <Monitor size={18} />,
  },
  {
    title: "System integrations",
    body: "Keychain, file system, notifications, and OS-level services wired securely.",
    icon: <Cpu size={18} />,
  },
  {
    title: "Design systems",
    body: "Platform-consistent UI with motion, theming, and accessibility baked in.",
    icon: <Layers size={18} />,
  },
  {
    title: "Security & updates",
    body: "Code signing, auto-updates, telemetry, and crash reporting pipelines.",
    icon: <ShieldCheck size={18} />,
  },
];

const builds = [
  {
    title: "Quant Workbench",
    detail:
      "Desktop analytics for traders with hotkeys, offline mode, and secure sync.",
    tags: ["Hotkeys", "Offline", "Sync"],
  },
  {
    title: "Creator Studio",
    detail: "macOS editor with GPU-accelerated rendering and collaboration.",
    tags: ["GPU", "Collaboration", "macOS"],
  },
  {
    title: "Ops Control Center",
    detail:
      "Multi-screen desktop app for operations teams with observability overlays.",
    tags: ["Observability", "Multi-screen", "Ops"],
  },
];

const DesktopMacPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Desktop & macOS</div>
          <h1 className="headline">
            Native-quality desktop and macOS applications.
          </h1>
          <p className="subhead">
            High-performance desktop software with the polish users
            expect—secure, offline-ready, and easy to update.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className="headline">Built-in strengths</h2>
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
          <h2 className="headline">Example deliveries</h2>
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
            <span>GridWorks</span>
            <span>FluxOps</span>
            <span>NovaDesk</span>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default DesktopMacPage;



