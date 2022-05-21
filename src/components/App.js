import React, { useState } from "react";
import Header from "./Header";
import Gameboard from "./Gameboard";
import Tutorial from "./Tutorial";

function App() {
  const [tutorialComplete, setTutorialComplete] = useState(false);
  return (
    <div className="App">
      <Header />
      {tutorialComplete ? (
        <Gameboard />
      ) : (
        <Tutorial setTutorialComplete={setTutorialComplete} />
      )}
    </div>
  );
}

export default App;
