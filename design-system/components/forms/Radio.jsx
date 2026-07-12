import React from "react";

/**
 * Claude Design Radio — 円形、選択時はテラコッタのドット。
 */
export function Radio({ label, name, value, checked, defaultChecked, onChange, disabled = false, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
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
        type="radio"
        name={name}
        value={value}
        checked={isControlled ? checked : undefined}
        defaultChecked={isControlled ? undefined : defaultChecked}
        onChange={(e) => {
          if (!isControlled) setInternal(e.target.checked);
          if (onChange) onChange(e);
        }}
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
          borderRadius: "var(--radius-full)",
          border: `1px solid ${isOn ? "var(--accent)" : "var(--ink-300)"}`,
          background: "var(--bg-primary)",
          transition: "border-color var(--duration-fast)",
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "var(--radius-full)",
            background: isOn ? "var(--accent)" : "transparent",
            transition: "background var(--duration-fast)",
          }}
        ></span>
      </span>
      {label}
    </label>
  );
}
