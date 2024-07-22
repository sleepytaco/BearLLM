import ChatContainer from "@/components/chat/chat-container"
import UserPreference from "@/components/forms/user-preference"
import SendMessageForm from "@/components/forms/send-message"

export default function ChatPage() {
    return (
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
                <UserPreference />
            </div>
            <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                <ChatContainer />
                <SendMessageForm />
            </div>
        </main>
    )
}
  