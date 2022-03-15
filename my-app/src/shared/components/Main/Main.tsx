import React from "react";
import { RequiredAuthHOC } from "../../../router";

interface IMainProps {
  children: any;
}

export default RequiredAuthHOC(({ children }: IMainProps) => <>{children}</>);
