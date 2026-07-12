import React from "react";

/**
 * Claude Design Switch — ピル型トグル。ON はテラコッタ。
 */
export function Switch({ label, checked, defaultChecked, onChange, disabled = false, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (!isControlled) setInternal(next);
    if (onChange) onChange(next);
  };
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body)",
        color: "var(--text-primary)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        ...style,
      }}
    >
      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        disabled={disabled}
        onClick={toggle}
        style={{
          position: "relative",
          width: 44,
          height: 24,
          flexShrink: 0,
          padding: 0,
          border: "1px solid " + (isOn ? "var(--accent)" : "var(--border)"),
          borderRadius: "var(--radius-full)",
          background: isOn ? "var(--accent)" : "var(--ivory-100)",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "background var(--duration-fast), border-color var(--duration-fast)",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: isOn ? 22 : 2,
            width: 18,
            height: 18,
            borderRadius: "var(--radius-full)",
            background: "var(--ivory-50)",
            border: "1px solid var(--border)",
            boxSizing: "border-box",
            transition: "left var(--duration-fast) var(--ease-out-expo)",
          }}
        ></span>
      </button>
      {label}
    </label>
  );
}
