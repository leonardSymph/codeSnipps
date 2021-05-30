import React, { useEffect, useState } from "react";

const CodeContext = React.createContext({
  isLoggedIn: false,
  feedArr: [],
  getAction: () => {},
  editAction: () => {},
  postAction: () => {},
  filterAction: () => {},
  onSearch: () => {},
});

const exampleData = [
  {
    UserID: "test",
    snippet: [
      {
        title: "tester",
        data: "someData",
      },
      {
        title: "testing",
        data: "someData2",
      },
      {
        title: "tpest",
        data: "some",
      },
    ],
  },
  {
    UserID: "test2",
    snippet: [
      {
        title: "tester2",
        data: "someData",
      },
      {
        title: "testing2",
        data: "someData2",
      },
      {
        title: "tpest2",
        data: "some",
      },
    ],
  },
];

export const CodeContextProvider = (props) => {
  const [filteredArr, setFilteredArr] = useState([]);

  // filters the array base on search input
  const filterActionHandler = (text) => {
    if (!text) {
      // const initData = exampleData.map((item) => item);
      // setFilteredArr(initData);
    } else {
      const filtered = exampleData.filter((item) => item.title.includes(text));
      setFilteredArr((prev) => filtered);
    }
  };

  const onSearchHandler = (text) => {
    console.log(text);
    filterActionHandler(text);
  };

  useEffect(() => {
    filterActionHandler();
    console.log("used");
  }, []);

  return (
    <CodeContext.Provider
      value={{
        feedArr: filteredArr,
        filterAction: filterActionHandler,
        onSearch: onSearchHandler,
      }}
    >
      {props.children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
