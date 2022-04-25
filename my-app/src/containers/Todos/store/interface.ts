import { addSyntheticLeadingComment } from "typescript";

export enum EOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface IFilterSerchSettings {
  sortBy: keyof ITodo;
  search: string;
  order: EOrder;
}

export interface ITodo {
  id?: number;
  title: string;
  createAt: Date;
  completed: boolean;
}

export interface IFilterSettings {
  completed: boolean | null;
}

export interface ITodosState {
  todos: ITodo[];
  error: null | string;
  loading: boolean;
  todo: ITodo | null;
  filterSettings: IFilterSettings;
  filterSearchSettings: IFilterSerchSettings;
}
