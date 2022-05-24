/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react";
import Context from "../utils/Context";
import Header from "./Header";
import Gameboard from "./Gameboard";
import Tutorial from "./Tutorial";

function App() {
  const [tutorialComplete, setTutorialComplete] = useState(false);
  const value = {
    tutorialComplete,
    setTutorialComplete,
  };
  return (
    <Context.Provider value={value}>
      <div className="App">
        <Header />
        {tutorialComplete ? (
          <Gameboard setTutorialComplete={setTutorialComplete} />
        ) : (
          <Tutorial setTutorialComplete={setTutorialComplete} />
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
