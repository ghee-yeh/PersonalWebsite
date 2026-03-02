"use client";

import { motion } from "framer-motion";

const polygon = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 2 * Math.PI) / 12;
  return `${250 + 250 * Math.cos(angle)},${250 + 250 * Math.sin(angle)}`;
}).join(" ");

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      gap: "24px",
      background: "var(--background)",
      color: "var(--foreground)",
      fontFamily: "var(--font-lora)",
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 280, height: 280 }}
      >
        <svg viewBox="0 0 500 500" width="280" height="280" style={{
          position: "absolute",
          animation: "spin 20s linear infinite",
        }}>
          <polygon points={polygon} fill="var(--primary)" />
        </svg>
        <span style={{
          position: "relative",
          fontSize: 64,
          fontWeight: 700,
          color: "var(--secondary)",
          letterSpacing: 4,
          zIndex: 1,
          userSelect: "none",
        }}>404</span>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="b1">
        Page not found
      </motion.p>
      <motion.a
        href="/en"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="b2"
        style={{ color: "var(--tertiary)", textDecoration: "none", transition: "color 0.3s ease" }}
      >
        Go home
      </motion.a>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
