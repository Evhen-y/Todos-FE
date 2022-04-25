import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions, ITodo, AddTodo } from "@containers/";
import styles from "./styles.module.scss";

const Todo = (props: ITodo) => {
  const { id, title, completed } = props;
  const disputch = useDispatch();
  const [editMode, setEditMode] = useState<boolean>(false);
  const removeTodo = () => {
    disputch(todosActions.REMOVE_TODO.REQUEST(id as number));
    disputch(todosActions.FETCH_TODOS.REQUEST({}))
  };

  const onChangeHandler = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    disputch(todosActions.EDIT_TODO.REQUEST({ ...props, completed: checked }));
    disputch(todosActions.FETCH_TODOS.REQUEST({}))
  };

  const doubleClickTodo = (e: any) => setEditMode((state) => !state);

  return (
    <div className={styles.todo} key={id}>
      {editMode ? (
        <AddTodo onClose={() => setEditMode(false)} {...props} />
      ) : (
        <>
          <input type="checkbox" id={id?.toString()} checked={completed} onChange={onChangeHandler} />
          <label onDoubleClick={doubleClickTodo}>{title}</label>
          <button onClick={removeTodo}>Remove</button>
        </>
      )}
    </div>
  );
};

export default Todo;
