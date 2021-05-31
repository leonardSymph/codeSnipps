import "./App.css";
import { useContext, useState, useEffect } from "react";

import CodeSnip from "./components/CodeSnipForm/CodeSnip";
import CodeFeed from "./components/CodeFeed/CodeFeed.jsx";
import SearchFeed from "./components/SearchFeed/SearchFeed.jsx";
import Login from "./components/User/Login";

import CodeContext from "./store/code-context.jsx";

function App() {
  const [codeActive, setCode] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [userActive, setUserActive] = useState(false);

  const codeCtx = useContext(CodeContext);

  const shareCodeHandler = () => {
    setCode((prevState) => !prevState);
  };

  const searchCodeHandler = () => {
    setSearchActive((prev) => !prev);
  };

  const userCodeHandler = () => {
    console.log("working");
    codeCtx.onLogin(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="navBar">
          <div className="Link" onClick={searchCodeHandler}>
            <h1>SearchCode</h1>
          </div>
          <div className="Link" onClick={shareCodeHandler}>
            <h1>ShareCode</h1>
          </div>
          <div className="Link" onClick={userCodeHandler}>
            <h1>VaultCode</h1>
          </div>
        </div>
        {searchActive ? <SearchFeed /> : ""}
        {codeActive ? <CodeSnip /> : ""}
        {codeCtx.loggingIn ? <Login /> : ""}
        <div>
          <CodeFeed />
        </div>
      </header>
    </div>
  );
}

export default App;
