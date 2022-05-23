/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "./Carousel";
import "../styles/Tutorial.css";

export default function Tutorial({ setTutorialComplete }) {
  return (
    <div className="tutorial-container">
      <div className="tutorial-window">
        <Carousel setTutorialComplete={setTutorialComplete} />
      </div>
    </div>
  );
}
