import * as React from "react";

/** 事例/記事カード。4:3 の額装画像 + eyebrow + セリフ見出し。hover で画像 1.03 ズーム。 */
export interface CaseCardProps {
  image?: string;
  imageAlt?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
}
export declare function CaseCard(props: CaseCardProps): JSX.Element;
