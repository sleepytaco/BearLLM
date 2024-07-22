"use client"

import React, { createContext, useContext, useState } from "react"

type UserPreferenceProviderProps = {
    children: React.ReactNode
};

export type UserPreferenceState = {
    foodInventory: string
	kitchenInventory: string
	otherPreferences: string
}

type UserPreferenceContext = {
	userPreference: UserPreferenceState
    setUserPreference: React.Dispatch<React.SetStateAction<UserPreferenceState>>
}

export const UserPreferenceContext = createContext<UserPreferenceContext | null>(null);

export default function UserPreferenceContextProvider({ children } : UserPreferenceProviderProps) {
    const [userPreference, setUserPreference] = useState<UserPreferenceState>({
		foodInventory: "",
		kitchenInventory: "",
		otherPreferences: ""
	});

    return (
        <UserPreferenceContext.Provider
            value={{
                userPreference,
                setUserPreference
            }}
        >
            {children}
        </UserPreferenceContext.Provider>
    )
}

export function useUserPreferenceContext() {
    const context = useContext(UserPreferenceContext)
    if (!context) {
        throw new Error("useUserPreferenceContext must be used within a UserPreferenceContext.Provider");
    }
    return context
}
