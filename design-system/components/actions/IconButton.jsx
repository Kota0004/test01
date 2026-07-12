import React, { useState } from "react";

/**
 * Claude Design IconButton — 円形。ユニコードグリフ(✻ → ×)を子として渡す。
 */
export function IconButton({ label, variant = "ghost", disabled = false, children, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        background: hover && !disabled ? "var(--bg-secondary)" : "transparent",
        color: "var(--text-primary)",
        fontFamily: "var(--font-body)",
        fontSize: "1.05rem",
        lineHeight: 1,
        border: variant === "outline" ? "1px solid var(--border)" : "none",
        borderRadius: "var(--radius-full)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--duration-fast) var(--ease-out-expo)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
