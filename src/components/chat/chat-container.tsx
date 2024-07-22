import { FC } from 'react'
import { MessageBubble } from './message-bubble';
import { Message } from '@prisma/client';
import prisma from '@/lib/db';

interface ChatContainerProps {
    initialMessages?: Message[]
}

const ChatContainer: FC<ChatContainerProps> = ({ initialMessages }) => {
    // const [error, action, isPending] = useActionState(addMessage, null);
    const messages: Message[] = []; // await prisma.message.findMany();
    const isPending = true;
    return (
        <>
        <div className="chat-container">
            <div className="messages-container">
            {
                messages.map((message) => (
                <MessageBubble key={message.id} message={message.content} isLLM={message.isLLM} isLoading={false} />))
            }
            {
                isPending && <MessageBubble message={"Loading..."} isLLM={true} isLoading={true} />
            }
            </div>
        </div>

        </>
    )
}

export default ChatContainer;