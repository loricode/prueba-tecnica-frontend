import  { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type Props = { children: ReactElement };

//import { useGlobal } from '../../context/useGlobal';

export const ProtectedRoute = ({ children }:Props) => {

//  const { state } = useGlobal();
  
  const hasToken = localStorage.getItem("token"); 

  if(!hasToken){
     return <Navigate to="/" />
  }

  return children

}
