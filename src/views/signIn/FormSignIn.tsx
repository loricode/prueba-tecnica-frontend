//hook
import { useFormSignIn } from './useFormSignIn';

//assets
import EyeIcon from '../../assets/icons/eye-outline.svg'
import EyeOffIcon from '../../assets/icons/eye-off-outline.svg'

export const FormSignIn = () => {

   const {state, handleChange, handleChangeVisible, submit } = useFormSignIn();

  return (
   <>

     <h1 className='text-center text-3xl my-4 font-semibold text-slate-950'>Monoma</h1>

      <div>
         <input 
            className='p-2 mb-3 outline-0 w-full border-gray-500 border rounded'
            type="text"
            name='email'
            value={state.email}
            placeholder='Email'
            onChange={handleChange}
         />
      </div>

      <div className='flex justify-between p-2 mb-3 w-full border-gray-500 border rounded'>
         <input 
           autoComplete='off'
           value={state.password}
           onChange={handleChange}
           className='border-0 outline-0 w-full' 
           type={state.visible ? "text" : "password"}
           name='password'
           placeholder='Password'/>
         <div className='flex items-end'>
            <img onClick={handleChangeVisible}
               className='w-7' src={ state.visible ? EyeIcon : EyeOffIcon} alt="." />
         </div>
      </div>

      <button 
        onClick={submit}
        className="p-2 text-white w-full rounded bg-slate-950 hover:bg-slate-900">
         Login
      </button>

   </>
  )
}
