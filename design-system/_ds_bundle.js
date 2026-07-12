/* @ds-bundle: {"format":4,"namespace":"ClaudeDesignSystem_2580a7","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Skeleton","sourcePath":"components/display/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/display/Spinner.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CaseCard","sourcePath":"components/marketing/CaseCard.jsx"},{"name":"DarkBand","sourcePath":"components/marketing/DarkBand.jsx"},{"name":"EditorialList","sourcePath":"components/marketing/EditorialList.jsx"},{"name":"Eyebrow","sourcePath":"components/marketing/Eyebrow.jsx"},{"name":"HeroEditorial","sourcePath":"components/marketing/HeroEditorial.jsx"},{"name":"Marquee","sourcePath":"components/marketing/Marquee.jsx"},{"name":"MegaFooter","sourcePath":"components/marketing/MegaFooter.jsx"},{"name":"PullQuote","sourcePath":"components/marketing/PullQuote.jsx"},{"name":"StatBand","sourcePath":"components/marketing/StatBand.jsx"},{"name":"DropdownMenu","sourcePath":"components/navigation/DropdownMenu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"03908da117a5","components/actions/IconButton.jsx":"fe9854ec3e1c","components/display/Avatar.jsx":"fa7c9a472fe1","components/display/Badge.jsx":"407404c1f27e","components/display/Card.jsx":"24b012cd95b7","components/display/Skeleton.jsx":"e40548c66e80","components/display/Spinner.jsx":"727a678dbcec","components/feedback/Alert.jsx":"53728a2c6f09","components/feedback/Dialog.jsx":"c24da7ded5db","components/feedback/Toast.jsx":"639ba13c766f","components/feedback/Tooltip.jsx":"3c52a868b7d1","components/forms/Checkbox.jsx":"83dad1929472","components/forms/Input.jsx":"b51a3ea38fcb","components/forms/Radio.jsx":"ed0803e7b13b","components/forms/Select.jsx":"be0b6bc43f27","components/forms/Switch.jsx":"1cfc7ccbc216","components/forms/Textarea.jsx":"efaa3c95c8d4","components/marketing/CaseCard.jsx":"e7f4aa3a1af0","components/marketing/DarkBand.jsx":"9d322cdc06e6","components/marketing/EditorialList.jsx":"a480f717e93a","components/marketing/Eyebrow.jsx":"b2071a743e70","components/marketing/HeroEditorial.jsx":"864619e5af2c","components/marketing/Marquee.jsx":"b96a238aac18","components/marketing/MegaFooter.jsx":"d3f4458de684","components/marketing/PullQuote.jsx":"e85e12c22671","components/marketing/StatBand.jsx":"6b13a3852e29","components/navigation/DropdownMenu.jsx":"dabe4ec6188a","components/navigation/Tabs.jsx":"b596dcd74955","ui_kits/website/Foundation.jsx":"5eb9ce5b223f","ui_kits/website/SiteChrome.jsx":"edda10c191a6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClaudeDesignSystem_2580a7 = window.ClaudeDesignSystem_2580a7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Claude Design Button — ピル型。primary はテラコッタ(1 画面 1〜2 箇所)、
 * secondary は罫線、quiet は Aesop 由来の下線リンク。
 */
function Button({
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
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      disabled: disabled,
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
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
        ...style
      }
    }, rest), children);
  }
  const isPrimary = variant === "primary";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6em",
      padding: pad,
      background: isPrimary ? hover && !disabled ? "var(--accent-hover)" : "var(--accent)" : hover && !disabled ? "var(--bg-secondary)" : "transparent",
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
      transition: "background var(--duration-fast) var(--ease-out-expo), transform var(--duration-fast) var(--ease-out-expo)",
      ...style
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transition: "transform var(--duration-fast) var(--ease-out-expo)",
      transform: hover ? "translateX(3px)" : "none"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Claude Design IconButton — 円形。ユニコードグリフ(✻ → ×)を子として渡す。
 */
