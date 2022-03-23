import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div key={actor.name}>
            <h2>Name: {actor.name}</h2>
            <ul>
              {actor.movies.map((item) => <li key={item}>{item}</li>
              )}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Actors;
