import React from "react";

/**
 * Claude Design Checkbox — 8px 角丸の箱、チェック時はテラコッタ。
 */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const value = isControlled ? checked : internal;
  const toggle = (e) => {
    if (!isControlled) setInternal(e.target.checked);
    if (onChange) onChange(e);
  };
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body)",
        color: "var(--text-primary)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={toggle}
        disabled={disabled}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
      />
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 20,
          height: 20,
          flexShrink: 0,
          borderRadius: 6,
          border: `1px solid ${value ? "var(--accent)" : "var(--ink-300)"}`,
          background: value ? "var(--accent)" : "var(--bg-primary)",
          color: "var(--ivory-50)",
          fontSize: "0.75rem",
          lineHeight: 1,
          transition: "background var(--duration-fast), border-color var(--duration-fast)",
        }}
      >
        {value ? "✓" : ""}
      </span>
      {label}
    </label>
  );
}
