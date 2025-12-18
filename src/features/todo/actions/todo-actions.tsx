"use server";

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
    const title = formData.get("title") as string;

    //TODO: バリデーション
    if (!title) {
        return;
    }
    try {
        await prisma.todo.create({
            data: {
                title: title,
                isDone: false,
            },
        });

        revalidatePath("/");
    } catch (error) {
        console.error("DBでエラーだよん", error);
    }
}

export async function deleteTodo(id: number) {
    await prisma.todo.delete({
        where: { id },
    });
    revalidatePath("/");
}

export async function toggleTodo(id: number, isDone: boolean) {
    await prisma.todo.update({
        where: { id },
        data: { isDone: !isDone },
    })
    revalidatePath("/");
}