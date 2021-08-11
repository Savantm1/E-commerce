import React from "react";
import Search from "./Search/Search";
import styles from "./SearchBlock.module.scss";
import Select from "./Select/Select";

const SearchBlock = (props) => {
  return (
    <div className={styles.block}>
      <Select />
      <Search />
    </div>
  );
};

export default SearchBlock;
