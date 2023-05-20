import { AUTHENTICATED, LOGOUT } from '../actions/auth';

export type State = {
  user:{ id:string, token: string, name:string },
  logout: boolean
}

interface Action<T> {
   type:string,
   payload:T
}

export const authReducer = (state:State, action:Action<any>) => {

   switch (action.type){

    case AUTHENTICATED: 
      return { ...action.payload, logout:true }
    case LOGOUT:
      return { ...action.payload, logout:false }
    default: return state;  

   }

}