import React from "react";
import { Helmet } from "react-helmet-async";
import Foot from "../Components/Foot";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Counter: Error</title>
        <meta name="description" content="This page is not found" />
        <link rel="canonical" href="*" />
      </Helmet>
      <div className="error">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <Foot />
    </>
  );
};

export default ErrorPage;
