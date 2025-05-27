import CodeEditor from "@/components/CodeEditor";
import { prisma } from "@/lib/prisma";

const EditSnippet = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) return <h1>no snippet found</h1>;

  return (
    <div className="mx-auto container flex flex-col gap-4">
      <CodeEditor snippet={snippet} />
    </div>
  );
};
export default EditSnippet;
