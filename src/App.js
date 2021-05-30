import "./App.css";
import { useState } from "react";

import CodeSnip from "./components/CodeSnipForm/CodeSnip";
import CodeFeed from "./components/CodeFeed/CodeFeed.jsx";
import SearchFeed from "./components/SearchFeed/SearchFeed.jsx";

function App() {
  const [codeActive, setCode] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const shareCodeHandler = () => {
    setCode((prevState) => {
      if (prevState) {
        return;
      } else {
        return !prevState;
      }
    });
  };

  const searchCodeHandler = () => {
    setSearchActive((prev) => !prev);
  };

  const userCodeHandler = () => {
    console.log("working");
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
            <h1>User</h1>
          </div>
        </div>
        {searchActive ? <SearchFeed /> : ""}
        {codeActive ? <CodeSnip /> : ""}
        <div>
          <CodeFeed />
        </div>
      </header>
    </div>
  );
}

export default App;
