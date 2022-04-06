import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions, ITodo, AddTodo } from "@containers/";
import styles from "./styles.module.scss";

const Todo = (props: ITodo) => {
  const { id, title, complited } = props;
  const disputch = useDispatch();
  const [editMode, setEditMode] = useState<boolean>(false);
  const removeTodo = () => {
    disputch(todosActions.REMOVE_TODO.REQUEST(id as number));
  };

  const onChangeHandler = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    disputch(todosActions.EDIT_TODO.REQUEST({ ...props, complited: checked }));
  };

  const doubleClickTodo = (e: any) => setEditMode((state) => !state);

  return (
    <div className={styles.todo} key={id}>
      {editMode ? (
        <AddTodo onClose={() => setEditMode(false)} {...props} />
      ) : (
        <>
          <input type="checkbox" id={id?.toString()} checked={complited} onChange={onChangeHandler} />
          <label onDoubleClick={doubleClickTodo}>{title}</label>
          <button onClick={removeTodo}>Remove</button>
        </>
      )}
    </div>
  );
};

export default Todo;
