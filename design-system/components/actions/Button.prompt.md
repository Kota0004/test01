ピル型ボタン。CTA には primary(テラコッタ — 1 画面に 1〜2 箇所まで)、並列アクションには secondary、控えめな誘導には quiet(下線リンク風)。

```jsx
<Button arrow>ドキュメントを見る</Button>
<Button variant="secondary">キャンセル</Button>
<Button variant="quiet">設計原則を読む</Button>
```

- `arrow` — hover で右に 3px 動く矢印(primary CTA の定番)
- `size="sm"` — ヘッダーナビ用のコンパクト版
- hover: primary は #C15F3C + translateY(-1px)、150ms
