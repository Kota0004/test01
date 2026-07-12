import React, { useState } from "react";

/**
 * Claude Design CaseCard — 事例/記事カード。画像は額装(framed)、
 * hover は画像がわずかにズーム(1.03)+ タイトルがアクセント色に。
 */
export function CaseCard({ image, imageAlt = "", eyebrow, title, description, href = "#", style }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border)",
          background: "var(--bg-secondary)",
          aspectRatio: "4 / 3",
          marginBottom: 20,
        }}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hover ? "scale(1.03)" : "scale(1)",
              transition: "transform 400ms var(--ease-out-expo)",
            }}
          />
        ) : (
          <div
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              color: "var(--ink-300)",
              transform: hover ? "scale(1.03)" : "scale(1)",
              transition: "transform 400ms var(--ease-out-expo)",
            }}
          >
            &#10035;
          </div>
        )}
      </div>
      {eyebrow && (
        <p
          style={{
            margin: "0 0 8px",
            fontSize: "var(--text-eyebrow)",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h3
        style={{
          margin: "0 0 8px",
          fontFamily: "var(--font-display)",
          fontSize: "1.35rem",
          fontWeight: 500,
          lineHeight: 1.4,
          color: hover ? "var(--accent-hover)" : "var(--text-primary)",
          transition: "color var(--duration-fast)",
        }}
      >
        {title}
      </h3>
      {description && (
        <p style={{ margin: 0, fontSize: "var(--text-small)", color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {description}
        </p>
      )}
    </a>
  );
}
