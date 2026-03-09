import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/gisbcode"
            target="_blank"
            rel="noreferrer"
          >
            Giovanna Bellon
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/gisbcode/reactweek5/tree/main/src"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/projects/finalprojectw5/deploys"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
