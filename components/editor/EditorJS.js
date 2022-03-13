import { useEffect, useState } from "react";

function Editor({ data, setDescription }) {
  const [editor, setEditor] = useState(null);

  useEffect(() => initEditor(), []);

  const initEditor = () => {
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Embed = require("@editorjs/embed");
    const Delimiter = require("@editorjs/delimiter");
    const List = require("@editorjs/list");
    const InlineCode = require("@editorjs/inline-code");
    // const Table = require("@editorjs/table");
    const Quote = require("@editorjs/quote");
    const Code = require("@editorjs/code");
    const Marker = require("@editorjs/marker");
    const Checklist = require("@editorjs/checklist");
    const SimpleImage = require("@editorjs/simple-image");

    let content = null;
    if (data !== undefined) {
      content = data;
    }

    setEditor(
      new EditorJS({
        holder: "editorjs",
        logLevel: "ERROR",
        tools: {
          header: Header,
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
              },
            },
          },
          list: List,
          inlineCode: InlineCode,
          code: Code,
          // table: Table,
          quote: Quote,
          marker: Marker,
          checkList: Checklist,
          delimiter: Delimiter,
          simpleImage: SimpleImage,
        },

        data: content,
      })
    );
    console.log("editor", editor);
    // console.log("data", data);
  };
  const onSave = async (e) => {
    e.preventDefault();
    let data = await editor.saver.save();
    console.log("data", data);
    setDescription(data);
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Descriptions</h3>
      <button onClick={(e) => onSave(e)}>Save</button>
      <div id={"editorjs"} onChange={(e) => editor.onChange(e)}></div>
    </div>
  );
}
export default Editor;
