# Claude Design — デザインシステム構築プラン

Claude(Anthropic)のデザイン言語 — 温かみのあるアイボリー基調、テラコッタのアクセント、セリフ見出し、静かで人間的なトーン — を参照した独自デザインシステム「Claude Design」を構築するためのプランです。

---

## 1. ゴールと非ゴール

### ゴール
- **一貫性**: 色・タイポグラフィ・余白・角丸・モーションをトークン化し、どの画面でも同じ見た目と挙動を保証する
- **開発速度**: よく使う UI コンポーネントを部品化し、新規画面を「組み立てる」だけで作れるようにする
- **アクセシビリティ**: WCAG 2.1 AA(コントラスト比 4.5:1、キーボード操作、フォーカスリング)を標準で満たす
- **ダークモード**: ライト/ダークをトークンの切り替えだけで対応する

### 非ゴール(初期フェーズでは扱わない)
- Figma との自動同期(将来フェーズで検討)
- 多ブランド対応(テーマは light / dark の 2 つのみ)
- npm への公開(まずはリポジトリ内利用)

---

## 2. デザイン言語の定義(ファウンデーション)

### 2.1 カラートークン

**プリミティブ → セマンティック → コンポーネント** の 3 層構造にする。アプリのコードはセマンティック層のみを参照する。

#### プリミティブ(抜粋)

| トークン | Light | 用途イメージ |
|---|---|---|
| `ivory-50` | `#FAF9F5` | ベース背景 |
| `ivory-100` | `#F0EEE6` | セカンダリ背景(オートミール) |
| `ivory-200` | `#E8E6DC` | ボーダー、区切り線 |
| `ink-900` | `#141413` | 本文テキスト |
| `ink-500` | `#5E5D59` | 補助テキスト |
| `terracotta-500` | `#D97757` | ブランドアクセント(Claude オレンジ) |
| `terracotta-600` | `#C15F3C` | アクセント hover / active |
| `olive-500` | `#788C5D` | 成功 |
| `amber-500` | `#D4A27F` | 警告 |
| `clay-500` | `#BF4D43` | エラー |

#### セマンティック(抜粋)

| トークン | Light | Dark |
|---|---|---|
| `bg/primary` | `ivory-50` | `#262624` |
| `bg/secondary` | `ivory-100` | `#1F1E1D` |
| `text/primary` | `ink-900` | `#F5F4EF` |
| `text/secondary` | `ink-500` | `#B8B5AD` |
| `accent/default` | `terracotta-500` | `terracotta-500` |
| `accent/hover` | `terracotta-600` | `#E08A6D` |
| `border/default` | `ivory-200` | `#3A3937` |

ポイント: ダークモードも「黒」ではなく**暖色系のダークグレー**にして、Claude らしい柔らかさを保つ。

### 2.2 タイポグラフィ

| 役割 | フォント(欧文) | フォント(和文) | 備考 |
|---|---|---|---|
| ディスプレイ / 見出し | **Source Serif 4**(または Lora) | **Shippori Mincho** | Claude のセリフ見出しの代替。Google Fonts で無料 |
| 本文 / UI | **Inter** | **Noto Sans JP** | 可読性重視 |
| コード | **JetBrains Mono** | — | |

- タイプスケール: ベース 16px、比率 1.2(`12 / 14 / 16 / 20 / 24 / 30 / 36 / 48`)
- 行間: 本文 1.7(和文考慮)、見出し 1.3
- 見出しは `font-weight: 500〜600` に抑え、太くしすぎない(静かなトーン)

### 2.3 スペーシング・形状・エレベーション

- **スペーシング**: 4px ベース(`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`)
- **角丸**: `sm: 8px`(入力・ボタン)、`md: 12px`(カード)、`lg: 16px`(モーダル)、`full`(ピル・アバター)
- **シャドウ**: 暖色を混ぜた極めて弱い影(`0 2px 8px rgba(20,20,19,0.06)` 程度)。境界はボーダー主体で表現
- **モーション**: 150–250ms、`ease-out` 基本。派手なアニメーションは使わない

---

## 3. 実装アプローチの比較(3 案)

### 案 A: CSS カスタムプロパティ + プレーン CSS
トークンを `:root` の CSS 変数として定義し、コンポーネントはクラスベースの CSS で提供する。

- ✅ フレームワーク非依存、依存ゼロ、学習コスト最小
- ✅ 静的サイトや小規模プロジェクトに最適
- ❌ コンポーネントの「振る舞い」(モーダル、ドロップダウン等)は提供できない
- ❌ 型安全性なし、規模が大きくなると管理が辛い

### 案 B: Tailwind CSS v4 テーマ + React コンポーネント(推奨)
Tailwind v4 の `@theme` にトークンを定義し、その上に Radix UI(ヘッドレス)+ CVA でスタイリングした React コンポーネントを構築。Storybook でドキュメント化する。

- ✅ トークン → ユーティリティ → コンポーネントが一気通貫
- ✅ Radix によりアクセシビリティ(フォーカス管理、ARIA)が担保される
- ✅ shadcn/ui 方式(コードをコピーして所有する)を採用すればメンテ負荷が低い
- ✅ モダンなエコシステムで採用実績が多く、情報も豊富
- ❌ React 前提になる(Vue 等では使えない)

### 案 C: トークンパイプライン + マルチプラットフォーム(フル構成)
Style Dictionary で W3C Design Tokens 形式の JSON を単一ソースにし、CSS 変数 / Tailwind テーマ / TypeScript 定数 / (将来的に iOS・Android)へビルド。monorepo(`packages/tokens`, `packages/react`, `apps/docs`)+ Changesets でバージョン管理。

