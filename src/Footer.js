import React from "react";
import "./Footer.css";

export default function Footer() {
    const clickedStyle = {
      color: "#FF8303",
    };
  return (
    <div className="Footer">
      <span>
        Coded by{" "}
        <a
          style={clickedStyle}
          href="https://twitter.com/anacury"
        >
          Ana Cury
        </a>
        , open-sourced on{" "}
        <a
          style={clickedStyle}
          href="https://github.com/AnaCury/weather-app"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://app.netlify.com/sites/stupefied-montalcini-96eac1"
          style={clickedStyle}
        >
          Netlify
        </a>
        .
      </span>
    </div>
  );
}
