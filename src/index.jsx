import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = function () {
  Particles.init({
    // normal options
    selector: ".background",
    color: "#f5cb5b",
    maxParticles: 100,
    connectParticles: true,
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 50,
          color: "#f5cb5b",
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 30,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0,

          // disables particles.js
        },
      },
    ],
  });
};
