import React from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "@containers/";
import styles from "./styles.module.scss";

interface ITodoProps {
  id: number;
  title: string;
}
const Todo = ({ id, title }: ITodoProps) => {
  const disputch = useDispatch();
  const removeTodo = () => {
    disputch(todosActions.REMOVE_TODO.REQUEST(id));
  };
  return (
    <div className={styles.todo} key={id}>
      {title}
      <button onClick={removeTodo}>Remove</button>
    </div>
  );
};

export default Todo;
