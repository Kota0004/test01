import * as React from "react";

/** 見出しの上の小さな大文字ラベル(12px / ls 0.15em)。✻ ティック付きが定番。 */
export interface EyebrowProps {
  /** ✻ を先頭に付ける。既定 true */
  tick?: boolean;
  /** ダークセクション上で使う */
  inverse?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
