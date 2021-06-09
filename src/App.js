import React from "react";
import GridDrag from "./components/grid-drag";
import "./styles.css";

export default function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <GridDrag />
    </div>
  );
}
