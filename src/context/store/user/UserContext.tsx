
import { createContext, useContext } from "react";
import { initialState } from './userReducer'

export const UserContext = createContext(initialState);

export const UserDispatchContext = createContext<React.Dispatch<any>>(() => {});

export const useUser = () => {
   return useContext(UserContext);
}

export const useUserDispatch = () => {
   return useContext(UserDispatchContext);
}