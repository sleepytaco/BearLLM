import React from 'react';

interface MessageBubbleProps {
  message: string;
  isSender: boolean;
}

export function MessageBubble({ message, isSender } : MessageBubbleProps)  {
  return (
    <div className={`message-bubble ${isSender ? 'sender' : 'receiver'}`}>
      <div className="message-content">
        <p>{message}</p>
      </div>
    </div>
  );
};