- ✅ 複数プロダクト・複数プラットフォームに展開できる本格構成
- ✅ Figma(Tokens Studio)との同期パスがある
- ❌ 初期構築コストが高く、1 プロダクトにはオーバーエンジニアリング
- ❌ ツールチェーンの保守コストが継続的にかかる

### 推奨: **案 B をベースに、トークンだけ案 C の思想(JSON 単一ソース)を先取り**

トークンを `tokens/` に JSON で定義 → 小さなビルドスクリプトで CSS 変数と Tailwind テーマを生成、という最小パイプラインにしておけば、将来案 C へスケールアップする際も資産がそのまま使える。

---

## 4. コンポーネントインベントリ(優先度つき)

| 優先度 | コンポーネント |
|---|---|
| **P0(最初の 2 週間)** | Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Badge, Card, Spinner |
| **P1(次の 2 週間)** | Dialog(Modal), Tooltip, Toast, Tabs, DropdownMenu, Avatar, Alert, Skeleton |
| **P1-M(HP・マーケティング層)** | Eyebrow, HeroEditorial, Marquee, EditorialList, DarkBand, StatBand, PullQuote, CaseCard, MegaFooter |
| **P2(必要に応じて)** | Table, Pagination, Breadcrumb, Accordion, Popover, DatePicker, Command Palette |

P1-M はアプリ UI とは独立した「HP 用」レイヤー。選定根拠と参照サイトは [`docs/design-references.md`](docs/design-references.md) を参照。

各コンポーネントの完成条件(Definition of Done):
1. トークンのみでスタイリングされている(ハードコード色なし)
2. light / dark 両テーマで表示確認済み
3. キーボード操作・フォーカスリング対応
4. Storybook にストーリー(全 variant + 状態)がある

---

## 5. ロードマップ

### Phase 0: ファウンデーション(〜1 週間)
- リポジトリセットアップ(Vite + React + TypeScript + Tailwind v4 + Storybook)
- `tokens/*.json` にカラー・タイポ・スペーシング・角丸・シャドウ・モーションを定義
- トークン → CSS 変数 / `@theme` を生成するビルドスクリプト
- light / dark テーマ切り替えの仕組み(`data-theme` 属性)
- **成果物**: Storybook 上でトークン一覧(カラーパレット、タイプスケール)が見られる状態

### Phase 1: コアコンポーネント(1–2 週間)
- P0 コンポーネント 11 種を実装
- CVA で variant 設計(`variant` / `size` / `state` の命名規約を確立)
- **成果物**: P0 全部品が Storybook で確認でき、サンプルフォーム画面が組める状態

### Phase 2: 応用コンポーネント + 品質(1–2 週間)
- P1 コンポーネント 8 種(Radix ベース)
- アクセシビリティ監査(axe / Storybook a11y addon)
- Chromatic などによるビジュアルリグレッションテスト導入
- **成果物**: 実プロダクトの主要画面をデザインシステムだけで構築できる状態

### Phase 3: 運用・ガバナンス(継続)
- 利用ガイドライン(トーン&マナー、Do/Don't)のドキュメント化
- コントリビューションフロー(新コンポーネント提案 → レビュー → 追加)
- 必要になった時点で: npm パッケージ化、Figma 連携、案 C への移行

---

## 6. 想定ディレクトリ構成

```
claude-design/
├── tokens/                  # 単一ソースのデザイントークン(JSON)
│   ├── color.json
│   ├── typography.json
│   ├── spacing.json
│   └── build.ts             # CSS 変数 / Tailwind テーマ生成
├── src/
│   ├── styles/
│   │   ├── theme.css        # 生成された CSS 変数(light/dark)
│   │   └── global.css       # リセット + ベーススタイル
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── ...
│   └── lib/                 # cn() ユーティリティ等
├── .storybook/
└── package.json
```

---

## 7. 最初の一歩(このプラン承認後のタスク)

1. Phase 0 のリポジトリセットアップ
2. このドキュメントの §2 をベースにトークン JSON を作成
3. Storybook にカラーパレット / タイポグラフィのドキュメントページを作成
4. リファレンス実装として `Button` を 1 つ完成させ、命名規約・ファイル構成のテンプレートにする

---

## 8. HP リファレンス反映によるシステム拡張(2026-07-05 追加)

実在サイト 10 選(Anthropic / Claude / Mercury / Aesop / mymind / Polestar / Oura / Pentagram / Watershed / Linear)を分析し、「リッチで AI っぽくない」HP を作るための拡張を行った。詳細は [`docs/design-references.md`](docs/design-references.md)。

### 追加されたもの(サマリ)

- **カラー**: インバース系トークン(`bg/inverse: #141413` ほか 6 種)— ページに緩急を作るダークセクション用
- **タイポ**: ディスプレイスケール(`display-2xl` / `display-xl` / `eyebrow` / `stat`)、欧文セリフイタリックの強調用法
- **レイアウト**: 12 カラムグリッド、セクション余白 `96/128/160px`、影の代わりに 1px 罫線で区切る原則
- **モーション**: `ease-out-expo`、リビール 700ms 一種類のみ、`prefers-reduced-motion` 対応
- **質感**: グレイン(粒子)オーバーレイトークン
- **コンポーネント**: P1-M マーケティング層 9 種(§4 参照)

### 実装デモ

トークンをすべて適用した HP モック: [`preview/index.html`](preview/index.html)(依存ゼロの単一 HTML。トークン定義は `:root` の CSS 変数としてそのまま Phase 0 の `theme.css` に移植可能)
