import React, { useEffect, useState } from "react";

import SnippetCard from "../model/SnippetCard.js";

const CodeContext = React.createContext({
  isLoggedIn: false,
  loggingIn: false,
  feedArr: [],
  filteredVault: [],
  getAction: () => {},
  editAction: () => {},
  postAction: () => {},
  filterAction: () => {},
  onSearch: () => {},
  onVault: () => {},
  onLogin: () => {},
});

const exampleData = [
  {
    UserID: "test",
    snippet: [
      {
        id: 1,
        title: "tester",
        codeSnippet: "function test (){console.log('something')}",
        user: "boggart",
      },
      {
        id: 2,
        title: "testing",
        codeSnippet: "console.log('jkasdlas')",
        user: "boggart",
      },
      {
        id: 3,
        title: "tpest",
        codeSnippet: "console.log('iuasdjiksl)",
        user: "boggart",
      },
    ],
  },
  {
    UserID: "test2",
    snippet: [
      {
        id: 1,
        title: "tester2",
        codeSnippet: "console.log('Hello sajkd')",
        user: "boggart",
      },
      {
        id: 2,
        title: "testing2",
        codeSnippet: "console.log('djskadasd')",
        user: "boggart",
      },
      {
        id: 3,
        title: "tpest2",
        codeSnippet: "console.log('Hello')",
        user: "boggart",
      },
    ],
  },
];

export const CodeContextProvider = (props) => {
  const [filteredVault, setFilterVault] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);

  const alreadyLoggedInHandler = () => {
    //check Vault or local cache if already logged in
  };

  const filterVaultHandler = (userText) => {
    exampleData.forEach((item) => {
      console.log(userText);
      if (item["UserID"] === userText) {
        console.log(item["snippet"]);
        setFilterVault(item["snippet"]);
        setFilteredArr(item["snippet"]);
      }
    });
  };

  // filters the array base on search input
  const filterActionHandler = (text) => {
    console.log("filteredActionHandler");
    if (!text) {
      console.log("if");
      console.log(filteredVault);
      setFilteredArr(filteredVault);
    } else {
      console.log(filteredVault.filter((item) => item.title.includes(text)));
      setFilteredArr(filteredArr.filter((item) => item.title.includes(text)));
    }
  };

  const onSearchHandler = (text) => {
    console.log(text);
    filterActionHandler(text);
  };

  const onLoginHandler = (status) => {
    setLoginStatus(status);
  };

  const onVaultHandler = (text) => {
    console.log(text);
    for (let item of exampleData) {
      console.log(item);
      if (item["UserID"] === text) {
        filterVaultHandler(item["UserID"]);
        console.log("hereAgain", item["UserID"]);
        onLoginHandler(false);
      }
    }
  };

  useEffect(() => {
    filterActionHandler();
    console.log(
      new SnippetCard(
        "something",
        3,
        "javascript",
        "print javascript",
        'console.log("testClass")',
        "boggartina"
      )
    );
    console.log("used");
  }, []);

  return (
    <CodeContext.Provider
      value={{
        feedArr: filteredArr,
        loggingIn: loginStatus,
        filterAction: filterActionHandler,
        onSearch: onSearchHandler,
        onLogin: onLoginHandler,
        onVault: onVaultHandler,
      }}
    >
      {props.children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
