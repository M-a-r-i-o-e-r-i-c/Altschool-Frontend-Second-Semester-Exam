import { useReducer } from "react";

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

function useCounter() {
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

  return [state, dispatch, increment, decrement, setValue, reset];
}

export default useCounter;
