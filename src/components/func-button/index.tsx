import Plusminus from "@/assets/icons/plus-minus.svg";
import Bridge from "@/assets/icons/bridge.svg";
import ScanBarcode from "@/assets/icons/scan-barcode.svg";
import SwapHorizontal from "@/assets/icons/swap-horizontal.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { useMemo } from "react";
import style from "./index.module.less";

const FuncButton = (props: {
  icon: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const { icon, children, onClick } = props;

  const iconFont = useMemo(() => {
    switch (icon) {
      case "plus-minus":
        return <img src={Plusminus} />;
      case "bridge":
        return <img src={Bridge} />;
      case "scan-barcode":
        return <img src={ScanBarcode} />;
      case "swap-horizontal":
        return <img src={SwapHorizontal} />;
      case "arrow-up-right":
        return <img src={ArrowUpRight} />;
      default:
        return;
    }
  }, [icon]);

  return (
    <button className={style["func-button"]} onClick={onClick}>
      <div className={style.icon}>{iconFont}</div>
      <div>{children}</div>
    </button>
  );
};

export default FuncButton;
