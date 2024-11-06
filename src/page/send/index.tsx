import { PathAtom } from "@/App";
import { useAtom } from "jotai";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

const Send = () => {
  const [, setPath] = useAtom(PathAtom);
  return (
    <div onClick={() => setPath("index")}>
      <div className="relative w-full p-4">
        <img
          className=" absolute w-4 h-4 top-[50%]"
          style={{ transform: "translateY(-50%)" }}
          src={ArrowLeft}
          onClick={() => setPath("index")}
        />
        <div className="text-center text-base text-[#141618] font-semibold">
          发送
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full space-y-2">
          <div className="font-semibold">自</div>
          <div className="py-3 px-4 flex items-center border border-solid border-[#bbc0c566] rounded-lg">
            <div className="flex-1">
              <div>Account 1</div>
              <div className="text-xs to-gray-500">0x07140...xxxxx</div>
            </div>
            <img
              className="w-4 h-4 flex-shrink-0"
              style={{ transform: "rotate(270deg)" }}
              src={ArrowLeft}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
