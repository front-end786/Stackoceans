import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { setActiveCapability } from "../../features/ui/uiSlice";
import styles from "./Capabilities.module.css";

const highlightMap = {
  "ai-platforms": ["MLOps pipelines", "RAG + agents", "Evaluation suites"],
  "ai-saas": ["Tenant isolation", "Usage metering", "Growth analytics"],
  trading: ["Data bridges", "Risk controls", "Realtime dashboards"],
  blockchain: ["Smart contracts", "Wallet UX", "Security reviews"],
  fullstack: ["Responsive UX", "Desktop & macOS", "APIs & observability"],
};

const Capabilities = ({ items }) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.ui.activeCapability);
  const activeItem = items.find((i) => i.id === active) ?? items[0];

  return (
    <section className="section" id="capabilities">
      <div className={styles.head}>
        <div>
          <div className="pill">Capabilities</div>
          <h2 className="headline">
            Specialists across AI, trading, and web3.
          </h2>
          <p className="subhead">
            Cross-functional pods that pair design, engineering, and product to
            ship production-grade software.
          </p>
        </div>
        <div className={styles.tabs}>
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                className={`${styles.tab} ${isActive ? styles.active : ""}`}
                onClick={() => dispatch(setActiveCapability(item.id))}
              >
                <span>{item.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="tab-underline"
                    className={styles.underline}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.panel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={styles.panelInner}
          >
            <div>
              <p className={styles.panelTitle}>{activeItem.title}</p>
              <p className={styles.panelDesc}>{activeItem.desc}</p>
            </div>
            <div className={styles.badges}>
              {highlightMap[activeItem.id]?.map((h) => (
                <span key={h} className={`${styles.badgeSpan}`}>
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Capabilities;




