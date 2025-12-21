import NavBar from "../sections/NavBar/NavBar";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Trusted.module.css";

// const logos = ["NovaHealth", "QuantEdge", "ClearDesk", "TradeWave", "GridWorks", "Orbit Labs"];

const logosAddresses = [
  "./public/Arricor.png",
  "./public/basatanwar-logo.png",
  "./public/Desert_Tourism_logo.png",
  "./public/gettyimages-logo.svg",
  "./public/h1-logo.png",
  "./public/jsl_logo.svg",
];

// const testimonials = [
//   {
//     author: "Head of Product, SaaS",
//     quote:
//       "They shipped a multi-tenant AI platform in 6 weeks with weekly demos and zero surprises.",
//   },
//   {
//     author: "CTO, Trading",
//     quote:
//       "Risk controls, dashboards, and alerts landed on time—governed delivery we could trust.",
//   },
//   {
//     author: "Founder, Web3",
//     quote:
//       "Wallet UX and smart contracts felt premium. Security and clarity from day one.",
//   },
// ];
const testimonials = [
  {
    author: "Pouline P. Nurvas (CEO, NeuroOces)",
    quote:
      "StackOceans.AI took our scattered product vision and turned it into a fully operational AI-driven platform with unmatched precision. Their engineering discipline, communication clarity, and relentless focus on performance helped us launch faster than any previous team we worked with. Exceptional from strategy to deployment.",
  },
  {
    author: "Sophia Martinez (Head of Innovation, FinEdge Labs)",
    quote:
      "The team understood our complex requirements instantly and delivered an enterprise-grade AI automation system that transformed how we operate. Every sprint was predictable, every delivery well-tested, and the final product exceeded our expectations in both quality and scalability. The partnership felt effortless.",
  },
  {
    author: "Arjun Mehta (CTO, TradeMatrix)",
    quote:
      "Their approach to architecture, security, and product delivery is world-class. We trusted them with mission-critical trading dashboards and risk-control modules—and they delivered flawlessly. Code quality, communication, and execution were consistently top-tier throughout the entire engagement.",
  },
  {
    author: "Emily Carter (Founder, LearnWave AI)",
    quote:
      "Our educational AI prototype became a polished, production-ready system thanks to StackOceans.AI. They brought clarity to every technical decision, moved with impressive speed, and maintained premium UI/UX from day one. A truly rare combination of creativity and engineering discipline.",
  },
  {
    author: "Michael Thompson (CEO, SwiftRetail)",
    quote:
      "The team rebuilt our entire e-commerce infrastructure with zero downtime, modernized our architecture, and optimized user flows that immediately improved conversions. Their ability to balance business goals with technical execution is unmatched in the industry.",
  },
  {
    author: "Hana Lee (Product Director, MedIntel Health)",
    quote:
      "Working with StackOceans.AI felt like having a world-class internal team. They handled AI modeling, UI design, backend logic, and deployment with the same level of care. Their transparency and reliability made them our top engineering partner moving forward.",
  },
  {
    author: "Daniel Becker (COO, LogiTrack Global)",
    quote:
      "They delivered a robust automation system that has become the backbone of our logistics operations. The dashboards, workflows, and analytics they engineered gave us operational clarity we never had before. Professional, proactive, and deeply skilled.",
  },
  {
    author: "Aisha Rahman (Founder, ChainVision Web3)",
    quote:
      "Their smart contract development, wallet UX, and overall product quality were truly premium. They brought strong security awareness, technical clarity, and exceptional collaboration every step of the way. We felt confident launching knowing the product was solid.",
  },
  {
    author: "Mark Ellison (VP Technology, BlueRiver Solutions)",
    quote:
      "StackOceans.AI excels at tackling complex technical challenges with ease. Their documentation, delivery cadence, and engineering quality are far above industry standards. They became a strategic partner rather than just a vendor. Highly recommended for any mission-critical product.",
  },
];

const TrustedPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Trusted By</div>
          <h1 className="headline">Teams that demand reliable launches.</h1>
          <p className="subhead">
            Across AI SaaS, trading, web/mobile, desktop, and Web3 products.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className="headline">Our Best Clietns</h2>
          <div className={styles.logosRail}>
            <div className={styles.railTrack}>
              {/* {[...logos, ...logos].map((logo, idx) => (
                <span key={idx} className={styles.railItem}>
                  {logo}
                </span>
              ))} */}
              {/* Show the logos with animated slider */}
              {[...logosAddresses, ...logosAddresses].map((logo, idx) => (
                <img
                  src={logo}
                  alt="Client Logo"
                  className={styles.logoImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className="headline">Testimonials</h2>
          <div className={styles.grid}>
            {testimonials.map((t, idx) => (
              <Reveal key={t.author} delay={idx * 0.06}>
                <div className={styles.card}>
                  <p>{t.quote}</p>
                  <p className={styles.muted}>{t.author}</p>
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

export default TrustedPage;
