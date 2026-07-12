import * as React from "react";

/** 複数行テキスト入力。Input と同じ罫線・focus ルール。 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  disabled?: boolean;
  rows?: number;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
