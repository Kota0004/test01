import * as React from "react";

/** トースト。インバース地の小カード。画面下部に fixed で配置する。 */
export interface ToastProps {
  tone?: "info" | "success" | "error";
  children?: React.ReactNode;
  /** 指定すると × ボタンを表示 */
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
