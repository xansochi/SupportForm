/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiHome, CiBrightnessDown, CiUser, CiMap ,CiReceipt } from 'react-icons/ci';
import './textlabel.css';
import { ReactNode, ReactElement } from 'react';

type newdata = {
  icon?:string;
  text?:string;
}

interface Inewdata {
  icon?:string;
  text?:string;
  setTextLabel?:any;
}

const Textlabel: React.FC<Inewdata> = ({icon,text,setTextLabel}) => {
    function SetIcon():ReactNode {
        switch (icon) {
          case 'home': return <CiHome className="label-form-icon"/>;
          case 'people': return <CiUser className="label-form-icon"/>;
          case 'department': return <CiMap className="label-form-icon"/>;
          case 'actions': return <CiReceipt className="label-form-icon"/>;
          default: return <CiBrightnessDown className="label-form-icon" />;
        }
    }
  return (
    <>
    <div className="text-field">
      <input
      id="textlabel"
      type="text"
      required 
      className="newlabel-form-textinput"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextLabel(e.target.value)}
      />
      <SetIcon />
      <label
      htmlFor="textlabel"
      className="newform-textinput-label"
      >{text}
      </label>
          </div>
    </>
  );
};

export default Textlabel;