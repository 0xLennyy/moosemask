import { createRoot } from "react-dom/client";
import "./styles/index.less";
import App from "./App";

const rootDom = document.getElementById("root");

const root = createRoot(rootDom!);

root.render(<App />);
