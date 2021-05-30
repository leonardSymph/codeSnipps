import React from "react";
import styles from "./SearchFeed.module.css";

const searchFeed = (props) => {
  const searchChangeHandler = (event) => {
    console.log(event.target.value);
    // props.onSearch();
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search Title"
      onChange={searchChangeHandler}
    />
  );
};

export default searchFeed;
