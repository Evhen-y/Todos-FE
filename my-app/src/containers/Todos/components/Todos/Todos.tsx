import React, { useState, useEffect} from "react";
import { ITodo } from "../../store/interface";
import {todosActions, getTodos} from "@containers/"
import {useSelector} from "react-redux"
const Todos = () => {
  // const [todos, setTodos] = useState<ITodo[] | undefined>([
  //   {
  //     id: 1,
  //     text: "Todo 001",
  //     createAt: new Date(),
  //     complited: false,
  //   },
  // ]);
  const todos = useSelector(getTodos())
  return (
    <>
      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </>
  );
};

export default Todos;
