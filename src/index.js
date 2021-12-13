import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AssetsStore } from "./AssetsStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AssetsStore.Provider>
      <App />
    </AssetsStore.Provider>
  </StrictMode>,
  rootElement
);
