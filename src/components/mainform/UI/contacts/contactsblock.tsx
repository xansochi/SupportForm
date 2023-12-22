import { ReactNode } from 'react';
import './contactsblock.css';
import { CiUser, CiMail, CiMobile4} from 'react-icons/ci';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Contactsblock({setFirstname, setLastname, setPhone, setEmail}:any):ReactNode {
  return (
    <>
    <div className="form-namelayer-text">Ваши контактные данные:</div>
      <div className="form-namelayer">
        <div className="contact-textinput-label">
            <input
            placeholder=" "
            name="name" aria-label="name"
            type="text"
            required 
            className="contactform-textinput"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)}
            />
            <CiUser className="contact-form-icon"/>
            <div className="icon-background"></div>
            <label
            htmlFor="name"
            className="contactform-textinput-label"
            >Ваше имя*</label>
        </div>
        <div className="contact-textinput-label">
            <input
            placeholder=" "
            name="surename" aria-label="surename"
            type="text"
            required 
            className="contactform-textinput"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)}
            />
            <CiUser className="contact-form-icon"/>
            <div className="icon-background"></div>
            <label
            htmlFor="surename"
            className="contactform-textinput-label"
            >Ваша фамилия*</label>
        </div>
      </div>
      <div className="form-emaillayer">
      <div className="contact-textinput-label">
            <input
            placeholder=" "
            name="tel" aria-label="tel"
            type="number"
            required 
            className="contactform-textinput"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            />
            <CiMobile4 className="contact-form-icon"/>
            <div className="icon-background"></div>
            <label
            htmlFor="tel"
            className="contactform-textinput-label"
            >Ваш номер телефона*</label>
        </div>
        <div className="contact-textinput-label">
            <input
            placeholder=" "
            name="email" aria-label="email"
            type="text"
            required
            className="contactform-textinput-email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <CiMail className="contact-form-icon"/>
            <div className="icon-background"></div>
            <label
            htmlFor="email"
            className="contactform-textinput-label"
            >Ваша электронная почта*</label>
          </div>
     </div>
</>
  );
}

export default Contactsblock;