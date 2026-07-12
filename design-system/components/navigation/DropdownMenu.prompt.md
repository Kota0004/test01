ドロップダウンメニュー。ピル型トリガー、メニューは罫線カード(影なし)。危険操作は `danger: true`。

```jsx
<DropdownMenu label="操作" items={[
  { value: "edit", label: "編集" },
  { value: "duplicate", label: "複製" },
  "---",
  { value: "delete", label: "削除", danger: true },
]} onSelect={handle} />
```
