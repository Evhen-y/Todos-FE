import React, { useState } from "react";
import { ITodo } from "../../store/interface";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[] | undefined>([
    {
      id: 1,
      text: "Todo 001",
      createAt: new Date(),
      complited: false,
    },
  ]);

  return (
    <>
      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </>
  );
};

export default Todos;
