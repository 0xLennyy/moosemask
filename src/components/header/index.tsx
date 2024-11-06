import { copyToClipBoard } from "@/utils/common";
import style from "./index.module.less";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Copy from "@/assets/icons/copy.svg";
import SwitchAccount from "../switch-account";
import { useState } from "react";

const header = () => {
  const [switchAccountVisible, setSwitchAccountVisible] =
    useState<boolean>(false);

  const switchAccount = {
    open: () => {
      setSwitchAccountVisible(true);
    },
    onOk: () => {
      setSwitchAccountVisible(false);
    },
    onCancel: () => {
      setSwitchAccountVisible(false);
    },
  };

  return (
    <>
      <div className={style.header}>
        <div className={style["header-content"]}>
          <div
            className={style["content-account"]}
            onClick={switchAccount.open}
          >
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
      <SwitchAccount
        visible={switchAccountVisible}
        onOk={switchAccount.onOk}
        onCancel={switchAccount.onCancel}
      />
    </>
  );
};

export default header;
