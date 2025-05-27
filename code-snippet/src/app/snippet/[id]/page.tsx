import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import * as actions from "@/actions/actions";
import NotFound from "./not-found";
import { notFound } from "next/navigation";
type PreviewSnippetProps = { params: Promise<{ id: string }> };

const PreviewSnippet: React.FC<PreviewSnippetProps> = async ({ params }) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: id,
    },
  });
  if (!snippet) return notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet?.id);
  return (
    <div className="container mx-auto p-3">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-[#4EC9B0] text-xl capitalize">
          {snippet?.title}
        </h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="cursor-pointer">Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button
              type="submit"
              className="cursor-pointer"
              variant={"destructive"}
            >
              Delete
            </Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2>
          Your<span className="text-[#569CD6]"> Code.</span> &lt;/&gt;
        </h2>
        <pre className="bg-gray-800 p-5 rounded-md ">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
};
export default PreviewSnippet;
