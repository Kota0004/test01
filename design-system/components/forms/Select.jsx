import React, { useState } from "react";

/**
 * Claude Design Select — ネイティブ select を罫線スタイルで。矢印はユニコード。
 */
export function Select({ label, options = [], disabled = false, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-body)" }}>
      {label && (
        <span
          style={{
            display: "block",
            marginBottom: 8,
            fontSize: "var(--text-eyebrow)",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          {label}
        </span>
      )}
      <span style={{ position: "relative", display: "block" }}>
        <select
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            padding: "0.7em 2.6em 0.7em 1em",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--text-primary)",
            background: disabled ? "var(--bg-secondary)" : "var(--bg-primary)",
            border: `1px solid ${focus ? "var(--accent)" : "var(--border)"}`,
            borderRadius: "var(--radius-sm)",
            outline: "none",
            appearance: "none",
            WebkitAppearance: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
            transition: "border-color var(--duration-fast)",
            ...style,
          }}
          {...rest}
        >
          {options.map((o) =>
            typeof o === "string" ? (
              <option key={o} value={o}>{o}</option>
            ) : (
              <option key={o.value} value={o.value}>{o.label}</option>
            )
          )}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "1em",
            top: "50%",
            transform: "translateY(-50%) rotate(90deg)",
            fontSize: "0.8rem",
            color: "var(--ink-500)",
            pointerEvents: "none",
          }}
        >
          &#8250;
        </span>
      </span>
    </label>
  );
}
