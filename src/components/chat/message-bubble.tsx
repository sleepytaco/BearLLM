"use client"

import React, { useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import { ChatMessage } from '@/types/chat';

interface MessageBubbleProps {
  message: ChatMessage;
  saveToPrisma: (message: string) => Promise<void>
}

export function MessageBubble({ message, saveToPrisma } : MessageBubbleProps)  {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (loading) {
        saveToPrisma(message.content);
        setTimeout(() => {
            // Function body is intentionally left empty
            setLoading(false);
        }, 500);
    }
  }, [saveToPrisma, message, loading, setLoading]);

  return (
    <div className={`message-bubble ${message.isLLM ? 'receiver' : 'sender'}`}>
      <div className="message-content">
        { !loading ? <p>{message.content}</p> :
        <div className="flex items-center space-x-4">
          {/* <Skeleton className="h-12 w-12 rounded-full" /> */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        }
      </div>
    </div>
  );
};