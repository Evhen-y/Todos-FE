import { ROUTER_PATH } from "./constans";
import { TodoContainers, UserContainer } from "@containers/";

export const publicRouter = [
  {
    path: ROUTER_PATH.LOGIN,
    exact: true,
    component: null,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: ROUTER_PATH.REGISTRATION,
    exact: true,
    component: null,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: `${ROUTER_PATH.RESET}`, //:token
    exact: true,
    component: null,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: ROUTER_PATH.FORGOT,
    exact: true,
    component: null,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: `${ROUTER_PATH.ACTIVATION}`, //:token
    exact: true,
    component: null,
    children: [],
    icon: "",
    lable: "",
  },
];
