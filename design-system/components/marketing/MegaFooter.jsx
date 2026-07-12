import React from "react";

/**
 * Claude Design MegaFooter — preview/index.html .mega-footer 準拠。
 * ダーク地 + タグライン/リンク列 + 巨大セリフワードマーク + モノスペースのメタ行。
 */
export function MegaFooter({
  tagline,
  columns = [],
  wordmark = "Claude Design",
  meta = [],
  style,
}) {
  return (
    <footer
      style={{
        background: "var(--bg-inverse)",
        color: "var(--text-inverse-primary)",
        paddingTop: "var(--space-section-sm)",
        overflow: "hidden",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div style={{ maxWidth: "var(--container-full)", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            paddingBottom: 88,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: "16em",
            }}
          >
            {tagline}
          </p>
          {columns.map((col, i) => (
            <nav key={i} aria-label={typeof col.heading === "string" ? col.heading : undefined}>
              <h4
                style={{
                  margin: "0 0 20px",
                  fontSize: "var(--text-eyebrow)",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-inverse-secondary)",
                }}
              >
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.links.map((l, j) => (
                  <li key={j} style={{ marginBottom: 12 }}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.4rem, 11.5vw, 10.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 0.96,
            whiteSpace: "nowrap",
            opacity: 0.96,
            marginBottom: "-0.14em",
          }}
        >
          {wordmark}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            borderTop: "1px solid var(--border-inverse)",
            padding: "22px 0 26px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-inverse-secondary)",
          }}
        >
          {meta.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href = "#", children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: "var(--text-small)",
        color: "var(--text-inverse-primary)",
        textDecoration: "none",
        borderBottom: `1px solid ${hover ? "var(--accent-on-inverse)" : "transparent"}`,
        transition: "border-color var(--duration-fast)",
      }}
    >
      {children}
    </a>
  );
}
