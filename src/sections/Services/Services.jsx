import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { img } from "framer-motion/client";

const cards = [
  {
    img: "robot-ai.png",
    title: "AI Development",
    body: "Custom models, RAG pipelines, agents, and evaluators tuned for your domain.",
  },
  {
    img: "ai-sass.png",
    title: "AI SaaS Products",
    body: "Multi-tenant SaaS foundations with billing, auth, analytics, and growth hooks.",
  },
  {
    img: "ai-trading.png",
    title: "AI Trading",
    body: "Data ingestion, signal research, risk controls, and execution dashboards.",
  },
  {
    img: "blockchain.png",
    title: "Blockchain & Web3",
    body: "Wallet flows, smart contracts, audits, and token utilities built securely.",
  },
  {
    img: "web-dev.png",
    title: "Web & Desktop",
    body: "Responsive web, macOS, and desktop apps with smooth UX and offline resilience.",
  },
  {
    img: "mobile.png",
    title: "Mobile & APIs",
    body: "Cross-platform apps with cloud-native APIs, observability, and performance baked in.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className={styles.head}>
        <div>
          <div className="pill">Services</div>
          <h2 className="headline">Full-spectrum build partners.</h2>
          <p className="subhead">
            We provide complete end-to-end technology solutions—including AI
            SaaS development, custom AI systems, web and mobile apps, and
            desktop or macOS applications—designed to help businesses innovate
            faster and build smarter digital products.
          </p>
        </div>
        <div className={styles.glow} />
      </div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className={styles.card}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            style={{ transitionDelay: `${index * 0.04}s` }}
          >
            <div className={styles.icon}>
              <img src={card.img} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;




