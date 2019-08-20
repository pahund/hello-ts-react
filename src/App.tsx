import React from "react";
import AceEditor from "react-ace";

export default () => (
  <div>
    <p>Hello world!</p>
    <AceEditor mode="javascript" theme="github" name="editor" value="// Hai!" />
  </div>
);
