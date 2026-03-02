"use client";

const polygon = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 2 * Math.PI) / 12;
  return `${250 + 250 * Math.cos(angle)},${250 + 250 * Math.sin(angle)}`;
}).join(" ");

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "24px",
        background: "#ffffff",
        color: "#000000",
        fontFamily: "serif",
      }}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 280, height: 280 }}>
          <svg viewBox="0 0 500 500" width="280" height="280" style={{
            position: "absolute",
            animation: "spin 20s linear infinite",
          }}>
            <polygon points={polygon} fill="#000000" />
          </svg>
          <span style={{
            position: "relative",
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: 4,
            zIndex: 1,
            userSelect: "none",
          }}>500</span>
        </div>
        <p style={{ fontSize: 16 }}>Something went wrong</p>
        <button
          onClick={reset}
          style={{
            color: "#808080",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            fontFamily: "serif",
          }}
        >
          Try again
        </button>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </body>
    </html>
  );
}
