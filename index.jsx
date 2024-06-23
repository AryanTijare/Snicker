import ReactDOM  from "react-dom/client";

import App from "./App.jsx";
import "./Joke.css";
import "./button.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);