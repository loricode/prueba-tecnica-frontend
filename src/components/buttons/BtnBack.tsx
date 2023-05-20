import { useNavigate } from 'react-router-dom';

export const BtnBack = () => {

  const navigate = useNavigate();

  return (
   <button className='w-auto m-1 px-2 pb-1 mt-2 bg-slate-950 text-white rounded drop-shadow-lg'
      onClick={() => navigate("../home")}>
      Regresar
   </button>
  )
}
