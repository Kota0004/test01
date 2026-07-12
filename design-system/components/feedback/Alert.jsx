import React from "react";

const toneColor = {
  info: "var(--ink-500)",
  success: "var(--success)",
  warning: "var(--warning)",
  error: "var(--error)",
};

/**
 * Claude Design Alert — 全周 1px 罫線 + 状態色の ✻ ティック。
 * 色付き左ボーダーだけのカードは使わない(AI っぽさの排除)。
 */
export function Alert({ tone = "info", title, children, style }) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      style={{
        display: "flex",
        gap: 12,
        padding: "14px 18px",
        background: "var(--bg-primary)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <span aria-hidden="true" style={{ color: toneColor[tone] || toneColor.info, lineHeight: 1.7 }}>
        &#10035;
      </span>
      <div>
        {title && (
          <div style={{ fontWeight: 500, fontSize: "var(--text-body)", color: "var(--text-primary)" }}>{title}</div>
        )}
        <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", lineHeight: 1.7 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
