import React from "react";

/**
 * Claude Design Card — 1px 罫線 + radius 12。framed は「額装」(極小の暖色影付き)。
 */
export function Card({ variant = "outline", padding = 24, children, style, ...rest }) {
  return (
    <div
      style={{
        background: variant === "tinted" ? "var(--bg-secondary)" : "var(--bg-primary)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        boxShadow: variant === "framed" ? "var(--shadow-card)" : "none",
        padding,
        fontFamily: "var(--font-body)",
        color: "var(--text-primary)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
