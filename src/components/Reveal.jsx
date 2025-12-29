import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Reveal wraps content and plays an entrance animation
 * once it intersects the viewport (IntersectionObserver via useInView).
 */
const Reveal = ({ children, delay = 0, y = 16 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;



