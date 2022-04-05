import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "@containers/";
import styles from "./styles.module.scss";

const AddTodo = (props: any) => {
  const [value, setValue] = useState<string>("");
  const disputch = useDispatch();
  const handleChanch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const onKeyPress = ({ which, key }: any) => {
    if (which === 13 && key === "Enter" && value !== "") {
      disputch(
        todosActions.ADD_TODO.REQUEST({
          id: new Date().getTime(),
          title: value,
          createAt: "1",
          complited: false,
        }),
      );
      setValue("");
    }
  };
  return (
    <div className={styles.addTodo}>
      <input
        onKeyPress={onKeyPress}
        onChange={handleChanch}
        value={value}
        type="text"
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default AddTodo;
