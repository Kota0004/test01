import * as React from "react";

/** モーダルダイアログ。radius 16px パネル、ヘッダー/フッターは罫線で区切る。 */
export interface DialogProps {
  open: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
  /** フッター(通常は Button を並べる) */
  footer?: React.ReactNode;
  /** max-width px。既定 480 */
  width?: number;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
