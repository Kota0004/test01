import React from "react";

const tones = {
  neutral: { bg: "var(--bg-secondary)", fg: "var(--text-secondary)", bd: "var(--border)" },
  accent: { bg: "var(--terracotta-500)", fg: "var(--ivory-50)", bd: "transparent" },
  success: { bg: "transparent", fg: "var(--success)", bd: "var(--success)" },
  warning: { bg: "transparent", fg: "#B07E4F", bd: "var(--warning)" },
  error: { bg: "transparent", fg: "var(--error)", bd: "var(--error)" },
};

/**
 * Claude Design Badge — 小さなピル。状態色は罫線 + 文字で(塗りはアクセントのみ)。
 */
export function Badge({ tone = "neutral", children, style }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em",
        padding: "0.25em 0.9em",
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: t.fg,
        background: t.bg,
        border: `1px solid ${t.bd}`,
        borderRadius: "var(--radius-full)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
