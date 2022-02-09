export interface ITodo {
  id?: number;
  text: string;
  createAt: Date;
  complited: boolean;
}

export interface ITodosInterface {
  todos: ITodo[];
  error: null | string;
  loading: boolean;
  todo: ITodo | null;
}
