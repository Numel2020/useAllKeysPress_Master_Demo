import React from "react";
import { Logo } from "./utilities";

export function Copyright() {
  return (
    <div className="flex-copyright">
      <Logo />
    </div>
  );
}

export function Link() {
  return (
    <div className="flex-link">
      <h4>
        <a href="https://github.com/Numel2020/useAllKeysPress">
          useAllKeysPress
        </a>
      </h4>
    </div>
  );
}

export function UserOutput({ items, combine = false }) {
  const inputItems = items.map((item, index) => (
    <div
      className={
        item.input
          ? `output-item active ${combine ? "combine" : ""}`
          : "output-item"
      }
      key={index}
    ></div>
  ));

  return (
    <div className="flex-userInput">
      <h5>User outputs</h5>
      <div id="output">{inputItems}</div>
    </div>
  );
}
