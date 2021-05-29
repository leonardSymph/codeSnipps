import React, { useState, useEffect } from "react";
import Highlight from "react-highlight";
import styles from "./CodeFeed.module.css";

import useHttp from "../../hooks/use-http";

const CodeFeed = (props) => {
  const [tasks, setTasks] = useState([]);

  const httpData = useHttp();
  console.log(httpData);

  const { sendRequest: fetchTasks } = httpData;

  useEffect(() => {
    const transformTask = (taskObject) => {
      const loadedTasks = [];

      for (const taskKey in taskObject) {
        // loadedTasks.push({ id: taskKey, text: taskObject[taskKey].text });
        loadedTasks.push({
          title: taskObject[taskKey].snippet.title,
          user: taskObject[taskKey].snippet.user,
          codeSnippet: taskObject[taskKey].snippet.codeSnippet,
        });
        console.log(taskObject[taskKey].snippet.title);
        console.log(loadedTasks);
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://codesnippet-29f37-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      },
      transformTask
    );
  }, [fetchTasks]);

  console.log(tasks);

  return (
    <>
      {tasks.map((item) => {
        if (item < 0) {
          return <h2>No post</h2>;
        } else {
          return (
            <div className={styles.feed}>
              <div>
                <h2>{item.title}</h2>
              </div>
              <Highlight className="javascript">{item.codeSnippet}</Highlight>
              <div>
                <p>{item.user}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default CodeFeed;
