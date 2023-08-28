/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { CiSquareChevDown, CiSquareChevUp} from 'react-icons/ci';
import './textblock.css';

const text = {
    0:'Этот сайт не предназначен для экстренных ситуаций. Если вам удобнее позвонить нам, наберите 8-900-3003009',
    1:'Информация, которую вы предоставите, будет направлена высшему руководству Air Liquide в России,которое примет решение по вашему обращению.',
    2:'Мы сгенерируем уникальный номер вашего обращения, по которому вы сможете узнать его статус. Для этого наберите 8-900-3003009. Срок подготовки ответа обычно не превышает одного месяца.',
    3:'Если вы оставите свои контактные данные, мы направим вам ответ по электронной почте или в SMS.'
    };

function Textblock():React.ReactNode {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <>
    <div className="mainform-warning">{text[0]}
    {/* { !isCollapse  &&  <CiSquareChevDown onClick={()=>setIsCollapse(!isCollapse)} className="mainform-collapsebutton" >show</CiSquareChevDown>} */}
    {/* { isCollapse  &&  <CiSquareChevUp onClick={()=>setIsCollapse(!isCollapse)} className="mainform-collapsebutton-up" >show</CiSquareChevUp>} */}
    </div>
    {/* { isCollapse  &&  <div className="mainform-warningtext"> */}
    <div className="mainform-warningtext">
      <div className="mobile-warningtext-header">После того, как вы отправите сообщение:</div>
        <ul >
            <li className="mainform-list">{text[1]}</li>
            <li className="mainform-list">{text[2]}</li>
            <li className="mainform-list">{text[3]}</li>
        </ul>
        </div>
    </>
  );
}

export default Textblock;