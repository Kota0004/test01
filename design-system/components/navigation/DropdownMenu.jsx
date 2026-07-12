import React, { useEffect, useRef, useState } from "react";

/**
 * Claude Design DropdownMenu — 罫線カードのメニュー。150ms フェードのみ。
 */
export function DropdownMenu({ label, items = [], onSelect, align = "left", style }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return (
    <span ref={ref} style={{ position: "relative", display: "inline-block", fontFamily: "var(--font-body)", ...style }}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6em",
          padding: "0.6em 1.4em",
          background: open ? "var(--bg-secondary)" : "transparent",
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-small)",
          fontWeight: 500,
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-full)",
          cursor: "pointer",
          transition: "background var(--duration-fast)",
        }}
      >
        {label}
        <span aria-hidden="true" style={{ fontSize: "0.7rem", transform: open ? "rotate(-90deg)" : "rotate(90deg)", transition: "transform var(--duration-fast)" }}>&#8250;</span>
      </button>
      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: align === "left" ? 0 : "auto",
            right: align === "right" ? 0 : "auto",
            minWidth: 200,
            background: "var(--bg-primary)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            padding: 6,
            zIndex: 50,
          }}
        >
          {items.map((it, i) =>
            it === "---" ? (
              <div key={i} style={{ height: 1, background: "var(--border)", margin: "6px 4px" }}></div>
            ) : (
              <MenuItem
                key={it.value ?? i}
                danger={it.danger}
                onClick={() => {
                  setOpen(false);
                  if (onSelect) onSelect(it.value);
                }}
              >
                {it.label}
              </MenuItem>
            )
          )}
        </div>
      )}
    </span>
  );
}

function MenuItem({ danger, onClick, children }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "8px 12px",
        background: hover ? "var(--bg-secondary)" : "transparent",
        border: "none",
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-small)",
        color: danger ? "var(--error)" : "var(--text-primary)",
        cursor: "pointer",
        transition: "background var(--duration-fast)",
      }}
    >
      {children}
    </button>
  );
}
