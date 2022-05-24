/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Message from "./Message";
import "../styles/Gameboard.css";

export default function Gameboard() {
  //* this state disables the game buttons while messages are loaded
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [complete, setComplete] = useState("no");
  const [isActive, setIsActive] = useState(true);

  //* this sets the rabbits initial position
  const [rabbitPosition, setRabbitPosition] = useState(
    Math.floor(Math.random() * 50) + 1
  );

  //* Clicking a hole disables the others and moves the rabbit
  const onClickHandler = (e) => {
    setComplete("no");
    setLoading(true);
    if (e.currentTarget.value == rabbitPosition) {
      setMessage(`You caught the rabbit in ${counter} seconds!`);
      setComplete("yes");
      setIsActive(false);
      setLoading(true);
    } else if (rabbitPosition === 1) {
      setRabbitPosition(rabbitPosition + 1);
      setMessage("Nope, not that one!");
      setLoading(false);
    } else if (rabbitPosition === 50) {
      setRabbitPosition(rabbitPosition - 1);
      setMessage("Nope, not that one!");
      setLoading(false);
    } else if (Math.random() < 0.5) {
      setRabbitPosition(rabbitPosition - 1);
      setMessage("Nope, not that one!");
      setLoading(false);
    } else {
      setRabbitPosition(rabbitPosition + 1);
      setMessage("Missed ! try again");
      setLoading(false);
    }
  };

  //* in game timer
  useEffect(() => {
    let interval = null;

    if (isActive === true) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  //* Logic to render in the holes
  const holesAmount = 50;
  const holes = [];
  for (let i = 1; i <= holesAmount; i += 1) {
    holes.push(
      <button
        className="hole-block"
        onClick={onClickHandler}
        key={i}
        type="button"
        value={i}
        disabled={loading}
      >
        <div id={i} className="game-hole" />
        <h3>{i}</h3>
      </button>
    );
  }

  return (
    <div className="gameboard-container">
      <div className="message-container">
        {message && <Message message={message} complete={complete} />}
        <div className="counter-container">Timer {counter}</div>
      </div>
      <div className="overflow">
        <div className="holes-grid">{holes}</div>
      </div>
    </div>
  );
}
