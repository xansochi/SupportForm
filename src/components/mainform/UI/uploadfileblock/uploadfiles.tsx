import './uploadfiles.css';

type data  = {
  id?:string;
  name?:string;
}
interface Idata {
  id?:string;
  name?:string;
}

const Uploadfiles: React.FC<Idata> = ({id,name}:data) => {
    return (
    <>
    <div>{id&&`${id}${name}`}</div>
    <input type="file"></input>
    </>
    );
};

export default Uploadfiles;