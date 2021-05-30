import React from "react";

const CodeContext = React.createContext({
  feedArr: [],
});

export const CodeContextProvider = (props) => {
  return (
    <CodeContext.Provider value={{ feedArr: [] }}>
      {props.children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
