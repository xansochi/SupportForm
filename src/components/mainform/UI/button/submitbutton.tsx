import './submitbutton.css';
import { ReactNode } from 'react';

// interface IsubmitButtonProps {
//   onClick: (e:unknown) => void;
// }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Submitbutton({isAgree}:any):ReactNode {
  return (
    <button
        className="mainform-button"
        type="submit"
        disabled={isAgree}
        >
        ОТПРАВИТЬ
  </button>
  );
}
export default Submitbutton;