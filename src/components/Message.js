/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Context from "../utils/Context";
import "../styles/Message.css";

export default function Message({ message, complete }) {
  const { setTutorialComplete } = useContext(Context);
  return (
    <div>
      <div className={`message-text ${complete}`}>
        {message}
        {complete === "yes" && (
          <button
            type="submit"
            className="play-again"
            onClick={() => {
              setTutorialComplete(false);
            }}
          >
            Play Again ?
          </button>
        )}
      </div>
    </div>
  );
}
