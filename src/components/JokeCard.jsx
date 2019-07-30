import React from "react";

export default function JokeCard(props) {
  console.log(props.setIsUpdating);
  const clicker = () => {
    props.setUpdate(props.joke);
    props.setIsUpdating(true);
  };

  return (
    <div>
      <p>
        <strong>Title </strong> {props.joke.name}
      </p>
      <p>
        <strong>Description: </strong> {props.joke.description}
      </p>
      <button onClick={clicker}>Update</button>
    </div>
  );
}
