import React from "react";
import styles from "./styles.module.scss";

const Filters = () => (
  <div className={styles.filters}>
    <div className={styles.selectItems}> 3 item select</div>
    <div className={styles.filter}>
      <div> All</div>
      <div>Active</div>
      <div>Compledet</div>
    </div>
  </div>
);

export default Filters;
