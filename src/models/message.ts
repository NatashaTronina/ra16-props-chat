export interface Author {
  name: string;
}

export type MessageType = 'response' | 'message' | 'typing';

export interface ChatMessage {
  id: string;
  from: Author;
  type: MessageType;
  time: string;
  text?: string;
}

export interface MessageProps {
  from: Author;
  message: ChatMessage;
}
