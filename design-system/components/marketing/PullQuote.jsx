import React from "react";

/**
 * Claude Design PullQuote — 中央寄せの引用バンド(preview/index.html .pull-quote 準拠)。
 * bg-secondary + 上下 1px 罫線、引用符ではなく ✻ を上に。
 */
export function PullQuote({ quote, attribution, style }) {
  return (
    <section
      style={{
        paddingBlock: "var(--space-section-lg)",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        textAlign: "center",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div style={{ maxWidth: "var(--container-full)", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>
        <span aria-hidden="true" style={{ fontSize: "1.5rem", color: "var(--accent)", display: "block", marginBottom: 32 }}>
          &#10035;
        </span>
        <blockquote
          style={{
            margin: "0 auto",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            maxWidth: "24em",
            color: "var(--text-primary)",
          }}
        >
          {quote}
        </blockquote>
        {attribution && (
          <cite
            style={{
              display: "block",
              marginTop: 36,
              fontFamily: "var(--font-mono)",
              fontStyle: "normal",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
            }}
          >
            {attribution}
          </cite>
        )}
      </div>
    </section>
  );
}
