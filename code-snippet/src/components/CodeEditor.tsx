"use client";
import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

import type { Snippet } from "@/generated/prisma";
import { useState } from "react";
import * as actions from "@/actions/actions";
const CodeEditor = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  // you cannot use use server here because it is a client component so have to create a separate actions file and export it from their
  const saveSnippetAction = actions.SaveSnippet.bind(null, snippet.id, code);

  const handleChangeSnippet = (value: string = "") => {
    setCode(value);
  };
  return (
    <>
      <div>
        <form
          className="flex items-center justify-between"
          action={saveSnippetAction}
        >
          <h1 className="font-extrabold text-2xl">Code.</h1>

          <Button type="submit" variant={"secondary"}>
            save
          </Button>
        </form>
      </div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleChangeSnippet}
      />
    </>
  );
};
export default CodeEditor;
