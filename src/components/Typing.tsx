import type { MessageProps } from '../models/message';

function Typing({ from, message }: MessageProps) {
  return (
    <li className="typing">
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message typing-message">
        <span>печатает…</span>
        <span className="typing-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </li>
  );
}

export default Typing;
