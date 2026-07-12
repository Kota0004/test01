import * as React from "react";

/** テキスト入力。ラベルは eyebrow スタイル、focus はテラコッタの 1px 枠。 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** eyebrow スタイルのラベル */
  label?: string;
  /** エラーメッセージ(枠が clay に) */
  error?: string;
  disabled?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
