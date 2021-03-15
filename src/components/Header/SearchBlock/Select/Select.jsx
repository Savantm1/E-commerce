import React from 'react'
import styles from "./Select.module.scss";


const Select = (props) => {
  return (
    <>
      <select className={styles.select}>
        <option className={styles.option} value="1">All categories</option>
        <option className={styles.option} value="2">p2</option>
        <option className={styles.option} value="3">p3</option>
      </select>
    </>
  );
};

export default Select;
