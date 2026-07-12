import * as React from "react";

/** ドロップダウンメニュー。ピル型トリガー + 罫線カードのメニュー。"---" で区切り線。 */
export interface DropdownMenuProps {
  label: React.ReactNode;
  items: Array<{ value: string; label: React.ReactNode; danger?: boolean } | "---">;
  onSelect?: (value: string) => void;
  align?: "left" | "right";
  style?: React.CSSProperties;
}
export declare function DropdownMenu(props: DropdownMenuProps): JSX.Element;
