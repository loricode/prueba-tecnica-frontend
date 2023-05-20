//hook
import { useFormSignIn } from './useFormSignIn';

//assets
import EyeIcon from '../../assets/icons/eye-outline.svg'
import EyeOffIcon from '../../assets/icons/eye-off-outline.svg'

export const FormSignIn = () => {

   const {state, handleChange, handleChangeVisible, submit } = useFormSignIn();

  return (
   <>
      <div>
         <input 
            className='p-2 mb-3 w-full border-gray-500 border rounded'
            type="text"
            name='email'
            value={state.email}
            placeholder='Email'
            onChange={handleChange}
         />
      </div>

      <div className='flex justify-center p-2 mb-3 w-full border-gray-500 border rounded'>
         <input 
           value={state.password}
           onChange={handleChange}
           className='border-0 outline-0' 
           type={state.visible ? "text" : "password"}
           name='password'
           placeholder='Password'/>
         <div className='flex items-center'>
            <img onClick={handleChangeVisible}
               className='w-7' src={ state.visible ? EyeIcon : EyeOffIcon} alt="." />
         </div>
      </div>

      <button onClick={submit} className="p-2 text-white w-full rounded bg-gray-700 hover:bg-gray-600">
         Login
      </button>

   </>
  )
}
