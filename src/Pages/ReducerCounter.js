import React, { useReducer } from "react";

const initialValue = {
  count: 0,
  value: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: Number(state.count) + 1 };

    case "decrement":
      return { ...state, count: Number(state.count) - 1 };

    case "setValue":
      if (action.payload) {
        return { ...state, count: action.payload };
      }
      return initialValue;

    case "addValue":
      return { ...state, value: action.payload };

    case "reset":
      return initialValue;

    default:
      return state;
  }
}

export default function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  function setValue() {
    dispatch({ type: "setValue", payload: state.value });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="middle">
      <h1> Counter app created with useReducer</h1>
      <h2>{state.count}</h2>

      <div className="icons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div className="search-bar">
        <input
          type="number"
          id="set"
          value={state.value}
          onChange={(e) => {
            dispatch({ type: "addValue", payload: e.target.value });
          }}
          placeholder="Enter a number"
        />
      </div>
      <div className="icons">
        <button onClick={setValue}>Set Value</button>
        <button onClick={reset}> Reset</button>
      </div>
    </div>
  );
}
