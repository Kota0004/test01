import * as React from "react";

/**
 * ピル型ボタン。primary(テラコッタ、1 画面 1〜2 箇所)/ secondary(罫線)/ quiet(下線)。
 * @startingPoint section="Components" subtitle="ピル型ボタン — primary / secondary / quiet" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** "primary" | "secondary" | "quiet" */
  variant?: "primary" | "secondary" | "quiet";
  /** "sm" | "md" */
  size?: "sm" | "md";
  disabled?: boolean;
  /** hover で 3px 動く → を末尾に付ける */
  arrow?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
