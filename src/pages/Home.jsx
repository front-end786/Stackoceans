import { useMemo } from "react";
import NavBar from "../sections/NavBar/NavBar";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services/Services";
import Capabilities from "../sections/Capabilities/Capabilities";
import Stats from "../sections/Stats/Stats";
import Team from "../sections/Team/Team";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Home.module.css";

const Home = () => {
  const capabilities = useMemo(
    () => [
      {
        id: "ai-platforms",
        title: "AI Platforms",
        desc: "End-to-end AI products: data, inference, evaluation, and observability built for production scale.",
      },
      {
        id: "ai-saas",
        title: "AI SaaS",
        desc: "Multi-tenant SaaS with secure auth, billing, and experiment sandboxes to launch fast.",
      },
      {
        id: "trading",
        title: "AI Trading",
        desc: "Signal pipelines, risk tooling, and dashboards for algorithmic and quant strategies.",
      },
      {
        id: "blockchain",
        title: "Web3 & Blockchain",
        desc: "Smart contracts, wallet flows, and token utilities delivered with robust security.",
      },
      {
        id: "fullstack",
        title: "Full-Stack Engineering",
        desc: "Web, mobile, and desktop apps with resilient APIs and cloud-native reliability.",
      },
    ],
    []
  );

  return (
    <div className={styles.page}>
      <NavBar />
      <Hero />
      <div className="app-shell">
        <Reveal>
          <Services />
        </Reveal>
        <Reveal delay={0.04}>
          <Capabilities items={capabilities} />
        </Reveal>
        <Reveal delay={0.08}>
          <Stats />
        </Reveal>
        <Reveal delay={0.12}>
          <Team />
        </Reveal>
        <Reveal delay={0.16}>
          <Contact />
        </Reveal>
      </div>
      <Footer />
    </div>
  );
};

export default Home;



