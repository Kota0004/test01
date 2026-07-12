import React from "react";

/**
 * Claude Design Avatar — 円形、イニシャルはセリフ体。画像 src も可。
 */
export function Avatar({ name = "", src, size = 40, style }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <span
      role="img"
      aria-label={name}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: "var(--radius-full)",
        border: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: size * 0.42,
        overflow: "hidden",
        userSelect: "none",
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initial
      )}
    </span>
  );
}
