import React from "react";

import CodeForm from "./CodeForm";

const CodeSnip = (props) => {
  const onFeedhandler = (data) => {
    props.onFeed(data);
  };

  return <CodeForm onFeed={onFeedhandler} />;
};

export default CodeSnip;
