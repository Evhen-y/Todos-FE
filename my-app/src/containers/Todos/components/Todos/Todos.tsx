import React, { useState, useEffect } from "react";
import { ITodo } from "../../store/interface";
import { todosActions, getTodos, getTodosFilter, getFilterSettings } from "@containers/";
import { useSelector, useDispatch } from "react-redux";
const Todos = () => {
  const [searchSrt, setSearchStr] = useState("");
  const todos: ITodo[] = useSelector(getTodosFilter());
  const dispatch = useDispatch();

  const filterSettings = useSelector(getFilterSettings());

  const searchHandlerTodo = () => {
    dispatch(todosActions.TODO_FILTER.REQUEST({ ...filterSettings, search: searchSrt }));
  };
  return (
    <div>
      <input value={searchSrt} type="text" onChange={(e) => setSearchStr(e.target.value)} />
      <button onClick={searchHandlerTodo}>SEARCH</button>

      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </div>
  );
};

export default Todos;

{
  /* {applyFilteredTodos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))} */
}
