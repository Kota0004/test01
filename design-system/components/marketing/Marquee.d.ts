import * as React from "react";

/** 低速テキストループ。✻ 区切りのセリフ語句が流れる。reduced-motion で停止。 */
export interface MarqueeProps {
  words: React.ReactNode[];
  /** 一周の秒数。既定 46 */
  duration?: number;
  style?: React.CSSProperties;
}
export declare function Marquee(props: MarqueeProps): JSX.Element;
