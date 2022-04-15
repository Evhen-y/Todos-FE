import { ROUTER_PATH } from "./constans";
import {
  TodoContainers,
  UserContainer,
  Login,
  Activation,
  ForgotPassword,
  ResetPassword,
  Registration,
} from "@containers/";

export const publicRouter = [
  {
    path: ROUTER_PATH.LOGIN,
    exact: true,
    component: Login,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: ROUTER_PATH.REGISTRATION,
    exact: true,
    component: Registration,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: `${ROUTER_PATH.RESET}`, //:token
    exact: true,
    component: ResetPassword,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: ROUTER_PATH.FORGOT,
    exact: true,
    component: ForgotPassword,
    children: [],
    icon: "",
    lable: "",
  },
  {
    path: `${ROUTER_PATH.ACTIVATION}`, //:token
    exact: true,
    component: Activation,
    children: [],
    icon: "",
    lable: "",
  },
];
