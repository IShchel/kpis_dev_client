import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Regions_fo from "./storage/mpe1gem/regions_fo";
import Mpe1gem_storage from "./storage/mpe1gem/mpe1gem_storage";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
    <Context.Provider
      value={{
        regions_fo: new Regions_fo(),
        mpe1gem: new Mpe1gem_storage(),
      }}
    >
      <App />
    </Context.Provider>
  //</React.StrictMode>
);
