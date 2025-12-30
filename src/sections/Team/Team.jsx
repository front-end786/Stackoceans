import { motion } from "framer-motion";
import styles from "./Team.module.css";

const leaders = [
  {
    name: "Asad Ullah",
    role: "Founder & CTO",
    note: "Founder-led engineering. Direct access to strategy and delivery.",
  },
  {
    name: "Azhar Ali",
    role: "CEO & GM",
    note: "Operational excellence with product intuition to keep teams aligned.",
  },
];

const Team = () => {
  return (
    <section className="section" id="team">
      <div className={styles.head}>
        <div className="pill">Leadership</div>
        <h2 className="headline">
          Founder-led pods with many senior builders.
        </h2>
        <p className="subhead">
          Dedicated squads blend AI engineers, product designers, and blockchain
          specialists. Leadership stays hands-on.
        </p>
      </div>
      <div className={styles.grid}>
        {leaders.map((leader, i) => (
          <motion.div
            key={leader.name}
            className={styles.card}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={styles.avatar}>{leader.name.charAt(0)}</div>
            <div>
              <p className={styles.name}>{leader.name}</p>
              <p className={styles.role}>{leader.role}</p>
              <p className={styles.note}>{leader.note}</p>
            </div>
          </motion.div>
        ))}
        <div className={styles.cardMuted}>
          <p className={styles.name}>62+ specialists</p>
          <p className={styles.note}>
            AI, product design, full-stack, blockchain, trading, SRE, QA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;




