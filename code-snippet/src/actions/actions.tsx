"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const handleCreateSnippet = async (
  prevState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    if (typeof title !== "string" || title.length < 4) {
      return {
        message: "OOPS!! looks like Title is empty or less than 4 character",
      };
    }
    if (typeof code !== "string" || title.length < 2) {
      return { message: "OOPS! looks like code is empty" };
    }

    const newSnippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    throw new Error("Oops!! something went wrong");
    console.log("data created", newSnippet);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
  }
  redirect("/");
};
export async function SaveSnippet(id: number, code: string) {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  redirect(`/snippet/${id}`);
}

export async function deleteSnippet(id: number) {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  redirect("/");
}
