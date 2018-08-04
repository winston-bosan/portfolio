import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

// const theme = {
//   global: {
//     colors: { brand: "#178EDE", accent: ["#3399cc", "#cc3399", "33cc99"] },
//     input: { border: { radius: "4px" } },
//     font: {
//       name: "IBM Plex Sans",
//       family: "'IBM Plex Sans', Arial, sans-serif"
//     }
//   },
//   button: { border: { radius: "4px" } },
//   checkBox: { border: { radius: "4px" } },
//   layer: { border: { radius: "4px" } }
// };

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
