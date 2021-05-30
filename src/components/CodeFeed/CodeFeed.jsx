import React, { useState, useEffect, useContext } from "react";
import Highlight from "react-highlight";

import Card from "../UI/Card";
import CodeContext from "../../store/code-context";

import useHttp from "../../hooks/use-http";

const CodeFeed = (props) => {
  const codeCtx = useContext(CodeContext);

  // original

  // const [tasks, setTasks] = useState([]);

  // const httpData = useHttp();

  // const { sendRequest: fetchTasks } = httpData;

  // useEffect(() => {
  //   const transformTask = (taskObject) => {
  //     const loadedTasks = [];

  //     for (const taskKey in taskObject) {
  //       console.log(taskKey);
  //       // loadedTasks.push({ id: taskKey, text: taskObject[taskKey].text });
  //       loadedTasks.push({
  //         id: taskKey,
  //         title: taskObject[taskKey].snippet.title,
  //         user: taskObject[taskKey].snippet.user,
  //         codeSnippet: taskObject[taskKey].snippet.codeSnippet,
  //       });
  //       console.log(loadedTasks);
  //     }

  //     setTasks(loadedTasks);
  //   };

  //   fetchTasks(
  //     {
  //       url: "https://codesnippet-29f37-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
  //     },
  //     transformTask
  //   );
  // }, [fetchTasks]);

  console.log(codeCtx);
  const tasks = codeCtx.feedArr;

  return (
    <>
      {tasks.map((item) => {
        return (
          <div key={item.id}>
            <Card>
              <div>
                <h2>{item.title}</h2>
              </div>
              <Highlight className="javascript">{item.codeSnippet}</Highlight>
              <div>
                <p>{item.user}</p>
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default CodeFeed;
