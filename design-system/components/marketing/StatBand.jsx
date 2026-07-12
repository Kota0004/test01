import React from "react";

/**
 * Claude Design StatBand — セリフの大数字(Oura 由来)。罫線グリッド、インバース前提。
 */
export function StatBand({ stats = [], inverse = true, style }) {
  const border = inverse ? "var(--border-inverse)" : "var(--border)";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`,
        marginTop: 88,
        borderTop: `1px solid ${border}`,
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            padding: "36px clamp(16px, 2.5vw, 40px) 8px 0",
            paddingLeft: i % Math.min(stats.length, 4) === 0 ? 0 : "clamp(16px, 2.5vw, 40px)",
            borderRight: i === stats.length - 1 ? "none" : `1px solid ${border}`,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-stat)",
              fontWeight: 500,
              lineHeight: 1.1,
              fontVariantNumeric: "lining-nums",
              color: inverse ? "var(--text-inverse-primary)" : "var(--text-primary)",
            }}
          >
            {s.value}
            {s.accent && (
              <em style={{ fontStyle: "normal", color: inverse ? "var(--accent-on-inverse)" : "var(--accent)" }}>
                {s.accent}
              </em>
            )}
          </span>
          <span
            style={{
              display: "block",
              marginTop: 10,
              fontSize: "var(--text-small)",
              color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
