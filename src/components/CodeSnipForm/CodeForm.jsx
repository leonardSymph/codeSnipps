import React from "react";
import styles from "./CodeForm.module.css";
import useHttp from "../../hooks/use-http";

const CodeForm = (props) => {
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
    });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="user" placeholder="name" />
          <textarea type="text" name="inputText" spellCheck="false"></textarea>
          <button type="submit">done</button>
        </form>
      </div>
    </>
  );
};

export default CodeForm;
