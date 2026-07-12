import React, { useState } from "react";

/**
 * Claude Design Tooltip — インクの小ラベル。hover / focus で 150ms フェード。
 */
export function Tooltip({ label, side = "top", children }) {
  const [open, setOpen] = useState(false);
  const pos =
    side === "bottom"
      ? { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }
      : { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" };
  return (
    <span
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute",
          ...pos,
          padding: "5px 12px",
          background: "var(--ink-900)",
          color: "var(--ivory-50)",
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
          borderRadius: "var(--radius-sm)",
          opacity: open ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity var(--duration-fast) var(--ease-out-expo)",
          zIndex: 10,
        }}
      >
        {label}
      </span>
    </span>
  );
}
