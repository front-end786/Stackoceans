import ReactECharts from "echarts-for-react";
import { motion } from "framer-motion";
import styles from "./Stats.module.css";

const lineOption = {
  backgroundColor: "transparent",
  textStyle: { color: "#e8edf7" },
  grid: { left: 0, right: 0, bottom: 10, top: 10, containLabel: true },
  xAxis: {
    type: "category",
    data: ["Q1", "Q2", "Q3", "Q4"],
    boundaryGap: false,
    axisLine: { lineStyle: { color: "rgba(255,255,255,0.2)" } },
    axisLabel: { color: "#9fb1cc" },
  },
  yAxis: {
    type: "value",
    axisLine: { show: false },
    splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } },
    axisLabel: { color: "#9fb1cc" },
  },
  tooltip: { trigger: "axis" },
  series: [
    {
      name: "Client Satisfaction",
      type: "line",
      smooth: true,
      showSymbol: false,
      data: [92, 94, 97, 98],
      areaStyle: {
        color: "rgba(45,212,255,0.18)",
      },
      lineStyle: { color: "#2dd4ff", width: 3 },
    },
  ],
};

const pieOption = {
  backgroundColor: "transparent",
  tooltip: { trigger: "item" },
  series: [
    {
      name: "Ratings",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#050910",
        borderWidth: 2,
      },
      label: { show: false, position: "center" },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: "bold",
          color: "#e8edf7",
        },
      },
      labelLine: { show: false },
      data: [
        { value: 62, name: "Team strength", itemStyle: { color: "#7c5dff" } },
        { value: 22, name: "AI/ML", itemStyle: { color: "#2dd4ff" } },
        { value: 16, name: "Web3/Trading", itemStyle: { color: "#29f0b4" } },
      ],
    },
  ],
};

const Stats = () => {
  return (
    <section className="section" id="clients">
      <div className={styles.head}>
        <div>
          <div className="pill">Impact</div>
          <h2 className="headline">
            Grooming satisfied clients and high-velocity delivery.
          </h2>
          <p className="subhead">
            We keep momentum with transparent milestones and weekly demos. The
            numbers stay green because the work ships.
          </p>
        </div>
        <div className={styles.grid}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className={styles.cardHead}>
              <span>Client satisfaction</span>
              <span className={styles.value}>98%</span>
            </div>
            <ReactECharts option={lineOption} style={{ height: 220 }} />
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
          >
            <div className={styles.cardHead}>
              <span>Team makeup</span>
              <span className={styles.value}>62 experts</span>
            </div>
            <ReactECharts option={pieOption} style={{ height: 220 }} />
            <div className={styles.legend}>
              <span className={styles.dotPurple} />
              <span>Delivery, product, design</span>
            </div>
            <div className={styles.legend}>
              <span className={styles.dotBlue} />
              <span>AI/ML engineers</span>
            </div>
            <div className={styles.legend}>
              <span className={styles.dotGreen} />
              <span>Web3 & trading specialists</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;



