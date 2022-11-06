import React from "react";
import { Helmet } from "react-helmet-async";
import Body from "./Body";
import Foot from "./Foot";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Counter:useCounter hook</title>
        <meta name="description" content="The official counter app homepage" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Body />
      <Foot />
    </>
  );
};

export default Home;
