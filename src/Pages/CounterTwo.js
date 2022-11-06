import React from "react";
import { Helmet } from "react-helmet-async";
import Foot from "../Components/Foot";
import ReducerCounter from "./ReducerCounter";

const CounterTwo = () => {
  //throw new Error()
  return (
    <>
      <Helmet>
        <title>Counter: with useReducer</title>
        <meta
          name="description"
          content="The counter app created with useReducer hoook in React"
        />
        <link rel="canonical" href="/countertwo" />
      </Helmet>
      <ReducerCounter />
      <Foot />
    </>
  );
};

export default CounterTwo;
