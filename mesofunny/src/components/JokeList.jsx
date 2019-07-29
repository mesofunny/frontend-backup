import React from "react";
import JokeCard from "./JokeCard";

export default function JokeList(props) {
  return (
    <div>
      {props.myJoke.map(joke => (
        <JokeCard
          joke={joke}
          setUpdate={props.setUpdate}
          setIsUpdating={props.setIsUpdating}
        />
      ))}
    </div>
  );
}
