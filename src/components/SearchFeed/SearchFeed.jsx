import React, { useContext } from "react";
import styles from "./SearchFeed.module.css";
import CodeContext from "../../store/code-context";

const SearchFeed = (props) => {
  const codeCtx = useContext(CodeContext);

  const searchChangeHandler = (event) => {
    console.log(event.target.value);
    codeCtx.onSearch(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search Title"
        onChange={searchChangeHandler}
      />
    </div>
  );
};

export default SearchFeed;
