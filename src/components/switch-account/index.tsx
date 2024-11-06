import Close from "@/assets/icons/close.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Add from "@/assets/icons/add.svg";
import { useMemo, useState } from "react";

const SwitchAccount = (props: {
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}) => {
  const { visible = false, onOk, onCancel } = props;

  const [step, setStep] = useState<"index" | "nav" | "add" | "import" | "">(
    "index"
  );
  const [inputAccount, setInputAccount] = useState<string>("");

  const title = useMemo(() => {
    switch (step) {
      case "index":
        return "选择一个账号";
      case "import":
        return "导入账号";
      default:
        return "添加账号";
    }
  }, [step]);

  return visible ? (
    <div className="fixed inset-0 z-[1000] bg-[#00000099]" onClick={onCancel}>
      <div
        className="absolute top-8 left-[50%] w-[408px] rounded-lg bg-white"
        style={{
          boxShadow: "0 2px 40px 0 #0000001a",
          transform: "translateX(-50%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-4">
          {step !== "index" ? (
            <img
              className="w-4 h-4 absolute top-[50%] left-4 cursor-pointer"
              src={ArrowLeft}
              style={{ transform: "translateY(-50%)" }}
              onClick={() => setStep(step === "nav" ? "index" : "nav")}
            />
          ) : undefined}
          <div className="text-xl font-semibold text-center">{title}</div>
          <img
            className="w-4 h-4 absolute top-[50%] right-4 cursor-pointer"
            src={Close}
            style={{ transform: "translateY(-50%)" }}
            onClick={onCancel}
          />
        </div>
        {step === "index" ? (
          <>
            <div className="mt-4">
              <div className="p-4 flex items-center justify-between">
                <div className="text-sm space-y-1">
                  <div className="font-semibold">Account 1</div>
                  <div className="text-xs text-gray-500">0x07xxxxxxx</div>
                </div>
                <div className="space-y-1">
                  <div>$0.00 USD</div>
                  <div className="text-xs text-gray-500">0 ETH</div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="text-sm space-y-1">
                  <div className="font-semibold">Account 2</div>
                  <div className="text-xs text-gray-500">0x07xxxxxxx</div>
                </div>
                <div className="space-y-1">
                  <div>$0.00 USD</div>
                  <div className="text-xs text-gray-500">0 ETH</div>
                </div>
              </div>
            </div>
            <div className="mt-2 mx-4 mb-4 h-[46px] overflow-hidden rounded-3xl flex justify-center items-center gap-2 text-[#0376c9] border border-solid border-[#0376c9] cursor-pointer">
              <img
                className="w-4 h-4"
                src={Add}
                style={{
                  transform: "translateY(-60px)",
                  filter: "drop-shadow(#3b82f6 0 60px)",
                }}
              />
              <div onClick={() => setStep("nav")}>添加账号或硬币钱包</div>
            </div>
          </>
        ) : undefined}
        {step === "nav" ? (
          <div className="p-4 flex flex-col gap-4 text-[#0376c9] cursor-pointer">
            <div
              onClick={() => {
                setInputAccount("");
                setStep("add");
              }}
            >
              添加新账号
            </div>
            <div className="cursor-pointer" onClick={() => setStep("import")}>
              导入账号
            </div>
          </div>
        ) : undefined}
        {step === "add" ? (
          <div className="p-4 space-y-8">
            <div className="space-y-2">
              <div className="font-semibold">账号名称</div>
              <input
                className="w-full h-12 px-4 border border-solid border-[#bbc0c5] rounded"
                style={{ outlineColor: "rgb(0, 95, 204)" }}
                value={inputAccount}
                onChange={(e) => {
                  setInputAccount(e.target.value);
                }}
                placeholder="Account 3"
              />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="flex-1 h-10 flex justify-center items-center text-sm rounded-3xl border border-solid border-[#0376c9] text-[#0376c9] cursor-pointer"
                onClick={() => setStep("index")}
              >
                取消
              </div>
              <div className="flex-1 h-10 flex justify-center items-center text-sm rounded-3xl border border-solid bg-[#0376c9] text-white cursor-pointer">
                添加账号
              </div>
            </div>
          </div>
        ) : undefined}
      </div>
    </div>
  ) : undefined;
};

export default SwitchAccount;
