import { ReactNode } from 'react';
import './date.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DateForm({ setDatein, setDateout } :any) :ReactNode {
  return (
    <div className="form-datalayer-block">
    <div className="form-datalayer-text">Примерные даты происшествия:</div>
    <div className="form-datalayer">
    <div className="datainput-layer">
        <input className="form-datainput"
        type="datetime-local"
        placeholder="начало инцидента"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDatein(e.target.value)}
        />
        <div className="datainput-begin">начало</div>
    </div>
    <div className="datainput-layer">
        <input className="form-datainput"
        type="datetime-local"
        placeholder="окончание инцидента"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateout(e.target.value)}/>
        <div className="datainput-end">окончание</div>
    </div>
    </div>
    <div className="form-checkbox-layer">
        <div className="form-checkbox-text">Продолжается в настоящее время:</div>
        <input type="checkbox"/>
    </div>
</div>
  );
}

export default DateForm;