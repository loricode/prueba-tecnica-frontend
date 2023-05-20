import { useContext } from 'react';
import { CreatedContext } from './store/AuthContext';

export const useGlobal = () => {

   return useContext(CreatedContext);
} 


