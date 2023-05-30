import { ReactNode, useReducer } from 'react';
import { UserContext, UserDispatchContext } from './UserContext';

//Estado inicial y funcion reducer
import { initialState, userReducer } from './userReducer';

type Props = {
  children: ReactNode
} 

export const UserProvider = ({ children }:Props) => {

 const [state, dispatch] = useReducer(userReducer, initialState);

 return (

   <UserContext.Provider value={state}>
     <UserDispatchContext.Provider value={dispatch}>
       {children}
     </UserDispatchContext.Provider>
   </UserContext.Provider>

 )
} 