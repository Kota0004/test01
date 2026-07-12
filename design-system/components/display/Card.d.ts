import * as React from "react";

/**
 * カード。罫線 + 12px 角丸。framed はスクリーンショット額装用(微小影)。
 * @startingPoint section="Components" subtitle="罫線カード — outline / tinted / framed" viewport="700x300"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "outline"(既定)| "tinted"(bg-secondary)| "framed"(微小影で額装) */
  variant?: "outline" | "tinted" | "framed";
  /** px。既定 24 */
  padding?: number | string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
