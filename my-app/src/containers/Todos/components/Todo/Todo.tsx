import React from "react";
import styles from "./styles.module.scss";

interface ITodoProps {
  id: number;
  title: string;
}
const Todo = ({ id, title }: ITodoProps) => (
  <div className={styles.todo} key={id}>
    {title}
  </div>
);

export default Todo;
