import React, { useState } from "react";

const labelStyle = {
  display: "block",
  marginBottom: 8,
  fontSize: "var(--text-eyebrow)",
  fontWeight: 500,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--text-secondary)",
};

/**
 * Claude Design Input — 1px 罫線、radius-sm、focus はテラコッタの枠。
 */
export function Input({ label, error, disabled = false, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-body)" }}>
      {label && <span style={labelStyle}>{label}</span>}
      <input
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          padding: "0.7em 1em",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body)",
          color: "var(--text-primary)",
          background: disabled ? "var(--bg-secondary)" : "var(--bg-primary)",
          border: `1px solid ${error ? "var(--error)" : focus ? "var(--accent)" : "var(--border)"}`,
          borderRadius: "var(--radius-sm)",
          outline: "none",
          opacity: disabled ? 0.6 : 1,
          transition: "border-color var(--duration-fast)",
          ...style,
        }}
        {...rest}
      />
      {error && (
        <span style={{ display: "block", marginTop: 6, fontSize: "var(--text-small)", color: "var(--error)" }}>
          {error}
        </span>
      )}
    </label>
  );
}
