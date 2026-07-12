/* Babel スクリプトとして読み込まれるため import は使わない — React はグローバル */

/**
 * Website kit — Foundation セクション(活字見本 + 色票)。preview/index.html 準拠。
 */
function TypeSpecimen() {
  const rows = [
    { cls: "2xl", sample: "永い余白", spec: "Display 2XL — clamp(48–92) / serif", fs: "var(--text-display-2xl)", lh: 1.05 },
    { cls: "xl", sample: "静けさの設計", spec: "Display XL — clamp(36–60) / serif", fs: "var(--text-display-xl)", lh: 1.2 },
    { cls: "h", sample: "見出しのための明朝体", spec: "Heading — 28 / serif 500", fs: "var(--text-heading)", lh: 1.2 },
  ];
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        background: "var(--bg-primary)",
        marginBottom: 56,
        overflow: "hidden",
      }}
    >
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
            padding: "30px clamp(20px, 3vw, 44px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: r.fs, lineHeight: r.lh }}>
            {r.sample}
          </span>
          <Spec>{r.spec}</Spec>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
          padding: "30px clamp(20px, 3vw, 44px)",
        }}
      >
        <span style={{ fontSize: "var(--text-body)", maxWidth: "34em", lineHeight: 1.8 }}>
          本文は 16px、行間は 1.8。和文の可読性を最優先に、ひらがなの多い文章でも息ができる組みにする。
        </span>
        <Spec>Body — 16 / sans 400 / lh 1.8</Spec>
      </div>
    </div>
  );
}

function Spec({ children }) {
  return (
    <span
      style={{
        flexShrink: 0,
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--ink-300)",
      }}
    >
      {children}
    </span>
  );
}

const SWATCHES = [
  ["Ivory 50", "#FAF9F5"], ["Ivory 100", "#F0EEE6"], ["Ivory 200", "#E8E6DC"],
  ["Ink 900", "#141413"], ["Ink 500", "#5E5D59"],
  ["Terracotta 500", "#D97757"], ["Terracotta 600", "#C15F3C"],
  ["Olive 500", "#788C5D"], ["Amber 500", "#D4A27F"], ["Clay 500", "#BF4D43"],
];

function ColorChips() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(118px, 1fr))", gap: 12 }}>
      {SWATCHES.map(([name, hex]) => (
        <Chip key={hex} name={name} hex={hex} />
      ))}
    </div>
  );
}

function Chip({ name, hex }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div
        style={{
          height: 140,
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border)",
          background: hex,
          transform: hover ? "translateY(-3px)" : "none",
          transition: "transform var(--duration-fast) var(--ease-out-expo)",
        }}
      ></div>
      <div style={{ marginTop: 10, fontSize: "0.78rem", fontWeight: 500 }}>{name}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em", color: "var(--ink-300)", textTransform: "uppercase" }}>
        {hex}
      </div>
    </div>
  );
}

Object.assign(window, { TypeSpecimen, ColorChips });
