import React from "react";

/**
 * Claude Design Dialog — radius-lg のパネル + 薄いインクのオーバーレイ。
 */
export function Dialog({ open, title, children, onClose, footer, width = 480 }) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === "string" ? title : undefined}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(20, 20, 19, 0.4)",
        padding: 24,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: width,
          background: "var(--bg-primary)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          fontFamily: "var(--font-body)",
          color: "var(--text-primary)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "20px 24px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 500 }}>
            {title}
          </h2>
          {onClose && (
            <button
              type="button"
              aria-label="閉じる"
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.2rem",
                lineHeight: 1,
                color: "var(--text-secondary)",
                cursor: "pointer",
                padding: 4,
              }}
            >
              &times;
            </button>
          )}
        </div>
        <div style={{ padding: "20px 24px", fontSize: "var(--text-body)", lineHeight: 1.8 }}>{children}</div>
        {footer && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 12,
              padding: "16px 24px",
              borderTop: "1px solid var(--border)",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
