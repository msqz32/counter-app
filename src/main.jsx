import React from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
);
