import * as React from "react";

/** セリフの大数字グリッド。罫線区切り、DarkBand 内が定番。 */
export interface StatBandProps {
  stats: Array<{
    value: React.ReactNode;
    /** 値の直後にアクセント色で付ける記号(✻ など) */
    accent?: React.ReactNode;
    label: React.ReactNode;
  }>;
  /** ダーク地の上か。既定 true */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export declare function StatBand(props: StatBandProps): JSX.Element;
