import React from "react";

function Title(props) {
  return (
    <div className="title">
      <h1>{props.heading}</h1>
      <p>{props.subtext}</p>
    </div>
  );
}

export default Title;
