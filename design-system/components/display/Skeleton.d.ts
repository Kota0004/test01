import * as React from "react";

/** スケルトン。ivory-100 の面が静かに明滅(1.6s)。 */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  /** CSS 値。既定 var(--radius-sm) */
  radius?: string;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
