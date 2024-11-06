import { atom, useAtom } from "jotai";
import Index from "./page";
import { useMemo } from "react";
import Send from "./page/send";

export const PathAtom = atom<"index" | "send">("index");

const App = () => {
  const [path] = useAtom(PathAtom);

  const component = useMemo(() => {
    switch (path) {
      case "index":
        return <Index />;
      case "send":
        return <Send />;
      default:
        return <Index />;
    }
  }, [path]);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[408px] h-[600px] bg-white">{component}</div>
    </div>
  );
};

export default App;
