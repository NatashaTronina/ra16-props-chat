import type { ComponentType } from 'react';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';
import type { ChatMessage, MessageType, MessageProps } from '../models/message';

interface MessageHistoryProps {
  list?: ChatMessage[];
}

const componentsByType: Record<MessageType, ComponentType<MessageProps>> = {
  message: Message,
  response: Response,
  typing: Typing,
};

function MessageHistory({ list = [] }: MessageHistoryProps) {
  if (list.length === 0) {
    return null;
  }

  return (
    <ul>
      {list.map((message) => {
        const Item = componentsByType[message.type];
        return <Item key={message.id} from={message.from} message={message} />;
      })}
    </ul>
  );
}

export default MessageHistory;
