import * as React from "react";

/** 中央寄せの引用バンド。bg-secondary + 上下罫線、✻ マーク、cite はモノスペース大文字。 */
export interface PullQuoteProps {
  quote: React.ReactNode;
  /** 例: "— Claude Design 設計原則 / §01" */
  attribution?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
