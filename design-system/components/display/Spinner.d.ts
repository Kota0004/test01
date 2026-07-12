import * as React from "react";

/** ローディングスピナー。罫線リング + テラコッタの上辺。 */
export interface SpinnerProps {
  /** px。既定 24 */
  size?: number;
  /** aria-label。既定「読み込み中」 */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
