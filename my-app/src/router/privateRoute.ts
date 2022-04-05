import { ROUTER_PATH } from "./constans";
import { TodoContainers, UserContainer } from "@containers/";

export const privateRouter = (userRole: string) =>
  [
    {
      path: ROUTER_PATH.TODOS,
      exact: true,
      component: TodoContainers,
      children: [],
      icon: "",
      label: "",
      acl: ["ADMIN", "MANAGER"],
    },
    {
      path: ROUTER_PATH.USERS,
      exact: true,
      component: UserContainer,
      children: [],
      icon: "",
      label: "",
      acl: ["ADMIN"],
    },
  ].filter((route) => route.acl.includes(userRole) || !route.acl.length);
