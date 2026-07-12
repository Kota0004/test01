import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

/**
 * Claude Design HeroEditorial — 左寄せのエディトリアルヒーロー(Mercury / Polestar 由来)。
 * 7:5 グリッド。右カラムには fig(色面と活字のグラフィック)などを children で。
 */
export function HeroEditorial({ eyebrow, title, subline, lead, actions, children, style }) {
  return (
    <section style={{ padding: "var(--space-section-sm) 0 var(--space-section-md)", fontFamily: "var(--font-body)", ...style }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: children ? "minmax(0, 7fr) minmax(0, 5fr)" : "minmax(0, 1fr)",
          gap: "clamp(40px, 6vw, 96px)",
          alignItems: "center",
        }}
      >
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-2xl)",
              fontWeight: 500,
              lineHeight: 1.14,
              letterSpacing: "0.01em",
              margin: "28px 0 12px",
            }}
          >
            {title}
          </h1>
          {subline && (
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                color: "var(--accent-hover)",
                margin: "0 0 28px",
              }}
            >
              {subline}
            </p>
          )}
          {lead && (
            <p style={{ maxWidth: "34em", color: "var(--text-secondary)", margin: "0 0 40px", lineHeight: 1.8 }}>
              {lead}
            </p>
          )}
          {actions && <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>{actions}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
