import React from "react";
import { Key, Plus, Emoji, Letter } from "./utilities";

export function UseAllKeypad({ inputs, type = "single" }) {
  const singleKeyList = inputs.map((item, index) => (
    <Key name={item.key} item={item.input} key={index} />
  ));

  const multiKeyList = inputs.map((item, index) => {
    let plusItem = null;
    if (index !== inputs.length - 1) {
      plusItem = <Plus item={item.input} />;
    }

    return (
      <React.Fragment key={index}>
        <Key name={item.key} item={item.input} key={index} />
        {plusItem}
      </React.Fragment>
    );
  });

  let selectedList = null;
  if (type === "single") {
    selectedList = singleKeyList;
  }

  if (type === "multi") {
    selectedList = multiKeyList;
  }

  return <div className="flex-navigation">{selectedList}</div>;
}

export function Screen({
  activate,
  input,
  message = "",
  combine = false,
  type = "single",
  children
}) {
  let selectedList = null;
  let className = "";
  let monitorSatus = "";

  const singleInputItems = input.map(
    (item, index) => item.input && <Emoji symbol={item.symbol} key={index} />
  );

  // the mj example of multiple key detection
  const jacksonInputItems = input.map(
    (item, index) => item.input && <Letter key={index} text={item.key} />
  );

  if (type === "single") {
    selectedList = singleInputItems;
    className = "monitorOff";
  }

  if (type === "jackson") {
    selectedList = jacksonInputItems;
    className = "monitorOff jacksonFiveSing";
    monitorSatus = "jacksonFiveSing";
  }

  return (
    <div className="flex-container">
      <div className="flex-screen">
        {children}
        {activate ? (
          <div
            className={
              combine ? "monitor jacksonFiveABC" : `monitor ${monitorSatus}`
            }
          >
            {selectedList}
          </div>
        ) : (
          <div className={className}>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
