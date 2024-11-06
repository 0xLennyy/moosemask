import { copyToClipBoard } from "@/utils/common";
import style from "./index.module.less";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Copy from "@/assets/icons/copy.svg";
import SwitchAccount from "../switch-account";

const header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style["header-content"]}>
          <div className={style["content-account"]}>
            <div className={style["account-title"]}>Account</div>
            <img src={ArrowLeft} />
          </div>
          <div
            className={style["content-code"]}
            onClick={() => copyToClipBoard("0x777dddf")}
          >
            <div>0x777...d666</div>
            <img className="w-4 h-4" src={Copy} />
          </div>
        </div>
      </div>
      <SwitchAccount visible />
    </>
  );
};

export default header;
