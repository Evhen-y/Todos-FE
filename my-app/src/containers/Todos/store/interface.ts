import { addSyntheticLeadingComment } from "typescript";

export enum EOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface IFilterSettings {
  sortBy: keyof ITodo;
  search: string;
  order: EOrder;
}

export interface ITodo {
  id?: number;
  text: string;
  createAt: Date;
  complited: boolean;
}

export interface ITodosState {
  todos: ITodo[];
  error: null | string;
  loading: boolean;
  todo: ITodo | null;
  filterSettings: IFilterSettings;
}
