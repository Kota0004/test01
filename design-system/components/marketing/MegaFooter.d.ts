import * as React from "react";

/** 大型フッター。タグライン + リンク列、巨大セリフワードマーク、モノスペースのメタ行。 */
export interface MegaFooterProps {
  /** 左端のセリフタグライン */
  tagline?: React.ReactNode;
  columns?: Array<{
    heading: React.ReactNode;
    links: Array<{ label: React.ReactNode; href?: string }>;
  }>;
  /** 既定 "Claude Design" */
  wordmark?: string;
  /** メタ行(© 表記、書体クレジット等)。左右に散る */
  meta?: React.ReactNode[];
  style?: React.CSSProperties;
}
export declare function MegaFooter(props: MegaFooterProps): JSX.Element;
