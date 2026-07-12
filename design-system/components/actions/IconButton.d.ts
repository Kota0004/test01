import * as React from "react";

/** 円形アイコンボタン(44px)。子にはユニコードグリフ(✻ → ×)を渡す。 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** アクセシブルな名前(必須) */
  label: string;
  /** "ghost" | "outline" */
  variant?: "ghost" | "outline";
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
