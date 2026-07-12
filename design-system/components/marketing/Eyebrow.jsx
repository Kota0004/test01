import React from "react";

/**
 * Claude Design Eyebrow — 見出しの上の小さな大文字ラベル(Pentagram 由来)。
 * ✻ ティックはアクセント色。
 */
export function Eyebrow({ tick = true, inverse = false, children, style }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-eyebrow)",
        fontWeight: 500,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)",
        ...style,
      }}
    >
      {tick && (
        <span
          aria-hidden="true"
          style={{ color: inverse ? "var(--accent-on-inverse)" : "var(--accent)", marginRight: "0.6em" }}
        >
          &#10035;
        </span>
      )}
      {children}
    </p>
  );
}
