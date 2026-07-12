import * as React from "react";

/** 小さなピル型バッジ。neutral / accent / success / warning / error。 */
export interface BadgeProps {
  tone?: "neutral" | "accent" | "success" | "warning" | "error";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
