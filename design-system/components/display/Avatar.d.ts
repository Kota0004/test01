import * as React from "react";

/** 円形アバター。画像が無ければセリフ体のイニシャル。 */
export interface AvatarProps {
  name?: string;
  src?: string;
  /** px。既定 40 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
