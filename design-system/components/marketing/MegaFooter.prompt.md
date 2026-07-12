大型フッター。ダーク地にタグライン + リンク 3 列 → 巨大セリフワードマーク → 罫線 + モノスペースのメタ行。

```jsx
<MegaFooter
  tagline={<>静けさを設計する、<br />デザインシステム。</>}
  columns={[
    { heading: "System", links: [{ label: "ファウンデーション" }, { label: "設計原則" }] },
    { heading: "Resources", links: [{ label: "ドキュメント" }, { label: "変更履歴" }] },
    { heading: "Elsewhere", links: [{ label: "GitHub" }, { label: "Figma" }] },
  ]}
  meta={["© 2026 Claude Design", "Set in Source Serif 4 & Inter", "Ivory · Ink · Terracotta"]}
/>
```
