import React from "react";
import { useSelector } from "react-redux";

import { Redirect } from "react-router";
// import { getFlagAuth } from "@containers/";
export const RequiredAuthHOC = (ComposedComponent: any) => {
  const isAuth = true; //???chench
  return (props: any) => {
    return isAuth ? <ComposedComponent {...props} /> : <Redirect to="/login" />;
  };
};
