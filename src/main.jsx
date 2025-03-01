import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./mock/mock.js";

const root = document.getElementById("root");

createRoot(root).render(<App />);
