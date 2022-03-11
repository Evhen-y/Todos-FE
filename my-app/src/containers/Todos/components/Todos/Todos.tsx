import React, { useState, useEffect} from "react";
import { ITodo } from "../../store/interface";
import {todosActions, getTodos, getTodosFilter, getFilterSettings} from "@containers/"
import {useSelector, useDispatch} from "react-redux"
const Todos = () => {
  // const [todos, setTodos] = useState<ITodo[] | undefined>([
  //   {
  //     id: 1,
  //     text: "Todo 001",
  //     createAt: new Date(),
  //     complited: false,
  //   },
  // ]);
  const [searchSrt, setSearchStr] = useState("")
  const todos :ITodo[] = useSelector(getTodosFilter())
  const dispatch = useDispatch()

  const filterSettings = useSelector(getFilterSettings())
  // const applyFilteredTodos = useSelector(getTodosFilter())

  // console.log("applyFilteredTodos", applyFilteredTodos)
 
  // const handleChanch = (e: any) => {
  //   const {trget: {value}} = e 
  //   setSearchStr(value)
  //   }
  //   

  // })

  const searchHandler = () => {
    dispatch(todosActions.TODO_FILTER.REQUEST({...filterSettings, search: searchSrt} 
    //   ()=>{
    //        dispatch(todosActions.FETCH_TODOS.REQUEST({}))
    // }
    ))
  }
  return (
    <div>
        <input value={searchSrt} type="text" onChange={e => setSearchStr(e.target.value)}/>
        <button onClick={searchHandler}>SEARCH</button>
       
       

      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </div>
  );
};

export default Todos;



 {/* {applyFilteredTodos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))} */}