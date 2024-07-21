import {
    CornerDownLeft,
  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { addMessage } from "@/actions/actions"

export function SendMessageForm() {
    return (
        <>
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
        </>
    )
}