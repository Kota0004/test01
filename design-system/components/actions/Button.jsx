import React, { useState } from "react";

/**
 * Claude Design Button — ピル型。primary はテラコッタ(1 画面 1〜2 箇所)、
 * secondary は罫線、quiet は Aesop 由来の下線リンク。
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  arrow = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pad = size === "sm" ? "0.6em 1.4em" : "0.85em 1.8em";

  if (variant === "quiet") {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5em",
          background: "none",
          border: "none",
          padding: "0 0 3px",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-small)",
          fontWeight: 500,
          color: hover && !disabled ? "var(--accent-hover)" : "var(--text-primary)",
          borderBottom: `1px solid ${hover && !disabled ? "var(--accent-hover)" : "var(--ink-300)"}`,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.45 : 1,
          transition: "color var(--duration-fast), border-color var(--duration-fast)",
          ...style,
        }}
        {...rest}
      >
        {children}
      </button>
    );
  }

  const isPrimary = variant === "primary";
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6em",
        padding: pad,
        background: isPrimary
          ? hover && !disabled ? "var(--accent-hover)" : "var(--accent)"
          : hover && !disabled ? "var(--bg-secondary)" : "transparent",
        color: isPrimary ? "var(--ivory-50)" : "var(--text-primary)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-small)",
        fontWeight: 500,
        letterSpacing: "0.02em",
        border: isPrimary ? "none" : "1px solid var(--border)",
        borderRadius: "var(--radius-full)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transform: hover && !disabled ? "translateY(-1px)" : "none",
        transition:
          "background var(--duration-fast) var(--ease-out-expo), transform var(--duration-fast) var(--ease-out-expo)",
        ...style,
      }}
      {...rest}
    >
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          style={{
            transition: "transform var(--duration-fast) var(--ease-out-expo)",
            transform: hover ? "translateX(3px)" : "none",
          }}
        >
          &rarr;
        </span>
      )}
    </button>
  );
}
