モーダル。radius 16px、ヘッダー/フッターは 1px 罫線区切り、見出しはセリフ体。

```jsx
<Dialog open={open} title="確認" onClose={() => setOpen(false)}
  footer={<><Button variant="secondary" onClick={close}>キャンセル</Button><Button onClick={save}>保存する</Button></>}>
  この変更を保存しますか?
</Dialog>
```
