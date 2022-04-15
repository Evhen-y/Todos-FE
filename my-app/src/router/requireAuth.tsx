import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const RequiredAuthHOC = (ComposedComponent: any) => {
  return (props: any) => {
    const isAuthentificate = true;
    console.log(111, ComposedComponent)

    return isAuthentificate ? <ComposedComponent {...props} /> : <Redirect to="/login" />;
  };
};
