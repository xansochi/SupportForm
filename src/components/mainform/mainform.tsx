/* eslint-disable @typescript-eslint/no-unused-vars */
import './mainform.css';
import Textlabel from './UI/textlabel/textlabel';
import DateForm from './UI/date/date';
import Textblock from './UI/textblock/textblock';
import Agreement from './UI/agreement/agreement';
import Contactsblock from './UI/contacts/contactsblock';
import Submitbutton from './UI/button/submitbutton';
import Messageblock from './UI/messageblock/messageblock';
import Uploadfiles from './UI/uploadfileblock/uploadfiles';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Modal from '../modal/modal';
import useModal from '../modal/useModal';
import { CiFloppyDisk } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';


function Mainform (): React.ReactNode {
  const [isBack, setIsBack] = useState(false);
  const [uniqForModal, setUniqForModal] = useState('WSS2423');
  const [message, setMessage] = useState('');
  const [datein, setDatein] = useState('');
  const [dateout, setDateout] = useState('');
  const [people, setPeople] = useState('');
  const [city, setCity] = useState('');
  const [action, setDepartment] = useState('');
  const [department, setAction] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isAgree, setIsAgree] = useState(true);
  const [uniqnum, setUniqnum] = useState(nanoid());

  const { isOpen, toggle } = useModal();

  console.log(message, datein , dateout , people , city, action, department, firstname, lastname, phone, email);
// function handleClick(e:any) {
//     e.preventDefault();
//     console.log('submit');
//     e.target.reset();
//   }
const handleTextCopy = (e: React.SyntheticEvent) => {
  navigator.clipboard?.writeText(uniqForModal);
  toast('Код скопирован в буфер обмена', {
    duration: 4000,
    position: 'top-center',
    icon: '👏',
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    ariaProps: {
      role: 'alert',
      'aria-live': 'polite',
    },
  });
};
const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
  fetch('http://192.168.88.254:3000/messages', {
      method: 'POST',
      body: JSON.stringify({
        message: message,
        datein: datein,
        dateout: dateout,
        people: people,
        city: city,
        action: action,
        department: department,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        agreemend: isAgree,
        uniqnum: uniqnum,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((res) => res.json())
      .then(
        (result) => {toggle(), setUniqForModal(result.uniqnum), console.log(result), console.log(uniqForModal);})
      .catch((err) => {
        toast.error('Сервер недоступен', {
          duration: 6000,
          position: 'top-center',
          style: {
            minWidth: '250px',
            backgroundColor: 'rgb(247, 168, 168)'
          },
        });
        console.log(err.message);
      });
 };

  return (
    <div className="mainform">
        <Textblock />
        <form className="mainform-form" onSubmit={handleSubmit}>
            <div className="mainform-textmessage">Оставьте обращение:</div>
            <Messageblock setMessage={setMessage}/>
            <Uploadfiles />
            <DateForm setDatein={setDatein} setDateout={setDateout}/>
            <Textlabel setTextLabel={setPeople} icon="people" text="Вовлеченные люди" />
            <Textlabel setTextLabel={setCity} icon="home" text="Город" />
            <Textlabel setTextLabel={setDepartment} icon="department" text="Департамент, в котором произошел инцидент" />
            <Textlabel setTextLabel={setAction} icon="actions" text="Каких действий вы ожидаете от руководства?" />
            <Contactsblock setFirstname={setFirstname} setLastname={setLastname} setPhone={setPhone} setEmail={setEmail}/>
            <Agreement setisAgree={setIsAgree} isAgree={isAgree}/>
            <Submitbutton isAgree={isAgree}/>
        </form>
        <Modal isOpen={isOpen} toggle={toggle}>
          <div className="modal-header">Спасибо за ваше обращение!</div>
          <div className="modal-numblock">Уникальный номер: <span className="modal-number">{uniqForModal}</span>
          <CiFloppyDisk
          className="modal-savebutton"
          onClick={handleTextCopy}>Save</CiFloppyDisk>
          </div>
          <div className="modal-numblock">Пожалуйста, запишите его.</div>
          <div className="modal-infotext">Чтобы узнать статус вашего обращения, вы можете позвонить по номеру 8-900-3003009.
            <br></br>
            <br></br>
            Срок подготовки ответа обычно не превышает одного месяца. Если вы
            оставили свои контактные данные, вы получите ответ по электронной почте или в SMS.</div>
          <button className="modal-endbutton" onClick={toggle}>ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</button>
        </Modal>
        <Toaster />
    </div>
  );
}
export default Mainform;
