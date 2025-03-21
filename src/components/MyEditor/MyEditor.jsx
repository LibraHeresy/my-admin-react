import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import PropTypes from "prop-types";
function MyEditor({ value, onInput }) {
  // editor 实例
  //   const [editor, setEditor] = (useState < IDomEditor) | (null > null); // TS 语法
  const [editor, setEditor] = useState(null); // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState("");

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml("");
    }, 1500);
  }, []);

  // 工具栏配置
  //   const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  const toolbarConfig = {}; // JS 语法

  // 编辑器配置
  //   const editorConfig: Partial<IEditorConfig> = {
  // TS 语法
  const editorConfig = {
    // JS 语法
    placeholder: "请输入内容...",
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor, setEditor]);

  useEffect(() => {
    onInput(html);
  }, [html, onInput]);

  useEffect(() => {
    setHtml(value);
  }, []);

  return (
    <>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: "300px", overflowY: "hidden" }}
        />
      </div>
    </>
  );
}

MyEditor.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func,
};

export default MyEditor;
