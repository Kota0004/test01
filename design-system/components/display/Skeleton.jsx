import React from "react";

/**
 * Claude Design Skeleton — ivory-100 の面が静かに明滅。
 */
export function Skeleton({ width = "100%", height = 16, radius = "var(--radius-sm)", style }) {
  return (
    <span aria-hidden="true" style={{ display: "block", ...style }}>
      <style>{`@keyframes cds-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }`}</style>
      <span
        style={{
          display: "block",
          width,
          height,
          borderRadius: radius,
          background: "var(--ivory-100)",
          animation: "cds-pulse 1.6s var(--ease-out-expo) infinite",
        }}
      ></span>
    </span>
  );
}
