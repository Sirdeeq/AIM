/* eslint-disable react/prop-types */
import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function EditorCom({ stateData, setData }) {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setData(data);
  };
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={stateData?.toString()}
        onInit={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={handleEditorChange}
      />
     
    </>
  );
}
