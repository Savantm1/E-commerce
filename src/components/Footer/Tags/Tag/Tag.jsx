import React from "react";
import styles from "./Tag.module.scss";

const Tag = (props) => {
  return (
    <div className={styles.tag_block}>
      <p className={styles.tag_text}>{props.name}</p>
    </div>
  );
};

export default Tag;
