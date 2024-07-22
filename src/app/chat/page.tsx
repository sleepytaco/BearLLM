"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import ChatContainer from "@/components/chat/chat-container"
import {
	CornerDownLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addMessage } from "@/actions/actions"
import { FormEvent, useState } from "react";

interface UserPreferenceState {
	foodInventory: string
	kitchenInventory: string
	otherPreferences: string
}

export default function ChatPage() {
	const [message, setMessage] = useState("");
	const [userPreference, setUserPreference] = useState<UserPreferenceState>({
		foodInventory: "",
		kitchenInventory: "",
		otherPreferences: ""
	});

	const handleForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
	};
  return (
	<main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">

      <div
        className="relative hidden flex-col items-start gap-8 md:flex"
      >
        <section className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Food Inventory
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="foodInventory">What is in your pantry right now?</Label>
              <Textarea
                id="foodInventory"
				name="foodInventory"
                placeholder="Bread, Eggs (2 dozen), Milk, Butter (10g), Onions, ..."
                className="min-h-[5.5rem]"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="kitchenInventory">What kitchen tools do you have at your disposal?</Label>
              <Textarea
                id="kitchenInventory"
				name="kitchenInventory"
                placeholder="Knives, 2 sauce pans, ..."
                className="min-h-[5.5rem]"
              />
            </div>
			<div className="grid gap-3">
              <Label htmlFor="otherPreferences">Any other things to keep in mind while generating a recipe?</Label>
              <Textarea
                id="otherPreferences"
				name="otherPreferences"
                placeholder="I have a peanut allergy, I don't like anything too oily, ..."
                className="min-h-[5.5rem]"
              />
            </div>
          </fieldset>
          
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Recent Recipes
            </legend>
            <div className="grid gap-3">
              
            </div>
            <div className="grid gap-3">

            </div>
          </fieldset>

        </section>
      </div>
	  <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
			<ChatContainer initialMessages={[]}  />
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
		</div>
	</main>
  )
}
  