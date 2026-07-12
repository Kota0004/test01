import * as React from "react";

/** 下線スタイルのタブ。アクティブはインクの 2px 下線。 */
export interface TabsProps {
  items: Array<{ value: string; label: React.ReactNode }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
