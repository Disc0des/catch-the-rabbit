import React from "react";
import "../styles/Gameboard.css";

export default function Gameboard() {
  const holesAmount = 50;
  const holes = [];
  for (let i = 1; i <= holesAmount; i += 1) {
    holes.push(
      <div className="hole-block">
        <div id={i} className="game-hole" />
        <h3>{i}</h3>
      </div>
    );
  }

  return (
    <div className="gameboard-container">
      <div className="overflow">
        <div className="holes-grid">{holes}</div>
      </div>
    </div>
  );
}
