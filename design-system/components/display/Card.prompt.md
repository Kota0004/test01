カード。1px 罫線 + 12px 角丸、影は使わない(framed だけ 0 2px 8px rgba(20,20,19,.06) で額装)。

```jsx
<Card>
  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>見出し</h3>
  <p style={{ color: "var(--text-secondary)" }}>本文。</p>
</Card>
<Card variant="framed" padding={0}><img src="…" /></Card>
```
