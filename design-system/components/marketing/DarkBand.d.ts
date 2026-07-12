import * as React from "react";

/**
 * ダークセクション。1 ページに 1 つ挟んで緩急を作る。中に StatBand を置くのが定番。
 * @startingPoint section="Marketing" subtitle="ダークセクション — 暖色系の黒で緩急を作る" viewport="1280x600"
 */
export interface DarkBandProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DarkBand(props: DarkBandProps): JSX.Element;
