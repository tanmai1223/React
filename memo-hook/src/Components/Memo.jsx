import React, { useMemo } from "react";
import { useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveFunction = useMemo(() => {
    console.log("Calculating");
    let total = 0;
    for (let i = 0; i < 5; i++) {
      total = total + i;
    }
    return total ;
  },[count]);

  return (
    <div>
      <h2>ExpensiveFunction={expensiveFunction}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <input
        placeholder="Type something"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Memo;
