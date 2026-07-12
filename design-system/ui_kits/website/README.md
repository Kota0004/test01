# Website UI kit

`preview/index.html`(Kota0004/test01, branch `claude/design-system-plan-fvjx0o`)の React 再現。このシステムの見本ページ — 迷ったらこの見た目に合わせる。

## 構成

- `index.html` — ページ全体。DS コンポーネント(HeroEditorial / Marquee / EditorialList / DarkBand / StatBand / PullQuote / MegaFooter / Button / Eyebrow)を組み合わせ、リビール用 IntersectionObserver と紙の質感(grain)を含む
- `SiteChrome.jsx` — `SiteHeader`(sticky + blur — blur を使う唯一の場所)と `FigArt`(色面と活字の Fig. 01 グラフィック — イラストの代替)
- `Foundation.jsx` — `TypeSpecimen`(活字見本テーブル)と `ColorChips`(色票グリッド)

## ページ構造(上から)

1. SiteHeader(sticky)
2. Hero(7:5 グリッド + FigArt)+ モノスペースのメタ行
3. Marquee(46s)
4. Principles(EditorialList ×4)
5. DarkBand + StatBand
6. Foundation(TypeSpecimen + ColorChips)
7. PullQuote(全幅バンド)
8. CTA(左見出し + 右アクション)
9. MegaFooter(巨大ワードマーク)
