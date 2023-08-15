import { createRoot } from "react-dom/client";
import App from "@src/presentation/App";

const Index = () => {
  return <App />;
};

const root = document.getElementById("root");
root && createRoot(root).render(<Index />);
