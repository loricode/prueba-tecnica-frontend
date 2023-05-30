
import  {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthService } from '../../actions/signIn/signInAction';
import { validateProperty, validateEmail } from '../../utils/validation';

import { alertMessage } from '../../utils/alertMessage';

import { useUserDispatch } from '../../context/store/user/UserContext';


interface SyntheticEvent<T> {
   target: EventTarget & T;
}

export const useFormSignIn = () => {

   const dispatch = useUserDispatch();

   const navigate = useNavigate();

   const [ state, setState ] = useState(
      {
         email:"", 
         password:"",
         visible:false
      }
   );

   const handleChange = (e:SyntheticEvent<HTMLInputElement | HTMLFormElement>) => {
     
      const { value, name } = e.target;

     setState(prev => ({
       ...prev,
      [name]:value
     }));
   };

   const handleChangeVisible = () => {
      setState(prev => ({
         ...prev,
         visible: !state.visible
       }));
   };

   const submit = async () => {

      Swal.fire({
         title: 'Uploading...',
         html: 'Please wait...',
         allowEscapeKey: false,
         allowOutsideClick: false,
         didOpen: () => {
           Swal.showLoading()
         }
       });

      const objReq = {
         email:state.email,
         password:state.password,
      }

     const filedsRequired = [
         { code: 'email', codeError: 'CodeRequiredEmail' },
         { code: 'password', codeError: 'CodeRequiredPassword' },
     ];

    const validFields = validateProperty(filedsRequired, objReq);

    if(validFields){

      if(validateEmail(state.email)){
        
        await AuthService.service.signIn(objReq).then((response) =>{
           if(response.status === 200){
              Swal.close()
              
              dispatch(
               { type:"LOGIN", payload:{ 
                    userId:response.data.id,
                    fullName:response.data.name,
                    email:response.data.email }
               });
              navigate("/dashboard");
           }
         }).catch(() => {
            Swal.close()
         });

       }else{
         alertMessage("email no valido")
       }

    }
  
   };


  return { state, handleChange, handleChangeVisible, submit}
}
