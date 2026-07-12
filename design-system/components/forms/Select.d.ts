import * as React from "react";

/** セレクト。罫線スタイル + ユニコード矢印(›)。 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** 文字列 or {value, label} の配列 */
  options?: Array<string | { value: string; label: string }>;
  disabled?: boolean;
}
export declare function Select(props: SelectProps): JSX.Element;
