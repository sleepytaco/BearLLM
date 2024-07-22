"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function addMessage(formData: FormData) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    await prisma.message.create({
        data: {
            content: formData.get("message") as string,
            isLLM: false,
        },
    });

    return null
}