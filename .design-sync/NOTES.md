# design-sync NOTES

- 2026-07-11: 初回 /design-sync 実行時、リポジトリにはコンポーネントライブラリが未実装だった(プラン + 静的 HTML モック 3 枚のみ)。
- claude.ai/design の「Set up your design system」フォーム経由で、既にプロジェクト `Claude Design System`(2580a782-761d-415c-acaa-7e1f34e2e07c)が生成済みであることを発見(コンポーネント 27 種 + ガイドライン 15 枚 + トークン)。
- ユーザーの選択: 生成版をリポジトリへ取り込む(project → repo の逆方向ミラー)。`design-system/` にプロジェクトのレイアウトをそのまま保存。
- コンポーネントは CSS クラスではなく「インラインスタイル + CSS カスタムプロパティ参照」方式。スタイルの実体は `design-system/tokens/*.css`(styles.css の @import 閉包)。
- プレビューカード(*.card.html)は React 18 UMD + Babel standalone + `window.ClaudeDesignSystem_2580a7` を参照。ローカル検証時はネットワーク遮断環境のため unpkg が読めない点に注意(react の vendor コピーが必要)。
- `_ds_bundle.js` はビルド成果物。リポジトリでは design-system/_ds_bundle.js として保存(256KiB 超で取得不可の場合は NOTES に記録して省略)。

## Pull progress (2026-07-11)

- [x] styles.css, tokens/*.css (6), readme.md
- [x] components/actions/ (Button, IconButton, actions.card.html)
- [x] components/display/ (Avatar, Badge, Card, Skeleton, Spinner + card)
- [x] components/feedback/ (Alert, Dialog, Toast, Tooltip + card)
- [x] components/forms/ (Checkbox, Input, Radio, Select, Switch, Textarea + card)
- [x] components/marketing/ (CaseCard, DarkBand, EditorialList, Eyebrow, HeroEditorial, Marquee, MegaFooter, PullQuote, StatBand + card)
- [x] components/navigation/ (DropdownMenu, Tabs + card)
- [x] guidelines/ (15 html)
- [x] ui_kits/website/ (Foundation.jsx, SiteChrome.jsx, README.md, index.html)
- [x] SKILL.md, _ds_manifest.json, _adherence.oxlintrc.json, _ds_bundle.js (67.5KB, @ds-bundle format 4)
- [x] ローカル描画検証: React 18.3.1 UMD + _ds_bundle.js で全 28 コンポーネントを実レンダリング → ALL_COMPONENTS_OK(2026-07-12)。唯一のエラーは Google Fonts への接続遮断(環境のネットワークポリシー由来、実ブラウザでは問題なし)
- [x] コミット & プッシュ

## 2026-07-12: UI キット 2 種を追加(repo → project の初回書き込み)

- `ui_kits/craft/`(工芸・文化事業: tango-creation.jp × aito.co.jp 参照)と `ui_kits/brand/`(食品ブランド EC: yokanka.com 参照、drams.framer.website 由来の操作部品)を作成し、ローカル検証(React 18 UMD + バンドル、エラーなし)のうえ finalize_plan → write_files でプロジェクトへ追加。readme.md の Index も更新。
- 書き込みは追加のみ(writes: ui_kits/craft/**, ui_kits/brand/**, readme.md, センチネル)。既存ファイルへの削除・変更なし。_ds_manifest.json はアプリ側の再コンパイルで更新される想定(リポジトリのミラーは旧カード一覧のまま — 次回 pull 時に更新)。
- 学び: パーセント幅の Slab を auto 幅の親に入れると潰れる(brand の商品カードで発生)→ ラッパーに width% を持たせて解決。

## 今後の再同期について

- 方向: リポジトリ(design-system/)→ プロジェクト。§1 の再採用ルールに従い atomic path。
- プロジェクトに _ds_sync.json は無い(アプリのフォーム生成のため)→ 初回の repo→project 同期は全件検証になる。
- 改善候補: tokens/colors.css のダークテーマは部分定義(bg/text/accent-hover/border のみ)。preview/index.html の完全なダークトークン(inverse 系の再マッピング含む)を移植する余地あり。
