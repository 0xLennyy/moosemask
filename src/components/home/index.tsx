import { useAtom } from "jotai";
import FuncButton from "../func-button";
import style from "./index.module.less";
import { PathAtom } from "@/App";
const Home = () => {
  const [, setPath] = useAtom(PathAtom);

  return (
    <div className={style.home}>
      <div className={style["home-overview"]}>
        <div className={style["overview-content"]}>$0.00 USD</div>
        <div className={style["overview-extra"]}>
          <div className={style["extra-fluctuation"]}>
            {`+US$0.00  (+0.00)`}
          </div>
          <a>Protfolio</a>
        </div>
      </div>
      <div className={style["home-operation"]}>
        {/* <FuncButton
          icon="plus-minus"
          onClick={() => {
            console.log("出入金");
          }}
        >
          出入金
        </FuncButton>
        <FuncButton
          icon="swap-horizontal"
          onClick={() => {
            console.log("兑换");
          }}
        >
          兑换
        </FuncButton>
        <FuncButton
          icon="bridge"
          onClick={() => {
            console.log("跨链桥");
          }}
        >
          跨链桥
        </FuncButton> */}
        <FuncButton
          icon="arrow-up-right"
          onClick={() => {
            setPath("send");
            console.log("发送");
          }}
        >
          发送
        </FuncButton>
        <FuncButton
          icon="scan-barcode"
          onClick={() => {
            console.log("收款");
          }}
        >
          收款
        </FuncButton>
      </div>
      <div className={style["home-money"]}>
        <div className={style["money-title"]}>代币</div>
        <div className={style["money-content"]}>
          <div className={style["content-left"]}>
            <div className={style["left-title"]}>以太坊</div>
            <div className={style["left-fluctuation"]}>0.27%</div>
          </div>
          <div className={style["content-right"]}>
            <div className={style["right-money"]}>$0.00</div>
            <div className={style["right-total"]}>0 ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
