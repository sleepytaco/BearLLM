import UserPreferenceContextProvider from "@/contexts/user-preference-context";


export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
        <UserPreferenceContextProvider>{children}</UserPreferenceContextProvider>
        </>
    );
}
