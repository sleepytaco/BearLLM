"use client"

import { FC } from 'react'
import { MessageBubble } from './message-bubble';
import { Prisma } from '@prisma/client';

interface ChatContainerProps {
    initialMessages: Prisma.MessageGetPayload<Prisma.MessageDefaultArgs>[]
}

const ChatContainer: FC<ChatContainerProps> = ({ initialMessages }) => {
    // const [error, action, isPending] = useActionState(addMessage, null);
    const isPending = true;
    return (
        <>
        <div className="chat-container">
            <div className="messages-container">
            {
                initialMessages.map((message) => (
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