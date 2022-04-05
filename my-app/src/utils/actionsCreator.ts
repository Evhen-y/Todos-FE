import { TYPES } from "./actionsTypeCreator";
import { AnyAction } from "redux";

interface IActions {
  [key: string]: { [key: string]: (payload: Object, options?: Object, cb?: () => void) => AnyAction };
}

export const actionsCreator = (aType: string[]): IActions => {
  const response: IActions = {};
  aType.forEach((at) => {
    response[at] = {};
    TYPES.forEach((t) => {
      response[at][t] = (payload: Object, options?: Object, cb?: () => void) => ({
        type: `${at}_${t}`,
        payload,
        cb,
        options,
      });
    });
  });
  return response;
};
