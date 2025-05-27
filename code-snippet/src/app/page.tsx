import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="container mx-auto flex flex-col gap-3  px-4">
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold">Snippet</h1>
        <Link href={"/snippet/new"}>
          <Button className="cursor-pointer">Create new </Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div
          className="bg-gray-800 rounded-3xl w-full p-3 flex items-center justify-between"
          key={snippet.id}
        >
          <h2>{snippet.title}</h2>
          <Link href={`/snippet/${snippet.id}`}>
            <Button className="text-white cursor-pointer" variant={"link"}>
              View
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
