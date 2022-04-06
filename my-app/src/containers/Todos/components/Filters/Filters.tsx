import React from "react";
import {todosActions, } from "@containers/"
import {useDispatch} from "react-redux"
import styles from "./styles.module.scss";

const Filters = () => {
    const disputch = useDispatch()
    const handleClick = (value: null | boolean) =>{
      disputch(todosActions.APPLY_FILTER_TODOS.REQUEST({complited: value}))
    }

  return (
    <div className={styles.filters}>
      <div className={styles.selectedItems}> 3 item select</div>
      <div className={styles.filter}>
        <div onClick={()=> handleClick(null)}> All</div>
        <div  onClick={()=> handleClick(true)}>Active</div>
        <div  onClick={()=> handleClick(false)}>Compledet</div>
      </div>
    </div>
  );
}


export default Filters;
