import React from 'react'

import { useGlobal } from '../../../context/useGlobal';

//components
import { BtnBack } from '../../../components/buttons/BtnBack';

export const ProfileView = () => {

   const { state } = useGlobal()

  return (
   <>
      <div className='flex justify-center items-center'>
         <div className='flex flex-col font-bold  items-center rounded m-2 w-6/12 bg-white p-2 shadow-md'>
         <div>
            <h3 className='text-2xl'>{state.user.name}</h3>
            <p className='text-sm'>{state.user.email}</p>
          </div>
          <BtnBack />
         </div>
      </div>
   </>
  )
}
