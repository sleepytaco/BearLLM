import { Message } from '@prisma/client';

export type ChatMessage = Pick<Message, 'content' | 'isLLM' | 'context'>