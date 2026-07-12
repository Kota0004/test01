import * as React from "react";

/** アラート。全周 1px 罫線 + 状態色の ✻。色付き左ボーダーは使わない。 */
export interface AlertProps {
  tone?: "info" | "success" | "warning" | "error";
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Alert(props: AlertProps): JSX.Element;
