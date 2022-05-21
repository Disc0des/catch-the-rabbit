import React from "react";
import "../styles/Header.css";
import logo from "../logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" className="logo" />
      <div className="leaderboard-container">
        <ul className="leaderboard">
          <li>1st place</li>
          <li>2nd place</li>
          <li>3rd place</li>
        </ul>
      </div>
    </div>
  );
}
