import React, { useState } from "react";
import styles from "./CodeForm.module.css";
import useHttp from "../../hooks/use-http";

import Editor from "../Editor/Editor";

const CodeForm = (props) => {
  const [editorCode, setEditorCode] = useState("");

  const { sendRequest: sendTaskRequest } = useHttp();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const name = event.target[1].value;
    const code = event.target[2].value;
    const userCode = "Test";

    sendTaskRequest({
      url: "https://codesnippet-29f37-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        User: userCode,
        snippet: {
          user: name,
          title: title,
          codeSnippet: code,
        },
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEditorHandler = (code) => {
    console.log(code);
    setEditorCode(code);
    console.log(editorCode);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="user" placeholder="name" />
          <textarea
            className={styles.hideText}
            type="text"
            name="inputText"
            spellCheck="false"
            value={editorCode}
          ></textarea>
          <Editor onEditor={onEditorHandler} />
          <button type="submit">done</button>
        </form>
      </div>
    </>
  );
};

export default CodeForm;
