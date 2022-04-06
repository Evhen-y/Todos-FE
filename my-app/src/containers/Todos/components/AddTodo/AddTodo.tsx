import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions, ITodo } from "@containers/";
import styles from "./styles.module.scss";

interface ITodoProps extends Partial<ITodo> {
  onClose?: Function;
}
const AddTodo = (props: any) => {
  const [value, setValue] = useState<string>("");
  const disputch = useDispatch();
  useEffect(() => {
    if (props?.id) {
      setValue(props.title as string);
    }
  }, [props?.id]);
  const handleChanch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const onKeyPress = ({ which, key }: any) => {
    if (which === 13 && key === "Enter" && value !== "") {
      if (props.id) {
        disputch(
          todosActions.EDIT_TODO.REQUEST(
            {
              ...props,
              title: value,
            },
            props.onClose(),
          ),
        );
      } else {
        disputch(
          todosActions.ADD_TODO.REQUEST({
            id: new Date().getTime(),
            title: value,
            createAt: "1",
            complited: false,
          }),
        );
      }

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
