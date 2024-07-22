"use client"

import { FC, ChangeEvent, useState   } from 'react'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useUserPreferenceContext } from '@/contexts/user-preference-context'

interface UserPreferenceProps { }

interface UserPreferenceState {
	foodInventory: string
	kitchenInventory: string
	otherPreferences: string
}

const UserPreference: FC<UserPreferenceProps> = ({}) => {
    const { setUserPreference } = useUserPreferenceContext();

    const handlePreferenceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setUserPreference(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }
    return (
        <>
            <section className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                Your Preferences
                </legend>
                <div className="grid gap-3">
                <Label htmlFor="foodInventory">What is in your pantry right now?</Label>
                <Textarea
                    id="foodInventory"
                    name="foodInventory"
                    onChange={handlePreferenceChange}
                    placeholder="Bread, Eggs (2 dozen), Milk, Butter (10g), Onions, ..."
                    className="min-h-[7.5rem]"
                />
                </div>
                <div className="grid gap-3">
                <Label htmlFor="kitchenInventory">What kitchen tools do you have at your disposal?</Label>
                <Textarea
                    id="kitchenInventory"
                    name="kitchenInventory"
                    onChange={handlePreferenceChange}
                    placeholder="Knives, 2 sauce pans, ..."
                    className="min-h-[7.5rem]"
                />
                </div>
                <div className="grid gap-3">
                <Label htmlFor="otherPreferences">Any other things to keep in mind while generating a recipe?</Label>
                <Textarea
                    id="otherPreferences"
                    name="otherPreferences"
                    onChange={handlePreferenceChange}
                    placeholder="I have a peanut allergy, I don't like anything too oily, ..."
                    className="min-h-[7.5rem]"
                />
                </div>
            </fieldset>
            
            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                Saved Preferences
                </legend>
                <div className="grid gap-3">
                
                </div>
                <div className="grid gap-3">

                </div>
            </fieldset>

            </section>
        </>
    )
}

export default UserPreference