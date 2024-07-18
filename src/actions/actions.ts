"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function addMessage(formData: FormData) {
    await prisma.message.create({
        data: {
            content: formData.get("message") as string,
            isLLM: false,
        },
    });

    revalidatePath("/"); // re-renders the page with latest data
}