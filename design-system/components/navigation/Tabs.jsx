import React, { useState } from "react";

/**
 * Claude Design Tabs — 下線スタイル。アクティブはインクの下線、hover は 150ms。
 */
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const [internal, setInternal] = useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : internal;
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: 28,
        borderBottom: "1px solid var(--border)",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      {items.map((it) => {
        const isActive = it.value === active;
        return (
          <TabButton
            key={it.value}
            isActive={isActive}
            onClick={() => {
              if (value === undefined) setInternal(it.value);
              if (onChange) onChange(it.value);
            }}
          >
            {it.label}
          </TabButton>
        );
      })}
    </div>
  );
}

function TabButton({ isActive, onClick, children }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "none",
        border: "none",
        padding: "10px 0 12px",
        marginBottom: -1,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-small)",
        fontWeight: 500,
        color: isActive ? "var(--text-primary)" : hover ? "var(--text-primary)" : "var(--text-secondary)",
        borderBottom: `2px solid ${isActive ? "var(--ink-900)" : "transparent"}`,
        cursor: "pointer",
        transition: "color var(--duration-fast)",
      }}
    >
      {children}
    </button>
  );
}
