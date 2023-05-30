import { useUser } from '../../../context/store/user/UserContext';

//components
import { BtnBack } from '../../../components/buttons/BtnBack';

export const ProfileView = () => {

   const state = useUser();

  return (
   <>
      <div className='flex justify-center items-center'>
         <div className='flex flex-col font-bold  items-center rounded m-2 w-6/12 bg-white p-2 shadow-md'>
         <div>
            <h3 className='text-2xl'>{state.fullName}</h3>
            <p className='text-sm'>{state.email}</p>
          </div>
          <BtnBack />
         </div>
      </div>
   </>
  )
}
