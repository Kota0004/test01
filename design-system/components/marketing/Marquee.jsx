import React from "react";

/**
 * Claude Design Marquee — 低速テキストループ(mymind 由来)。上品に、46s。
 * prefers-reduced-motion で停止。
 */
export function Marquee({ words = [], duration = 46, style }) {
  const seq = (
    <React.Fragment>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span style={{ padding: "0 1.4em", whiteSpace: "nowrap" }}>{w}</span>
          <span aria-hidden="true" style={{ color: "var(--accent)" }}>&#10035;</span>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        overflow: "hidden",
        padding: "22px 0",
        ...style,
      }}
    >
      <style>{`
        @keyframes cds-marquee { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .cds-marquee-track { animation: none !important; } }
      `}</style>
      <div
        className="cds-marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          fontFamily: "var(--font-display)",
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "var(--text-secondary)",
          animation: `cds-marquee ${duration}s linear infinite`,
        }}
      >
        {seq}
        {seq}
      </div>
    </div>
  );
}
