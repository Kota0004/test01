import * as React from "react";

/**
 * 左寄せエディトリアルヒーロー。セリフ大見出し + イタリック副題 + CTA。
 * @startingPoint section="Marketing" subtitle="エディトリアルヒーロー — セリフ大見出し + CTA" viewport="1280x640"
 */
export interface HeroEditorialProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** 欧文セリフイタリックの副題(アクセント色) */
  subline?: React.ReactNode;
  lead?: React.ReactNode;
  /** Button 等を並べる */
  actions?: React.ReactNode;
  /** 右カラム(fig グラフィック等)。省略で 1 カラム */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function HeroEditorial(props: HeroEditorialProps): JSX.Element;
