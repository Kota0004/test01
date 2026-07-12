import React from "react";

/**
 * Claude Design Spinner — 細い罫線リング。上辺だけテラコッタ。
 */
export function Spinner({ size = 24, label = "読み込み中", style }) {
  return (
    <span role="status" aria-label={label} style={{ display: "inline-flex", ...style }}>
      <style>{`@keyframes cds-spin { to { transform: rotate(360deg); } }`}</style>
      <span
        style={{
          width: size,
          height: size,
          borderRadius: "var(--radius-full)",
          border: "2px solid var(--border)",
          borderTopColor: "var(--accent)",
          animation: "cds-spin 800ms linear infinite",
          boxSizing: "border-box",
        }}
      ></span>
    </span>
  );
}
