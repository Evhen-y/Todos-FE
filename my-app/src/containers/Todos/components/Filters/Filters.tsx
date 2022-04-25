import React from "react";
import { todosActions, getcountTodo } from "@containers/";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

const Filters = () => {
  const disputch = useDispatch();
  const countTodos = useSelector(getcountTodo());

  const clearcompletedTodo = () => {
    disputch(todosActions.REMOVE_TODO.SUCCESS(countTodos.map((t) => t.id)));
    // disputch(todosActions.FETCH_TODOS.REQUEST({}))
  };
  const handleClick = (value: null | boolean) => {
    disputch(todosActions.APPLY_FILTER_TODOS.REQUEST({ completed: value }));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.selectedItems}> {`${countTodos.length} Item${countTodos.length > 1 ? "s" : ""} left`}</div>
      <div className={styles.filter}>
        <div onClick={() => handleClick(null)}> All</div>
        <div onClick={() => handleClick(true)}>Active</div>
        <div onClick={() => handleClick(false)}>Compledet</div>
        <div onClick={clearcompletedTodo}>Clear Completed</div>
      </div>
    </div>
  );
};

export default Filters;
