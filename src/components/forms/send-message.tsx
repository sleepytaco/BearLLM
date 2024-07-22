"use client"

import { FC, FormEvent, useState } from 'react'
import { Label } from "@/components/ui/label"
import {
	CornerDownLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addMessage } from "@/actions/actions"

interface SendMessageFormProps { }

const SendMessageForm: FC<SendMessageFormProps> = ({}) => {
    const [message, setMessage] = useState("");
	
	const handleForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
	};
    return (
        <>
        <form action={addMessage} onSubmit={handleForm}
			className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
			>
            <Label htmlFor="message" className="sr-only">
                Message
            </Label>
            <Input
                id="message"
                name="message"
                value={message}
                placeholder="Ask Bear to generate a new recipe, ask him questions about a generated recipe, etc..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                onChange={(e) => {setMessage(e.target.value)}}
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

export default SendMessageForm