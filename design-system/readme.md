# Claude Design System

静けさを設計するエディトリアル志向のデザインシステム。アイボリー基調 + テラコッタのアクセント + 明朝系の見出しで、Web サイトとプロダクト UI に「リッチで AI っぽくない」品格を与える。

## Sources

- GitHub: [Kota0004/test01](https://github.com/Kota0004/test01)(branch `claude/design-system-plan-fvjx0o`)
  - **`preview/index.html` がこのシステムの見本ページ(ground truth)。迷ったらこのファイルの見た目に合わせる。** トークン・コンポーネントの CSS はすべてここから採取した
  - `DESIGN_SYSTEM_PLAN.md` / `docs/design-references.md` — 設計方針と参照(Mercury / Oura / Polestar / Aesop / Pentagram / mymind 由来のパターン)
  - より良い設計をするには、このリポジトリをさらに探索することを勧める

ロゴ画像・アイコンフォント・写真素材は**ソースに存在しない**(下記 ICONOGRAPHY 参照)。

## 禁止事項(AI っぽさの排除)

紫〜青のグラデーション / glassmorphism(ヘッダーの blur(10px) だけが唯一の例外)/ 汎用 3D イラスト / 絵文字見出し / **純白 #FFFFFF と純黒 #000000** / 過剰な影(区切りは影ではなく 1px の罫線)/ 色付き左ボーダーだけのカード。

## CONTENT FUNDAMENTALS

- **トーン**: 声を張らない。断定するが、静かに。「〜です・〜ます」の丁寧体だが、原則見出しは「余白は情報である」のような体言止め・断言調
- **見出し**: 短い和文 + 改行で呼吸を作る(「静けさを、<br>設計する。」)。読点や句点を見出しに含めてよい
- **欧文の使い方**: eyebrow は英語大文字(「Principles」「Built to scale」)。副題はセリフイタリックの英文(「A design system for calm, confident products.」)。メタ情報はモノスペース大文字(「Tokyo — 2026」「v0.1 / Foundations」)
- **コピー例**(ground truth より):
  - 「声を張らないデザインには、根拠が要ります。」
  - 「詰めれば安く見え、空ければ高く見える。」
  - 「彩度は資産であり、浪費しない。」
  - 「上質とは、足した量ではなく、削った痕跡が見えないことだ。」
- **絵文字**: 使わない。記号は ✻(U+2733)・→・× などのユニコードのみ
- **人称**: 一人称の「私たち」は避け、システム自身が主語(「Claude Design は〜定義します」)

## VISUAL FOUNDATIONS

- **色**: 画面の 95% はアイボリー(#FAF9F5 / #F0EEE6)とインク(#141413 / #5E5D59)。テラコッタ #D97757(hover #C15F3C)は 1 画面に 1〜2 箇所。ダークセクションは暖色系の黒 #141413 + 文字 #F5F4EF + アクセント #E08A6D。状態色: 成功 #788C5D / 警告 #D4A27F / エラー #BF4D43
- **タイポグラフィ**: 見出しはセリフ(Source Serif 4 + Shippori Mincho、weight 500–600、大見出し clamp(48–92px)、行間 1.1)。本文は Inter + Noto Sans JP、16px、行間 1.8、`font-feature-settings: "palt"`。定番: 見出しの上に ✻ 付き eyebrow(12px / ls 0.15em / uppercase)。数字はセリフの lining-nums 大数字。メタ情報はモノスペース
- **レイアウト**: 4px 基準。セクション余白 96–160px。左寄せのエディトリアルレイアウト(中央寄せは PullQuote だけ)。コンテナ 1440px / ガター clamp(20–48px)。ヒーローは 7:5 グリッド
- **背景**: 単色のアイボリー。全面に紙の質感(SVG feTurbulence、opacity 0.035)。画像より「色面 + 活字」のグラフィック(FigArt)。グラデーションは使わない
- **罫線と影**: 区切りはすべて 1px 罫線(#E8E6DC、ダーク上は #3A3937)。影は原則なし — 額装カードのみ `0 2px 8px rgba(20,20,19,.06)`
- **角丸**: 8(入力)/ 12(カード)/ 16(モーダル・フレーム)px。ボタンはピル型
- **モーション**: 2 種類のみ。①スクロールリビール: opacity + translateY(24px)、700ms、cubic-bezier(0.16,1,0.3,1)、(index % 4) × 60ms のスタガー、1 回だけ ②ホバー: 150ms。reduced-motion で全停止
- **ホバー状態**: 色変化(accent → accent-hover)、背景が bg-secondary に、↑1px 浮く(ボタン)、→ が 3–6px 進む、画像 1.03 ズーム(400ms)。opacity は使わない
- **押下状態**: 特別な定義なし(hover の色を維持)
- **透明とブラー**: sticky ヘッダー(92% 不透明 + blur(10px))だけ。それ以外は不透明
- **カード**: 1px 罫線 + 12px 角丸 + 影なし。tinted(#F0EEE6 地)か outline
- **画像の色調**: ソースに写真なし。使う場合は暖色・低彩度で額装(罫線 + 角丸)すること

## ICONOGRAPHY

- **アイコンフォント・SVG アイコンセットは存在しない**。アイコンはユニコードグリフのみ: ✻(U+2733 — ブランドの記号。eyebrow のティック、区切り、引用マーク、リストマーカー)、→(リンク・CTA)、×(閉じる)、›(セレクト・展開)
- **ロゴ画像は存在しない**。ワードマークはセリフの活字「Claude Design」+ 上付き ✻ で組む(`guidelines/brand-wordmark.html` 参照)。ロゴを描かないこと
- 汎用アイコンがどうしても必要な場合は 1.5px ストロークの線形セット(Lucide 等)を最小限で — ただしソース外の代替である旨をフラグすること
- 絵文字は使わない

## Index

- `styles.css` — エントリ(@import のみ)。`tokens/` — colors / typography / layout / motion / fonts / base
- `guidelines/` — 見本カード 15 枚(Colors ×5 / Type ×4 / Spacing ×3 / Motion / Brand ×2)
- `components/`
  - `actions/` — Button(primary / secondary / quiet)、IconButton
  - `forms/` — Input、Textarea、Select、Checkbox、Radio、Switch
  - `display/` — Card、Badge、Avatar、Spinner、Skeleton
  - `feedback/` — Alert、Toast、Tooltip、Dialog
  - `navigation/` — Tabs、DropdownMenu
  - `marketing/` — Eyebrow、HeroEditorial、Marquee、EditorialList、DarkBand、StatBand、PullQuote、CaseCard、MegaFooter
- `ui_kits/website/` — 見本ページの React 再現(index.html + SiteChrome.jsx + Foundation.jsx)
- `ui_kits/craft/` — 工芸・文化事業パターン(参照: tango-creation.jp × aito.co.jp)。縦書きの帯、和欧併記ラベル、織/陶の色面アート、セグメンテッドコントロールのギャラリーフィルタ(drams 由来)
- `ui_kits/brand/` — 食品ブランド EC パターン(参照: yokanka.com)。羊羹スラブの色面ヒーロー、フレーバー色 = 状態色の流用(新色なし)、動作する注文カード(ステッパー / Switch / スライダー → 合計連動、drams 由来)
- `SKILL.md` — エージェント向けスキル定義

### Intentional additions

ソースの preview ページはマーケティングサイトのため、プロダクト UI プリミティブ(forms / feedback / navigation / display)はソースのトークンとルール(罫線・ピル・focus リング・状態色)から新規に起こした標準セット。マーケティング系(Hero / Marquee / EditorialList / DarkBand / StatBand / PullQuote / MegaFooter / Eyebrow)と FigArt は preview の CSS を忠実に移植したもの。CaseCard のみ完全な新規(事例グリッド用 — hover ズームは preview の chip hover から外挿)。

## Caveats

- フォントは Google Fonts CDN 読み込み(`tokens/fonts.css`)。バイナリはソースに無い。オフライン利用にはフォントファイルの提供が必要
- ダークテーマは `[data-theme="dark"]` で部分定義(ソースに完全な仕様なし)
