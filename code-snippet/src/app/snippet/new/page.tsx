"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as actions from "@/actions/actions";
import { useActionState } from "react";
import { Divide } from "lucide-react";

const Snippet = () => {
  const [formStateData, action] = useActionState(actions.handleCreateSnippet, {
    message: "",
  });

  return (
    <div className="container mx-auto">
      <form action={action} className="flex flex-col gap-4 max-w-5xl mx-auto">
        <h1 className="font-semibold text-green-300 text-lg ">
          Create Snippet. &lt;/&gt;
        </h1>
        <Input placeholder="Enter code title" id="title" name="title" />
        <Textarea
          id="code"
          name="code"
          placeholder="Enter code here"
        ></Textarea>
        {formStateData.message && (
          <div className="bg-red-700 p-2 rounded-lg border-1">
            <i className="ri-error-warning-line"> </i>
            {formStateData.message}
          </div>
        )}
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
export default Snippet;
