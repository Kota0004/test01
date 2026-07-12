import React from "react";

/**
 * Claude Design Toast — インバース(暖色系の黒)の小さなカード。
 * 実配置は画面下部に fixed で。
 */
export function Toast({ tone = "info", children, onDismiss, style }) {
  const tickColor =
    tone === "success" ? "var(--success)" : tone === "error" ? "#D97066" : "var(--accent-on-inverse)";
  return (
    <div
      role="status"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 18px",
        background: "var(--bg-inverse-elevated)",
        color: "var(--text-inverse-primary)",
        border: "1px solid var(--border-inverse)",
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-small)",
        ...style,
      }}
    >
      <span aria-hidden="true" style={{ color: tickColor }}>&#10035;</span>
      <span>{children}</span>
      {onDismiss && (
        <button
          type="button"
          aria-label="閉じる"
          onClick={onDismiss}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-inverse-secondary)",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1,
            padding: "0 0 0 6px",
          }}
        >
          &times;
        </button>
      )}
    </div>
  );
}
