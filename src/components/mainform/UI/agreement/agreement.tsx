import './agreement.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Agreement = ({setisAgree, isAgree} : any) => {
  return (
    <>
         <label className="form-consent-layer">
          <div>Я даю свое согласие на передачу указанных мной сведений в ООО «Ваша компания»
          для рассмотрения моего обращения и принятия решения по нему»
          </div>
          <input 
          onChange={()=>setisAgree(!isAgree)}
          className = "form-consent-checkbox"
          type="checkbox"/>
        </label>
    </>
  );
};
export default Agreement;