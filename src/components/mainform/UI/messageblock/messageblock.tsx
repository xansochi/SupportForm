import { ReactNode } from 'react';
import './messageblock.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Messageblock({ setMessage } :any) :ReactNode {
  return (
    <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
        className="form-message"
        placeholder="Ваше обращение"
        required >
    </textarea>
  );
}

export default Messageblock;