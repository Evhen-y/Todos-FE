import React, { ReactNode } from "react";
import { Header, Todods, Filters, Footer, AddTodo } from "@containers/";
import styles from "./styles.module.scss";

interface IComponentProps {
  chidren?: React.ReactNode;
}

const TodosContainer = (props: IComponentProps) => {
  return (
    <div>
      <Header />
      <div className={styles.containerTodos}>
        <AddTodo />
        <Todods />
        <Filters />
      </div>
      <Footer />
    </div>
  );
};

export default TodosContainer;
