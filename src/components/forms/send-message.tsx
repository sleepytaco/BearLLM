"use client"

import { FC, FormEvent, useState } from 'react'
import { Label } from "@/components/ui/label"
import {
	CornerDownLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendMessage } from "@/actions/actions"
import { useUserPreferenceContext } from '@/contexts/user-preference-context'
import { ChatMessage } from '@/types/chat'

interface SendMessageFormProps {
    appendMessageToChat: (message: ChatMessage) => void
 }

const SendMessageForm: FC<SendMessageFormProps> = ({ appendMessageToChat }) => {
    const [message, setMessage] = useState("");
    const { userPreference } = useUserPreferenceContext();

    const context = 
    `Here is what is in user's food pantry:\n${userPreference.foodInventory}\n\nHere are the tools that the user's have at my disposal:\n${userPreference.kitchenInventory}\n\nHere are other preferences to keep in mind while generating a recipe:\n${userPreference.otherPreferences}` 
	
	const handleForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault() // to prevent page refresh
        
        // append user type message to chat container
        appendMessageToChat({
            content: message,
            context: context,
            isLLM: false
        });

        // send a request to llm with userMessage+userPreferencesContext
        // -> append llm response to chat container on success
        appendMessageToChat({
            content: context, // this should be the response from the LLM
            context: context,
            isLLM: true
        });
        // -> else toast an error message ?

        // finally, add user message and llm response message to prisma if llm did respond
		
	};

    return (
        <>
        <form onSubmit={handleForm}
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