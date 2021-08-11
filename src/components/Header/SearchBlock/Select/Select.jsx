import React from 'react'
import styles from "./Select.module.scss";


const Select = (props) => {
  return (
    <>
      <select className={styles.select}>
        <option className={styles.option} value="1">All categories</option>
        <option className={styles.option} value="2">Fruits</option>
        <option className={styles.option} value="3">Fish</option>
        <option className={styles.option} value="3">Drinks</option>
        <option className={styles.option} value="3">Meat</option>
        <option className={styles.option} value="3">Grow food</option>
      </select>
    </>
  );
};

export default Select;