function IconButton({
  label,
  variant = "ghost",
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/**
 * Claude Design Avatar — 円形、イニシャルはセリフ体。画像 src も可。
 */
function Avatar({
  name = "",
  src,
  size = 40,
  style
}) {
  const initial = name.trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    style: {
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
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: "var(--bg-secondary)",
    fg: "var(--text-secondary)",
    bd: "var(--border)"
  },
  accent: {
    bg: "var(--terracotta-500)",
    fg: "var(--ivory-50)",
    bd: "transparent"
  },
  success: {
    bg: "transparent",
    fg: "var(--success)",
    bd: "var(--success)"
  },
  warning: {
    bg: "transparent",
    fg: "#B07E4F",
    bd: "var(--warning)"
  },
  error: {
    bg: "transparent",
    fg: "var(--error)",
    bd: "var(--error)"
  }
};

/**
 * Claude Design Badge — 小さなピル。状態色は罫線 + 文字で(塗りはアクセントのみ)。
 */
function Badge({
  tone = "neutral",
  children,
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4em",
      padding: "0.25em 0.9em",
      fontFamily: "var(--font-body)",
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.04em",
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-full)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Claude Design Card — 1px 罫線 + radius 12。framed は「額装」(極小の暖色影付き)。
 */
function Card({
  variant = "outline",
  padding = 24,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: variant === "tinted" ? "var(--bg-secondary)" : "var(--bg-primary)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      boxShadow: variant === "framed" ? "var(--shadow-card)" : "none",
      padding,
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Skeleton.jsx
try { (() => {
/**
 * Claude Design Skeleton — ivory-100 の面が静かに明滅。
 */
function Skeleton({
  width = "100%",
  height = 16,
  radius = "var(--radius-sm)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes cds-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }`), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width,
      height,
      borderRadius: radius,
      background: "var(--ivory-100)",
      animation: "cds-pulse 1.6s var(--ease-out-expo) infinite"
    }
  }));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/display/Spinner.jsx
try { (() => {
/**
 * Claude Design Spinner — 細い罫線リング。上辺だけテラコッタ。
 */
function Spinner({
  size = 24,
  label = "読み込み中",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": label,
    style: {
      display: "inline-flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes cds-spin { to { transform: rotate(360deg); } }`), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      border: "2px solid var(--border)",
      borderTopColor: "var(--accent)",
      animation: "cds-spin 800ms linear infinite",
      boxSizing: "border-box"
    }
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const toneColor = {
  info: "var(--ink-500)",
  success: "var(--success)",
  warning: "var(--warning)",
  error: "var(--error)"
};

/**
 * Claude Design Alert — 全周 1px 罫線 + 状態色の ✻ ティック。
 * 色付き左ボーダーだけのカードは使わない(AI っぽさの排除)。
 */
function Alert({
  tone = "info",
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: tone === "error" ? "alert" : "status",
    style: {
      display: "flex",
      gap: 12,
      padding: "14px 18px",
      background: "var(--bg-primary)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: toneColor[tone] || toneColor.info,
      lineHeight: 1.7
    }
  }, "\u2733"), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: "var(--text-body)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      lineHeight: 1.7
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Claude Design Dialog — radius-lg のパネル + 薄いインクのオーバーレイ。
 */
function Dialog({
  open,
  title,
  children,
  onClose,
  footer,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(20, 20, 19, 0.4)",
      padding: 24
    },
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--bg-primary)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "20px 24px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "1.3rem",
      fontWeight: 500
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u9589\u3058\u308B",
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      fontSize: "1.2rem",
      lineHeight: 1,
      color: "var(--text-secondary)",
      cursor: "pointer",
      padding: 4
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      fontSize: "var(--text-body)",
      lineHeight: 1.8
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      padding: "16px 24px",
      borderTop: "1px solid var(--border)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Claude Design Toast — インバース(暖色系の黒)の小さなカード。
 * 実配置は画面下部に fixed で。
 */
function Toast({
  tone = "info",
  children,
  onDismiss,
  style
}) {
  const tickColor = tone === "success" ? "var(--success)" : tone === "error" ? "#D97066" : "var(--accent-on-inverse)";
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 18px",
      background: "var(--bg-inverse-elevated)",
      color: "var(--text-inverse-primary)",
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-small)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: tickColor
    }
  }, "\u2733"), /*#__PURE__*/React.createElement("span", null, children), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u9589\u3058\u308B",
    onClick: onDismiss,
    style: {
      background: "none",
      border: "none",
      color: "var(--text-inverse-secondary)",
      cursor: "pointer",
      fontSize: "1rem",
      lineHeight: 1,
      padding: "0 0 0 6px"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Claude Design Tooltip — インクの小ラベル。hover / focus で 150ms フェード。
 */
function Tooltip({
  label,
  side = "top",
  children
}) {
  const [open, setOpen] = useState(false);
  const pos = side === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      padding: "5px 12px",
      background: "var(--ink-900)",
      color: "var(--ivory-50)",
      fontFamily: "var(--font-body)",
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-sm)",
      opacity: open ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--duration-fast) var(--ease-out-expo)",
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Claude Design Checkbox — 8px 角丸の箱、チェック時はテラコッタ。
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const value = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    if (onChange) onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: value,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
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
      transition: "background var(--duration-fast), border-color var(--duration-fast)"
    }
  }, value ? "\u2713" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const labelStyle = {
  display: "block",
  marginBottom: 8,
  fontSize: "var(--text-eyebrow)",
  fontWeight: 500,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--text-secondary)"
};

/**
 * Claude Design Input — 1px 罫線、radius-sm、focus はテラコッタの枠。
 */
function Input({
  label,
  error,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontSize: "var(--text-small)",
      color: "var(--error)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Claude Design Radio — 円形、選択時はテラコッタのドット。
 */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      if (onChange) onChange(e);
    },
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      border: `1px solid ${isOn ? "var(--accent)" : "var(--ink-300)"}`,
      background: "var(--bg-primary)",
      transition: "border-color var(--duration-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-full)",
      background: isOn ? "var(--accent)" : "transparent",
      transition: "background var(--duration-fast)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Claude Design Select — ネイティブ select を罫線スタイルで。矢印はユニコード。
 */
function Select({
  label,
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 8,
      fontSize: "var(--text-eyebrow)",
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "1em",
      top: "50%",
      transform: "translateY(-50%) rotate(90deg)",
      fontSize: "0.8rem",
      color: "var(--ink-500)",
      pointerEvents: "none"
    }
  }, "\u203A")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Claude Design Switch — ピル型トグル。ON はテラコッタ。
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (!isControlled) setInternal(next);
    if (onChange) onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": isOn,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: "relative",
      width: 44,
      height: 24,
      flexShrink: 0,
      padding: 0,
      border: "1px solid " + (isOn ? "var(--accent)" : "var(--border)"),
      borderRadius: "var(--radius-full)",
      background: isOn ? "var(--accent)" : "var(--ivory-100)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast), border-color var(--duration-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: isOn ? 22 : 2,
      width: 18,
      height: 18,
      borderRadius: "var(--radius-full)",
      background: "var(--ivory-50)",
      border: "1px solid var(--border)",
      boxSizing: "border-box",
      transition: "left var(--duration-fast) var(--ease-out-expo)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Claude Design Textarea — Input と同じ罫線ルール。
 */
function Textarea({
  label,
  error,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 8,
      fontSize: "var(--text-eyebrow)",
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      padding: "0.7em 1em",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      lineHeight: 1.8,
      color: "var(--text-primary)",
      background: disabled ? "var(--bg-secondary)" : "var(--bg-primary)",
      border: `1px solid ${error ? "var(--error)" : focus ? "var(--accent)" : "var(--border)"}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      resize: "vertical",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color var(--duration-fast)",
      ...style
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontSize: "var(--text-small)",
      color: "var(--error)"
    }
  }, error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CaseCard.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Claude Design CaseCard — 事例/記事カード。画像は額装(framed)、
 * hover は画像がわずかにズーム(1.03)+ タイトルがアクセント色に。
 */
function CaseCard({
  image,
  imageAlt = "",
  eyebrow,
  title,
  description,
  href = "#",
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border)",
      background: "var(--bg-secondary)",
      aspectRatio: "4 / 3",
      marginBottom: 20
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.03)" : "scale(1)",
      transition: "transform 400ms var(--ease-out-expo)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: "2.4rem",
      color: "var(--ink-300)",
      transform: hover ? "scale(1.03)" : "scale(1)",
      transition: "transform 400ms var(--ease-out-expo)"
    }
  }, "\u2733")), eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-display)",
      fontSize: "1.35rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: hover ? "var(--accent-hover)" : "var(--text-primary)",
      transition: "color var(--duration-fast)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      lineHeight: 1.8
    }
  }, description));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/EditorialList.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Claude Design EditorialList — 番号付き大型リスト(Pentagram 由来)。
 * 罫線区切り、hover で bg-secondary。
 */
function EditorialList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderTop: "1px solid var(--border)",
      borderBottom: i === items.length - 1 ? "1px solid var(--border)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Row, {
    item: it,
    index: i
  }))));
}
function Row({
  item,
  index
}) {
  const [hover, setHover] = useState(false);
  const clickable = !!(item.href || item.onClick);
  const Tag = item.href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, {
    href: item.href,
    onClick: item.onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "110px minmax(0, 5fr) minmax(0, 6fr) 48px",
      gap: "clamp(16px, 3vw, 48px)",
      alignItems: "baseline",
      padding: "40px 0",
      textDecoration: "none",
      color: "inherit",
      cursor: clickable ? "pointer" : "default",
      background: hover && clickable ? "var(--bg-secondary)" : "transparent",
      transition: "background var(--duration-base) var(--ease-out-expo)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "2.6rem",
      fontWeight: 400,
      color: "var(--ink-300)",
      lineHeight: 1
    }
  }, item.no ?? String(index + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-heading)",
      fontWeight: 500,
      lineHeight: 1.4
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      lineHeight: 1.8
    }
  }, item.description), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.4rem",
      color: hover && clickable ? "var(--accent)" : "var(--ink-300)",
      justifySelf: "end",
      transform: hover && clickable ? "translateX(6px)" : "none",
      transition: "transform var(--duration-fast) var(--ease-out-expo), color var(--duration-fast)"
    }
  }, clickable ? "\u2192" : ""));
}
Object.assign(__ds_scope, { EditorialList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/EditorialList.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Eyebrow.jsx
try { (() => {
/**
 * Claude Design Eyebrow — 見出しの上の小さな大文字ラベル(Pentagram 由来)。
 * ✻ ティックはアクセント色。
 */
function Eyebrow({
  tick = true,
  inverse = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)",
      ...style
    }
  }, tick && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: inverse ? "var(--accent-on-inverse)" : "var(--accent)",
      marginRight: "0.6em"
    }
  }, "\u2733"), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/DarkBand.jsx
try { (() => {
/**
 * Claude Design DarkBand — ページに緩急を作るダークセクション(Mercury / Oura 由来)。
 * 背景は「黒」ではなく暖色系の #141413。
 */
function DarkBand({
  eyebrow,
  title,
  lead,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-inverse)",
      color: "var(--text-inverse-primary)",
      padding: "var(--space-section-lg) clamp(20px, 4vw, 48px)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-full)",
      margin: "0 auto"
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    inverse: true
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-xl)",
      fontWeight: 500,
      lineHeight: 1.25,
      margin: "20px 0 16px",
      maxWidth: "15em"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-inverse-secondary)",
      maxWidth: "36em",
      lineHeight: 1.8
    }
  }, lead), children));
}
Object.assign(__ds_scope, { DarkBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/DarkBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HeroEditorial.jsx
try { (() => {
/**
 * Claude Design HeroEditorial — 左寄せのエディトリアルヒーロー(Mercury / Polestar 由来)。
 * 7:5 グリッド。右カラムには fig(色面と活字のグラフィック)などを children で。
 */
function HeroEditorial({
  eyebrow,
  title,
  subline,
  lead,
  actions,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-section-sm) 0 var(--space-section-md)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: children ? "minmax(0, 7fr) minmax(0, 5fr)" : "minmax(0, 1fr)",
      gap: "clamp(40px, 6vw, 96px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-2xl)",
      fontWeight: 500,
      lineHeight: 1.14,
      letterSpacing: "0.01em",
      margin: "28px 0 12px"
    }
  }, title), subline && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
      color: "var(--accent-hover)",
      margin: "0 0 28px"
    }
  }, subline), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "34em",
      color: "var(--text-secondary)",
      margin: "0 0 40px",
      lineHeight: 1.8
    }
  }, lead), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32,
      flexWrap: "wrap"
    }
  }, actions)), children));
}
Object.assign(__ds_scope, { HeroEditorial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HeroEditorial.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Marquee.jsx
try { (() => {
/**
 * Claude Design Marquee — 低速テキストループ(mymind 由来)。上品に、46s。
 * prefers-reduced-motion で停止。
 */
function Marquee({
  words = [],
  duration = 46,
  style
}) {
  const seq = /*#__PURE__*/React.createElement(React.Fragment, null, words.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 1.4em",
      whiteSpace: "nowrap"
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)"
    }
  }, "\u2733"))));
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--bg-secondary)",
      overflow: "hidden",
      padding: "22px 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes cds-marquee { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .cds-marquee-track { animation: none !important; } }
      `), /*#__PURE__*/React.createElement("div", {
    className: "cds-marquee-track",
    style: {
      display: "flex",
      alignItems: "center",
      width: "max-content",
      fontFamily: "var(--font-display)",
      fontSize: "1.2rem",
      fontWeight: 500,
      color: "var(--text-secondary)",
      animation: `cds-marquee ${duration}s linear infinite`
    }
  }, seq, seq));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/marketing/MegaFooter.jsx
try { (() => {
/**
 * Claude Design MegaFooter — preview/index.html .mega-footer 準拠。
 * ダーク地 + タグライン/リンク列 + 巨大セリフワードマーク + モノスペースのメタ行。
 */
function MegaFooter({
  tagline,
  columns = [],
  wordmark = "Claude Design",
  meta = [],
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--bg-inverse)",
      color: "var(--text-inverse-primary)",
      paddingTop: "var(--space-section-sm)",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-full)",
      margin: "0 auto",
      padding: "0 clamp(20px, 4vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 40,
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "1.3rem",
      fontWeight: 500,
      lineHeight: 1.6,
      maxWidth: "16em"
    }
  }, tagline), columns.map((col, i) => /*#__PURE__*/React.createElement("nav", {
    key: i,
    "aria-label": typeof col.heading === "string" ? col.heading : undefined
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 20px",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--text-inverse-secondary)"
    }
  }, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(FooterLink, {
    href: l.href
  }, l.label))))))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(3.4rem, 11.5vw, 10.5rem)",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 0.96,
      whiteSpace: "nowrap",
      opacity: 0.96,
      marginBottom: "-0.14em"
    }
  }, wordmark), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
      borderTop: "1px solid var(--border-inverse)",
      padding: "22px 0 26px",
      fontFamily: "var(--font-mono)",
      fontSize: "0.7rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-inverse-secondary)"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m)))));
}
function FooterLink({
  href = "#",
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-inverse-primary)",
      textDecoration: "none",
      borderBottom: `1px solid ${hover ? "var(--accent-on-inverse)" : "transparent"}`,
      transition: "border-color var(--duration-fast)"
    }
  }, children);
}
Object.assign(__ds_scope, { MegaFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/MegaFooter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PullQuote.jsx
try { (() => {
/**
 * Claude Design PullQuote — 中央寄せの引用バンド(preview/index.html .pull-quote 準拠)。
 * bg-secondary + 上下 1px 罫線、引用符ではなく ✻ を上に。
 */
function PullQuote({
  quote,
  attribution,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: "var(--space-section-lg)",
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-full)",
      margin: "0 auto",
      padding: "0 clamp(20px, 4vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.5rem",
      color: "var(--accent)",
      display: "block",
      marginBottom: 32
    }
  }, "\u2733"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "0 auto",
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
      fontWeight: 500,
      lineHeight: 1.5,
      maxWidth: "24em",
      color: "var(--text-primary)"
    }
  }, quote), attribution && /*#__PURE__*/React.createElement("cite", {
    style: {
      display: "block",
      marginTop: 36,
      fontFamily: "var(--font-mono)",
      fontStyle: "normal",
      fontSize: "0.72rem",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, attribution)));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBand.jsx
try { (() => {
/**
 * Claude Design StatBand — セリフの大数字(Oura 由来)。罫線グリッド、インバース前提。
 */
function StatBand({
  stats = [],
  inverse = true,
  style
}) {
  const border = inverse ? "var(--border-inverse)" : "var(--border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`,
      marginTop: 88,
      borderTop: `1px solid ${border}`,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "36px clamp(16px, 2.5vw, 40px) 8px 0",
      paddingLeft: i % Math.min(stats.length, 4) === 0 ? 0 : "clamp(16px, 2.5vw, 40px)",
      borderRight: i === stats.length - 1 ? "none" : `1px solid ${border}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-stat)",
      fontWeight: 500,
      lineHeight: 1.1,
      fontVariantNumeric: "lining-nums",
      color: inverse ? "var(--text-inverse-primary)" : "var(--text-primary)"
    }
  }, s.value, s.accent && /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "normal",
      color: inverse ? "var(--accent-on-inverse)" : "var(--accent)"
    }
  }, s.accent)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 10,
      fontSize: "var(--text-small)",
      color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)"
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DropdownMenu.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
/**
 * Claude Design DropdownMenu — 罫線カードのメニュー。150ms フェードのみ。
 */
function DropdownMenu({
  label,
  items = [],
  onSelect,
  align = "left",
  style
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: "relative",
      display: "inline-block",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-haspopup": "menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
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
      transition: "background var(--duration-fast)"
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "0.7rem",
      transform: open ? "rotate(-90deg)" : "rotate(90deg)",
      transition: "transform var(--duration-fast)"
    }
  }, "\u203A")), open && /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      left: align === "left" ? 0 : "auto",
      right: align === "right" ? 0 : "auto",
      minWidth: 200,
      background: "var(--bg-primary)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      padding: 6,
      zIndex: 50
    }
  }, items.map((it, i) => it === "---" ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: "var(--border)",
      margin: "6px 4px"
    }
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    key: it.value ?? i,
    danger: it.danger,
    onClick: () => {
      setOpen(false);
      if (onSelect) onSelect(it.value);
    }
  }, it.label))));
}
function MenuItem({
  danger,
  onClick,
  children
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitem",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      transition: "background var(--duration-fast)"
    }
  }, children);
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Claude Design Tabs — 下線スタイル。アクティブはインクの下線、hover は 150ms。
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : internal;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 28,
      borderBottom: "1px solid var(--border)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, items.map(it => {
    const isActive = it.value === active;
    return /*#__PURE__*/React.createElement(TabButton, {
      key: it.value,
      isActive: isActive,
      onClick: () => {
        if (value === undefined) setInternal(it.value);
        if (onChange) onChange(it.value);
      }
    }, it.label);
  }));
}
function TabButton({
  isActive,
  onClick,
  children
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": isActive,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      transition: "color var(--duration-fast)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Foundation.jsx
try { (() => {
/* Babel スクリプトとして読み込まれるため import は使わない — React はグローバル */

/**
 * Website kit — Foundation セクション(活字見本 + 色票)。preview/index.html 準拠。
 */
function TypeSpecimen() {
  const rows = [{
    cls: "2xl",
    sample: "永い余白",
    spec: "Display 2XL — clamp(48–92) / serif",
    fs: "var(--text-display-2xl)",
    lh: 1.05
  }, {
    cls: "xl",
    sample: "静けさの設計",
    spec: "Display XL — clamp(36–60) / serif",
    fs: "var(--text-display-xl)",
    lh: 1.2
  }, {
    cls: "h",
    sample: "見出しのための明朝体",
    spec: "Heading — 28 / serif 500",
    fs: "var(--text-heading)",
    lh: 1.2
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      background: "var(--bg-primary)",
      marginBottom: 56,
      overflow: "hidden"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 24,
      padding: "30px clamp(20px, 3vw, 44px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: r.fs,
      lineHeight: r.lh
    }
  }, r.sample), /*#__PURE__*/React.createElement(Spec, null, r.spec))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 24,
      padding: "30px clamp(20px, 3vw, 44px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body)",
      maxWidth: "34em",
      lineHeight: 1.8
    }
  }, "\u672C\u6587\u306F 16px\u3001\u884C\u9593\u306F 1.8\u3002\u548C\u6587\u306E\u53EF\u8AAD\u6027\u3092\u6700\u512A\u5148\u306B\u3001\u3072\u3089\u304C\u306A\u306E\u591A\u3044\u6587\u7AE0\u3067\u3082\u606F\u304C\u3067\u304D\u308B\u7D44\u307F\u306B\u3059\u308B\u3002"), /*#__PURE__*/React.createElement(Spec, null, "Body \u2014 16 / sans 400 / lh 1.8")));
}
function Spec({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--ink-300)"
    }
  }, children);
}
const SWATCHES = [["Ivory 50", "#FAF9F5"], ["Ivory 100", "#F0EEE6"], ["Ivory 200", "#E8E6DC"], ["Ink 900", "#141413"], ["Ink 500", "#5E5D59"], ["Terracotta 500", "#D97757"], ["Terracotta 600", "#C15F3C"], ["Olive 500", "#788C5D"], ["Amber 500", "#D4A27F"], ["Clay 500", "#BF4D43"]];
function ColorChips() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(118px, 1fr))",
      gap: 12
    }
  }, SWATCHES.map(([name, hex]) => /*#__PURE__*/React.createElement(Chip, {
    key: hex,
    name: name,
    hex: hex
  })));
}
function Chip({
  name,
  hex
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border)",
      background: hex,
      transform: hover ? "translateY(-3px)" : "none",
      transition: "transform var(--duration-fast) var(--ease-out-expo)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: "0.78rem",
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.7rem",
      letterSpacing: "0.06em",
      color: "var(--ink-300)",
      textTransform: "uppercase"
    }
  }, hex));
}
Object.assign(window, {
  TypeSpecimen,
  ColorChips
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Foundation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Babel スクリプトとして読み込まれるため import は使わない — React はグローバル */
const {
  useState
} = React;

/**
 * Website kit — SiteHeader(preview/index.html .site-header 準拠)
 * sticky + 92% 背景 + blur(10px)。ヘッダーは blur を使う唯一の場所。
 */
function SiteHeader({
  links = [],
  cta
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "color-mix(in srgb, var(--bg-primary) 92%, transparent)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-full)",
      margin: "0 auto",
      padding: "0 clamp(20px, 4vw, 48px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.35rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      textDecoration: "none",
      color: "var(--text-primary)"
    }
  }, "Claude Design", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: "0.5em",
      color: "var(--accent)",
      marginLeft: 2
    }
  }, "\u2733")), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "\u30B0\u30ED\u30FC\u30D0\u30EB\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(20px, 3vw, 40px)"
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(NavLink, {
    key: i,
    href: l.href
  }, l.label)), cta)));
}
function NavLink({
  href = "#",
  children
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: "var(--text-small)",
      fontWeight: 500,
      color: hover ? "var(--text-primary)" : "var(--text-secondary)",
      textDecoration: "none",
      transition: "color var(--duration-fast)"
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}

/**
 * FigArt — 色面と活字による独自グラフィック(Fig. 01)。
 * イラストや写真の代わりに使う、このブランド唯一の「絵」の作り方。
 */
function FigArt({
  figNo = "Fig. 01",
  caption = "Palette & Type in use"
}) {
  return /*#__PURE__*/React.createElement("figure", {
    "aria-hidden": "true",
    style: {
      margin: 0,
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 4.6",
      background: "var(--bg-secondary)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "9% 30% 34% 9%",
      background: "var(--terracotta-500)",
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(5rem, 11vw, 9rem)",
      fontWeight: 500,
      color: "var(--ivory-50)",
      transform: "translateY(-2%)"
    }
  }, "\u3042")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "13% 12% 66% 76%",
      background: "var(--olive-500)",
      borderRadius: "var(--radius-md)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "44% 9% 9% 42%",
      background: "var(--ink-900)",
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      padding: "7%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
      color: "var(--ivory-100)",
      lineHeight: 1
    }
  }, "Aa")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "70% 72% 12% 12%",
      background: "var(--amber-500)",
      borderRadius: "var(--radius-md)"
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-300)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, figNo), /*#__PURE__*/React.createElement("span", null, caption)));
}
Object.assign(window, {
  SiteHeader,
  FigArt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.DarkBand = __ds_scope.DarkBand;

__ds_ns.EditorialList = __ds_scope.EditorialList;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.HeroEditorial = __ds_scope.HeroEditorial;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.MegaFooter = __ds_scope.MegaFooter;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.StatBand = __ds_scope.StatBand;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
