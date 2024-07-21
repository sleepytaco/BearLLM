import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Label } from "@/components/ui/label"
import ChatContainer from "@/components/chat/chat-container"
import prisma from '@/lib/db';
import {
	CornerDownLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addMessage } from "@/actions/actions"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generate Recipes | The Bear",
  description: "The Bear is a LLM that will help you create recipes based on your preferences and answer any follow ups.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await prisma.message.findMany();

  return (
	<main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
	{children}
	<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
	  <ChatContainer initialMessages={messages}  />
		<form action={addMessage}
		className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
		>
		<Label htmlFor="message" className="sr-only">
			Message
		</Label>
		<Input
			id="message"
			name="message"
			placeholder="Ask Bear to generate a new recipe, ask him questions about a generated recipe, etc..."
			className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
		/>

		<div className="flex items-center p-3 pt-0">
			<Button type="submit" size="sm" className="ml-auto gap-1.5">
			Send Message
			<CornerDownLeft className="size-3.5" />
			</Button>
		</div>
	</form>

	</div>
  </main>
  );
}
