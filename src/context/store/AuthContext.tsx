import { createContext, ReactNode, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';
import { State } from '../reducers/authReducer';

const init = (state:State) => {
  return state;
}

export const initialState = {
   user: {
      token: '', name: '', id: '', email:''
   },
   logout: false
};

type Props = { children: ReactNode };

const dispatch: React.Dispatch<any>  = () => {} 

export const CreatedContext = createContext({state:initialState, dispatch});

export const AuthContext = ({ children }: Props) => {

   const [ state, dispatch ] = useReducer(authReducer, initialState, init)

   return (
      <CreatedContext.Provider value={{ state, dispatch }} children={children}/>
   )
}


