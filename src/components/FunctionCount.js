import React, { useState } from "react";

export default function FunctionCount() {
  let [count, setCount] = useState(0);
  if (count < 1) {
    count = 0;
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            opacity: "0.7",
            borderRadius: "50%",
            backgroundSize: "cover",
            margin: "2px"
          }}
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            opacity: "0.7",
            borderRadius: "50%",
            backgroundSize: "cover",
            margin: "2px"
          }}
        >
          -
        </button>
        <button
          onClick={() => setCount((count = 0))}
          style={{
            opacity: "0.7",
            borderRadius: "50%",
            backgroundSize: "cover",
            margin: "2px"
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
