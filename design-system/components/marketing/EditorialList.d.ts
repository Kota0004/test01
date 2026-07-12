import * as React from "react";

/** 番号付き大型リスト。罫線区切り、hover で背景 + → が 6px 動く。 */
export interface EditorialListProps {
  items: Array<{
    /** 省略時は 01, 02… を自動採番 */
    no?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    href?: string;
    onClick?: () => void;
  }>;
  style?: React.CSSProperties;
}
export declare function EditorialList(props: EditorialListProps): JSX.Element;
