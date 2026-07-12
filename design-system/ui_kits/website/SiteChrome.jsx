/* Babel スクリプトとして読み込まれるため import は使わない — React はグローバル */
const { useState } = React;

/**
 * Website kit — SiteHeader(preview/index.html .site-header 準拠)
 * sticky + 92% 背景 + blur(10px)。ヘッダーは blur を使う唯一の場所。
 */
function SiteHeader({ links = [], cta }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "color-mix(in srgb, var(--bg-primary) 92%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-full)",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.35rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            textDecoration: "none",
            color: "var(--text-primary)",
          }}
        >
          Claude Design<sup style={{ fontSize: "0.5em", color: "var(--accent)", marginLeft: 2 }}>&#10035;</sup>
        </a>
        <nav aria-label="グローバルナビゲーション" style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 3vw, 40px)" }}>
          {links.map((l, i) => (
            <NavLink key={i} href={l.href}>{l.label}</NavLink>
          ))}
          {cta}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href = "#", children }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      style={{
        fontSize: "var(--text-small)",
        fontWeight: 500,
        color: hover ? "var(--text-primary)" : "var(--text-secondary)",
        textDecoration: "none",
        transition: "color var(--duration-fast)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}

/**
 * FigArt — 色面と活字による独自グラフィック(Fig. 01)。
 * イラストや写真の代わりに使う、このブランド唯一の「絵」の作り方。
 */
function FigArt({ figNo = "Fig. 01", caption = "Palette & Type in use" }) {
  return (
    <figure aria-hidden="true" style={{ margin: 0, userSelect: "none" }}>
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 4.6",
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "9% 30% 34% 9%",
            background: "var(--terracotta-500)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(5rem, 11vw, 9rem)",
              fontWeight: 500,
              color: "var(--ivory-50)",
              transform: "translateY(-2%)",
            }}
          >
            あ
          </span>
        </div>
        <div style={{ position: "absolute", inset: "13% 12% 66% 76%", background: "var(--olive-500)", borderRadius: "var(--radius-md)" }}></div>
        <div
          style={{
            position: "absolute",
            inset: "44% 9% 9% 42%",
            background: "var(--ink-900)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            padding: "7%",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "var(--ivory-100)",
              lineHeight: 1,
            }}
          >
            Aa
          </span>
        </div>
        <div style={{ position: "absolute", inset: "70% 72% 12% 12%", background: "var(--amber-500)", borderRadius: "var(--radius-md)" }}></div>
      </div>
      <figcaption
        style={{
          marginTop: 14,
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--ink-300)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{figNo}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

Object.assign(window, { SiteHeader, FigArt });
