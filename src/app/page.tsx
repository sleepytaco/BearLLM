import {
  CornerDownLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageBubble } from "@/components/message-bubble"
import prisma from "@/lib/db"
import { addMessage } from "@/actions/actions"
import { useActionState } from "react"

export default async function Home() {
  const messages = await prisma.message.findMany();
  const [error, action, isPending] = useActionState(addMessage, null);

  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        className="relative hidden flex-col items-start gap-8 md:flex"
      >
        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Food Inventory
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="inventory">What is in your fridge right now?</Label>
              <Textarea
                id="inventory"
                placeholder="You are a..."
                className="min-h-[9.5rem]"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="allergies">Any allergies to keep in mind?</Label>
              <Textarea
                id="allergies"
                placeholder="You are a..."
                className="min-h-[9.5rem]"
              />
            </div>
          </fieldset>
          
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Recent Recipies
            </legend>
            <div className="grid gap-3">
              
            </div>
            <div className="grid gap-3">

            </div>
          </fieldset>

        </form>
      </div>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        {/* <Badge variant="outline" className="absolute right-3 top-3">
          Output
        </Badge> */}
        <div className="chat-container">
          <div className="messages-container">
            {
              messages.map((message) => (
              <MessageBubble key={message.id} message={message.content} isLLM={message.isLLM} isLoading={false} />))
            }
            {
              isPending ?
              <MessageBubble message={"Loading..."} isLLM={true} isLoading={true} />
              :
              <></>
            }
          </div>
        </div>
        <form action={action}
          className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        >
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Ask Bear to generate a new recipie, ask him questions about a generated recipie, etc..."
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
  )
}
