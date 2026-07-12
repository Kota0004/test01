import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

/**
 * Claude Design DarkBand — ページに緩急を作るダークセクション(Mercury / Oura 由来)。
 * 背景は「黒」ではなく暖色系の #141413。
 */
export function DarkBand({ eyebrow, title, lead, children, style }) {
  return (
    <section
      style={{
        background: "var(--bg-inverse)",
        color: "var(--text-inverse-primary)",
        padding: "var(--space-section-lg) clamp(20px, 4vw, 48px)",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div style={{ maxWidth: "var(--container-full)", margin: "0 auto" }}>
        {eyebrow && <Eyebrow inverse>{eyebrow}</Eyebrow>}
        {title && (
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-xl)",
              fontWeight: 500,
              lineHeight: 1.25,
              margin: "20px 0 16px",
              maxWidth: "15em",
            }}
          >
            {title}
          </h2>
        )}
        {lead && (
          <p style={{ margin: 0, color: "var(--text-inverse-secondary)", maxWidth: "36em", lineHeight: 1.8 }}>
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
