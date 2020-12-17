import React from "react";
import Title from "./page/header";
import { UseAllKeypad, Screen } from "./page/main";
import { Copyright, Link, UserOutput } from "./page/footer";

import useAllKeysPress from "./hooks/useAllKeysPress";
import "./styles.css";

export default function App() {
  /**
   * KEYS SETUP
   */
  const akeyPress = useAllKeysPress({ userKeys: "a" });
  const bkeyPress = useAllKeysPress({ userKeys: "b" });
  const ckeyPress = useAllKeysPress({ userKeys: "c" });

  const combinePress = useAllKeysPress({
    userKeys: ["a", "b", "c"],
    order: true
  });

  /**
   * INPUTS
   */
  const inputs = [
    { input: akeyPress, key: "a" },
    { input: bkeyPress, key: "b" },
    { input: ckeyPress, key: "c" }
  ];

  /**
   * STATUS
   */
  const anyKeyPressed = inputs.some((item) => item.input === true);

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <Title
            heading={"Multiple keys in order"}
            subtext={"Press the keys and see."}
          />
        </header>
        <main>
          <UseAllKeypad inputs={inputs} type={"multi"} />

          <Screen
            activate={anyKeyPressed}
            input={inputs}
            combine={combinePress}
            type={"jackson"}
            message={"All you gotto do is repeat after me!!"}
          ></Screen>
        </main>
        <footer>
          <Link />
          <UserOutput items={inputs} combine={combinePress} />
          <Copyright />
        </footer>
      </div>
    </div>
  );
}
