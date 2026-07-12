import React, { useState } from "react";

/**
 * Claude Design EditorialList — 番号付き大型リスト(Pentagram 由来)。
 * 罫線区切り、hover で bg-secondary。
 */
export function EditorialList({ items = [], style }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, fontFamily: "var(--font-body)", ...style }}>
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: i === items.length - 1 ? "1px solid var(--border)" : "none",
          }}
        >
          <Row item={it} index={i} />
        </li>
      ))}
    </ul>
  );
}

function Row({ item, index }) {
  const [hover, setHover] = useState(false);
  const clickable = !!(item.href || item.onClick);
  const Tag = item.href ? "a" : "div";
  return (
    <Tag
      href={item.href}
      onClick={item.onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "110px minmax(0, 5fr) minmax(0, 6fr) 48px",
        gap: "clamp(16px, 3vw, 48px)",
        alignItems: "baseline",
        padding: "40px 0",
        textDecoration: "none",
        color: "inherit",
        cursor: clickable ? "pointer" : "default",
        background: hover && clickable ? "var(--bg-secondary)" : "transparent",
        transition: "background var(--duration-base) var(--ease-out-expo)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.6rem",
          fontWeight: 400,
          color: "var(--ink-300)",
          lineHeight: 1,
        }}
      >
        {item.no ?? String(index + 1).padStart(2, "0")}
      </span>
      <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-heading)", fontWeight: 500, lineHeight: 1.4 }}>
        {item.title}
      </h3>
      <p style={{ margin: 0, fontSize: "var(--text-small)", color: "var(--text-secondary)", lineHeight: 1.8 }}>
        {item.description}
      </p>
      <span
        aria-hidden="true"
        style={{
          fontSize: "1.4rem",
          color: hover && clickable ? "var(--accent)" : "var(--ink-300)",
          justifySelf: "end",
          transform: hover && clickable ? "translateX(6px)" : "none",
          transition: "transform var(--duration-fast) var(--ease-out-expo), color var(--duration-fast)",
        }}
      >
        {clickable ? "→" : ""}
      </span>
    </Tag>
  );
}
