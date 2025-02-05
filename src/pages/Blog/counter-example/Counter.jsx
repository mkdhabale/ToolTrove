import React from "react";
import CounterButton from "./CounterButton";
import CounterValue from "./CounterValue";

export default function ReduxCounter() {
  return (
    <div>
      <h1>Counter Redux Example</h1>
      <CounterButton />
      <CounterValue />
    </div>
  );
}
