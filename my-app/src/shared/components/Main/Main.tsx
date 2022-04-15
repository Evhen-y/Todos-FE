import React from "react";
import { RequiredAuthHOC } from "../../../router";
console.log("RequiredAuthHOC", RequiredAuthHOC);
interface IMainProps {
  children: any;
}

export default RequiredAuthHOC(({ children }: IMainProps) => <>{children}</>);
