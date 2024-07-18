"use client"

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

interface MessageBubbleProps {
  message: string;
  isLLM: boolean;
  isLoading: boolean;
}

export function MessageBubble({ message, isLLM, isLoading } : MessageBubbleProps)  {
  const [loading, setLoading] = React.useState(isLoading);
  return (
    <div className={`message-bubble ${isLLM ? 'receiver' : 'sender'}`}>
      <div className="message-content">
        { !loading ? <p>{message}</p> :
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