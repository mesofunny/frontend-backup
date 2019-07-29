import React, { useState } from "react";
import "./App.css";
import Jokes from "./components/Jokes";
import JokeList from "./components/JokeList";

function App() {
  const [myJoke, setJokeList] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <>
      <h2>MeSoFunny</h2>
      <Jokes
        myJoke={myJoke}
        setJokeList={setJokeList}
        update={update}
        isUpdating={isUpdating}
      />
      <JokeList
        myJoke={myJoke}
        setUpdate={setUpdate}
        setIsUpdating={setIsUpdating}
      />
    </>
  );
}

export default App;
