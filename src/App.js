import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>Coded by Sharicka Clarke and is open-sourced</small>
        </footer>
      </div>
    </div>
  );
}
