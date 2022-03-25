import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function Editor({ data, setState, readonly }) {
  const [editor, setEditor] = useState(null);

  // console.log("data", data);
  // console.log("readonly", readonly);

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
    // let pause = null;
    if (data !== undefined || null) {
      content = data;
    }

    // if (readonly === true) {
    //   // pause = readonly;
    //   editor.readOnly.toggle();
    // }

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
        minHeight: 0,
        readOnly: readonly || false,
        maxWidth: "auto",
      })
    );
    console.log("editor", editor);
    // console.log("data", data);
  };
  const onSave = async (e) => {
    e.preventDefault();
    let data = await editor.saver.save();
    console.log("data", data);
    setState(data);
  };

  return (
    <div>
      {!readonly && (
        <Button variant={"contained"} onClick={(e) => onSave(e)}>
          Save
        </Button>
      )}
      <div
        id={"editorjs"}
        onChange={(e) => editor.onChange(e)}
        className={`ce-toolbar__content ce-block__content cdx-block`}
      ></div>
    </div>
  );
}
export default Editor;
