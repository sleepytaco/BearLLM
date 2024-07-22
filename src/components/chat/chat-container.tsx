"use client"

import { FC, useState } from 'react'
import { MessageBubble } from './message-bubble';
import SendMessageForm from "@/components/forms/send-message"

import prisma from '@/lib/db';
import { ChatMessage } from '@/types/chat';

interface ChatContainerProps {
    initialMessages: ChatMessage[]
}

const ChatContainer: FC<ChatContainerProps> = ({ initialMessages = [] }) => {
    // const [error, action, isPending] = useActionState(addMessage, null);
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

    const appendMessageToChat = (message: ChatMessage) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <>
        <div className="chat-container">
            <div className="messages-container">
            {
                messages.map((message, id) => (
                <MessageBubble key={id} message={message} 
                    saveToPrisma={(m) => new Promise((resolve, reject) => {})} />))
            }
            </div>
        </div>
        <SendMessageForm appendMessageToChat={appendMessageToChat} />
        </>
    )
}

export default ChatContainer;