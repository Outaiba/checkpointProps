import React from "react";
import Profile from "./Profile";

function Test(props) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>{props.persone.name}</h1>
      <h1>{props.persone.age}</h1>
      {props.children}
    </div>
  );
}

export default Test;
