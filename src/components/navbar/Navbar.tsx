import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from "twin.macro";
import { Link } from 'react-router-dom';

import { useUserDispatch } from '../../context/store/user/UserContext';

export const StyledNavbar = tw.div`
  flex justify-between items-center bg-slate-950 p-2 h-14`
;

export const Navbar = () => {

  const dispatch = useUserDispatch()

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  const handleChangeDrodDownList = () => {
    setOpen(!isOpen)
  };

  const closeSession = () => {
    localStorage.clear();
    dispatch({ type:"LOGOUT" });
    navigate("/")
  } 

  return (
    <StyledNavbar>
      <div className=' flex justify-center text-white'>
         App Prueba tecnica
      </div>
      <div className="flex justify-center">
        <button id="dropdownDefaultButton" onClick={handleChangeDrodDownList} data-dropdown-toggle="dropdown" aria-hidden="true"   className="w-9 h-9 rounded-full text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center">
         <div id="dropdown"
           className={`z-10 ${ isOpen ? 'block' : 'hidden'} relative right-36 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link to="profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Perfil
              </Link>
            </li>
            <li onClick={closeSession} className="text-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Cerrar sesion
            </li>
          </ul>
      </div>
      </button>
      </div>
    </StyledNavbar>
  )
}
