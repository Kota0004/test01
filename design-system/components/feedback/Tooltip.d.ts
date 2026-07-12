import * as React from "react";

/** ツールチップ。インク地の小ラベル、150ms フェードのみ。 */
export interface TooltipProps {
  label: React.ReactNode;
  side?: "top" | "bottom";
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
