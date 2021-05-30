import React from "react";
import AceEditor from "react-ace";

// editor styles
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools";

import styles from "./Editor.module.css";

const Editor = (props) => {
  const onChange = (newValue) => {
    props.onEditor(newValue);
  };

  const changeLangHandler = (event) => {
    props.onLanguage(event.target.value);
  };

  return (
    <div>
      <div className={styles.select}>
        <select name="language" id="progLang" onChange={changeLangHandler}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>
      <AceEditor
        className={styles.test}
        mode="javascript"
        // theme="github"
        theme="nord_dark"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </div>
  );
};

export default Editor;
