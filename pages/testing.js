import { useState } from "react";
import dynamic from "next/dynamic";

let CustomEditor = dynamic(
  () => import("../components/editor/another/CustomEditor"),
  {
    ssr: false,
  }
);

const testing = () => {
  let [editorInstance, setEditorInstance] = useState({}); // to get the instance of editor.Js

  const handleInstance = (instance) => {
    setEditorInstance(instance);
  };

  const saveArticle = async (e) => {
    e.preventDefault();

    // get the editor.js content and save it to server
    const savedData = await editorInstance.save();

    console.log("savedData", savedData);
  };

  return (
    <>
      <button onClick={saveArticle}>Save</button>

      {CustomEditor && <CustomEditor handleInstance={handleInstance} />}
    </>
  );
};

export default testing;
