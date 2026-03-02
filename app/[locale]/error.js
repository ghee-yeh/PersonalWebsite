"use client";

import { motion } from "framer-motion";
import { fadeInVariants, staggerContainer } from "../_utils/animations";
import styles from "./error.module.css";

export default function Error({ error, reset }) {
  return (
    <motion.div
      className={styles.container}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.polygonWrapper} variants={fadeInVariants}>
        <svg className={styles.spinning} viewBox="0 0 500 500" width="280" height="280">
          <polygon
            points={Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 2 * Math.PI) / 12;
              return `${250 + 250 * Math.cos(angle)},${250 + 250 * Math.sin(angle)}`;
            }).join(" ")}
            fill="var(--primary)"
          />
        </svg>
        <span className={styles.code}>500</span>
      </motion.div>
      <motion.p className="b1" variants={fadeInVariants}>
        Something went wrong
      </motion.p>
      <motion.button onClick={reset} className={`b2 ${styles.link}`} variants={fadeInVariants}>
        Try again
      </motion.button>
    </motion.div>
  );
}
